# 🚀 Hire Ready — AI-Powered Resume Analyzer

> Upload your resume PDF + target role, and get:
> - ✨ Tailored improvement suggestions
> - 📊 Job-fit score
> - 🧠 50+ technical interview questions
> - 💬 30+ HR questions
> - 📘 Learning resources

Built using **React (frontend)** + **Flask (backend)** + **OpenAI API**.

---

## 🌐 Live Demo (optional)
[👉 Watch the demo](https://youtu.be/your-demo-link) *(if you’re uploading a YouTube walkthrough)*

---

## 📁 Project Structure

/frontend      # React app
/backend       # Flask API with OpenAI integration

---

## 🛠️ Setup Instructions

### ✅ Prerequisites

- Node.js v16+ & npm
- Python 3.8+
- Git
- OpenAI API Key (GPT-4o-mini or GPT-3.5)
- `pip`, `venv` (Python package manager & environment)

---

## ⚙️ Backend Setup (`/backend`)

1. Navigate to the backend folder:

```bash
cd backend

	2.	Create a virtual environment:

python3 -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows

	3.	Install Python dependencies:

pip install -r requirements.txt

	4.	Set up your OpenAI API Key in app.py:

OPENAI_API_KEY = "sk-...your key here..."

	5.	Run the Flask server:

python app.py

Server runs at: http://127.0.0.1:5000

⸻

💻 Frontend Setup (/frontend)
	1.	Open a new terminal and go to the frontend folder:

cd frontend

	2.	Install dependencies:

npm install

	3.	Start the React app:

npm start

App runs at: http://localhost:3000

⸻

🔐 API Key Security (Important!)
	•	DO NOT commit your API key to GitHub.
	•	Add app.py to .gitignore OR store the key in an environment variable and load it using os.environ.

Example (using .env):

import os
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY")


⸻

📷 Screenshots

Upload Page (Home)	Result Dashboard
	


⸻

💡 Features
	•	Upload your PDF resume
	•	Enter target job role (e.g., Data Analyst)
	•	Get:
	•	✔️ Role-specific suggestions
	•	📈 Resume-job fit score
	•	🎯 50 technical questions
	•	💬 30 HR questions
	•	📚 Recommended resources

⸻

📦 Technologies Used
	•	Frontend: React.js
	•	Backend: Python Flask
	•	LLM API: OpenAI (GPT-4o / GPT-3.5)
	•	PDF Parsing: pdfplumber
	•	HTTP: axios, requests

⸻

📄 License

MIT © YourName

⸻

💬 Contact

Want to connect?
📬 LinkedIn | 🐦 Twitter | 📧 Email

⸻

⭐ Star this repo if it helped you!

---

Let me know:
- If you want to include Tailwind or CSS setup info.
- If you're uploading screenshots so I can name them correctly.
- If you want GitHub Pages or Render deployment instructions included too.

Would you like me to create a `.gitignore` file for you as well?
