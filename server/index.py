import os
from llama_index import SimpleDirectoryReader, GPTVectorStoreIndex, GPTVectorStoreIndex, ServiceContext
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS

# NOTE: for local testing only, do NOT deploy with your key hardcoded
os.environ["OPENAI_API_KEY"] = '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'

app = Flask(__name__)
CORS(app)

index = None
index_name = "./index.json"

def initialize_index():
    global index
    documents = SimpleDirectoryReader('./data').load_data()
    index = GPTVectorStoreIndex.from_documents(documents)


@app.route("/query", methods=["GET"])
def query_index():
  global index
  query_text = request.args.get("text", None)
  if query_text is None:
    return "No text found, please include a ?text=blah parameter in the URL", 400
  query_engine = index.as_query_engine()
  response = query_engine.query(query_text)
  return str(response), 200

@app.route("/")
def home():
    return "Hello, World! Welcome to the llama_index docker image!"


if __name__ == "__main__":
    initialize_index()
    app.run(host="0.0.0.0", debug=False, port=5001)