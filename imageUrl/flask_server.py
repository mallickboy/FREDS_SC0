from flask import Flask, request, jsonify
from flask import Flask, request, url_for, send_from_directory, jsonify
import os
import re
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_extraction.text import TfidfVectorizer
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

NON_ALPHANUM = re.compile(r'[\W]')
NON_ASCII = re.compile(r'[^a-z0-1\s]')

# Load the trained RandomForestClassifier
rf_classifier = joblib.load('rf_classifier_model.joblib')
tfidf_vectorizer = joblib.load('tfidf_vectorizer.joblib')


def normalize_texts(texts):
    normalized_texts = []
    for t in texts:
        lower = t.lower()
        no_punctuation = NON_ALPHANUM.sub(r' ', lower)
        no_non_ascii = NON_ASCII.sub(r'', no_punctuation)
        normalized_texts.append(no_non_ascii)
    return normalized_texts


@app.route('/classify', methods=['POST'])
def classify_text():
    data = request.get_json()
    user_input = data.get('text')
    print(user_input)
    user_input = normalize_texts([user_input])

    # Transform user input using the pre-trained TF-IDF vectorizer
    user_input_transformed = tfidf_vectorizer.transform(user_input)

    # Predict toxicity for the input text
    prediction = rf_classifier.predict(user_input_transformed)
    print(int(prediction[0]))
    ans = int(prediction[0])
    return jsonify({'prediction': ans})


UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# ... Other routes and setup ...
number = 1


@app.route('/')
def showInfo():
    return "hello, image to Url converter is live"


@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    uploaded_file = request.files['file']

    if uploaded_file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Get the custom file name from the request data
    custom_file_name = request.form.get('data')

    # Save the uploaded file to the upload directory using the custom name
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], custom_file_name)
    uploaded_file.save(file_path)

    # Construct the URL to the uploaded file based on host name
    host_name = request.host  # Get the host name from the request
    file_url = f'http://{host_name}/{UPLOAD_FOLDER}/{custom_file_name}'

    return jsonify({'file_url': file_url})

# Serve uploaded files


@app.route('/uploads/<filename>')
def serve_uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)


if __name__ == '__main__':
    app.run()
