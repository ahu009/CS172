from flask import Flask, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/hello', methods = ['GET', 'POST'])
def hello():
  return "hello jackie"
if __name__ == '__main__':
    app.run(debug = True)
