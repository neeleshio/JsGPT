</h1>
<h4 align="center">JsGPT - ChatGPT for JavaScript</h4>
<div align="center">
  <a href="https://jsgpt.vercel.app"><img src="https://img.shields.io/badge/host-vercel-success">
  <a href="https://github.com/neeleshio/JsGPT/tree/master/server"><img src="https://img.shields.io/badge/flask-server-blueviolet"><a/>
  <img src="https://img.shields.io/badge/contributions-welcome-orange.svg">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=JsGPT-badge">
</div>

## Demo

<h1 align="center">
  <img src="https://user-images.githubusercontent.com/56342160/237042867-ce01ce6a-4414-4f9c-bace-0849f3516010.gif" alt="demo" width="600">
</h1>
    
## 🗂️ Intro
    
The backend is a [LlamaIndex](https://gpt-index.readthedocs.io/en/latest/) powered Flask server and the frontend is built with ReactJs.
    
2 main libraries used to index our custom data are:
1. [LlamaIndex](https://gpt-index.readthedocs.io/en/latest/) :- LlamaIndex (GPT Index) is a package that provides a central interface to connect your [LLM’s(large language model)](https://en.wikipedia.org/wiki/Large_language_model) with external data.
2. [LangChain](https://python.langchain.com/en/latest/index.html) :- LangChain is a framework for developing applications powered by language models.

## 🚀 To Run locally

You'll need [git](https://git-scm.com), [npm](http://npmjs.com), [python](https://www.python.org/downloads/) & [pip](https://pypi.org/project/pip/) installed on your computer.

From your command line:

```
# Clone this repository
$ git clone https://github.com/neeleshio/JsGPT.git

# Go into the repository
$ cd JsGPT

# Install dependencies
$ npm install

# Run the frontend
$ npm start
    
// To run the backend server
# Go into the server folder
$ cd server
    
# Install dependencies
$ pip3 install -r requirements.txt
    
# Start the server
$ OPENAI_API_KEY=your_key python3 ./index.py
```
    
    
Generate an [OpenAI](https://platform.openai.com/account/api-keys) API key.
    

## Become a Contributor :

1. Clone the repo and create a new branch: $ git checkout https://github.com/neeleshio/JsGPT.git

2. Make changes and test.

3. Submit Pull Request with decent description of changes.
