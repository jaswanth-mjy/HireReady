import os
import pdfplumber
import requests
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# ✅ OpenAI Configuration
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
OPENAI_API_URL = os.getenv("OPENAI_API_URL")
MODEL = os.getenv("MODEL")

@app.route("/")
def index():
    return "Resume analysis backend is running."

@app.route("/analyze", methods=["POST"])
def analyze_resume():
    file = request.files['file']
    role = request.form['role']

    filename = secure_filename(file.filename)
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)

    # Extract text from PDF
    text = ""
    with pdfplumber.open(filepath) as pdf:
        for page in pdf.pages:
            extracted = page.extract_text()
            if extracted:
                text += extracted + "\n"

    # OpenAI Prompt with Skill Proficiency & Learning Plan
    prompt = f"""
    You are an expert resume reviewer and career coach.

    The candidate has applied for the role of **{role}**.
    Analyze the following resume:

    {text}

    Return a JSON response with these fields include all the specifications mentioned:

    {{
      "suggestions": [List 3–5 personalized improvements to the resume],
      "score": Integer from 0–100 (resume fit for the role),
      "skills_found": [Extracted list of technical/professional skills],
      "proficiency_analysis": {{
        "Skill1": "beginner" | "intermediate" | "expert",
        ...
      }},
      "skills_required": [Skills that are missing but needed for this role],
      "proficiency_target": {{
        "Skill1": "target proficiency level",
        ...
      }},
      "learning_plan": {{
        "Skill1": "Course or resource suggestion",
        ...
      }},
      "technical_questions": [List of 50 technical interview questions],
      "hr_questions": [List of 30 HR/behavioral interview questions],
      "resources": [
        {{ "label": "Resource Title", "url": "https://..." }},
        ...
      ]
    }}

    Respond only in JSON format.
    """

    headers = {
        "Authorization": f"Bearer {OPENAI_API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
        "model": MODEL,
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.7
    }

    response = requests.post(OPENAI_API_URL, headers=headers, json=data)

    try:
        result_text = response.json()['choices'][0]['message']['content']
        print("📡 OpenAI raw response:", result_text)
        result = json.loads(result_text.strip("```json").strip("```").strip())
    except Exception as e:
        print("❌ Error parsing OpenAI response:", e)
        print("📡 Response body:", response.text)
        result = {
            "suggestions": ["Failed to parse response."],
            "score": 0,
            "skills_found": [],
            "proficiency_analysis": {},
            "skills_required": [],
            "proficiency_target": {},
            "learning_plan": {},
            "technical_questions": [],
            "hr_questions": [],
            "resources": []
        }

    result["role"] = role
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)