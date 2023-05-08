import os
from llama_index import SimpleDirectoryReader, GPTVectorStoreIndex, GPTVectorStoreIndex, StorageContext, load_index_from_storage
from flask import Flask, request, make_response, jsonify
from flask_cors import CORS

# NOTE: for local testing only, do NOT deploy with your key hardcoded
os.environ["OPENAI_API_KEY"] = os.environ.get('OPENAI_API_KEY')

app = Flask(__name__)
CORS(app)

index = None

def initialize_index():
    global index
    
    if os.path.exists('./storage'):
       storage_context = StorageContext.from_defaults(persist_dir='./storage')
       index = load_index_from_storage(storage_context)
    else:
       documents = SimpleDirectoryReader('./data').load_data()
       index = GPTVectorStoreIndex.from_documents(documents)
       index.storage_context.persist()


@app.route("/query", methods=["GET"])
def query_index():
  global index
  query_text = request.args.get("text", None)
  if query_text is None:
    return "No text found, please include a ?text=blah parameter in the URL", 400
  query_engine = index.as_query_engine()
  response = query_engine.query(query_text)

  response_json = { "output": str(response) }

  return make_response(jsonify(response_json)), 200


@app.route("/")
def home():
    return "Hello, World! Welcome to the JsGPT v1.3"


if __name__ == "__main__":
    initialize_index()
    app.run(host="0.0.0.0", debug=False, port=5601)