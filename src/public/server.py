from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

incomes = [
  { 'description': 'salary', 'amount': 5000 },
  { 'description': 'salary', 'amount': 6000 },
  { 'description': 'poopoo', 'amount': 7000 }
]

@app.route('/hello', methods = ['GET', 'POST'])
def hello():
  return jsonify(incomes)

if __name__ == '__main__':
    app.run(debug = True)
