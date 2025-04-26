from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

SOLR_URL = 'http://localhost:8983/solr/articles/select'

@app.route('/search')
def search():
    query = request.args.get('q', '*:*')

    solr_params = {
        'q': f'title:{query} OR author:{query} OR category:{query}',
        'wt': 'json'
    }

    try:
        solr_response = requests.get(SOLR_URL, params=solr_params)
        solr_response.raise_for_status()  # catch HTTP errors
        docs = solr_response.json()['response']['docs']
        return jsonify(docs)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
