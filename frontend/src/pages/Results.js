import React from 'react';
import '../styles.css';

export default function Results() {
  const data = JSON.parse(localStorage.getItem("results"));
  if (!data) return <div className="container">No analysis found.</div>;

  return (
    <div className="container">
      <h2>Resume Analysis Report</h2>

      <section>
        <h3>📊 Suggestions</h3>
        <ul>
          {data.suggestions?.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </section>

      <section>
        <h3>📈 Score & Role</h3>
        <p><strong>{data.score}%</strong> fit for <strong>{data.role}</strong></p>
      </section>

      <section>
        <h3>✅ Skills Found</h3>
        <ul>
          {data.skills_found?.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </section>

      <section>
        <h3>📚 Learning Plan</h3>
        <ul>
          {data.learning_plan &&
            Object.entries(data.learning_plan).map(([skill, res], i) => (
              <li key={i}><strong>{skill}:</strong> {res}</li>
            ))}
        </ul>
      </section>

      <section>
        <h3>📉 Proficiency (Current)</h3>
        <ul>
          {data.proficiency_analysis &&
            Object.entries(data.proficiency_analysis).map(([skill, level], i) => (
              <li key={i}><strong>{skill}</strong>: {level}</li>
            ))}
        </ul>
      </section>

      <section>
        <h3>🎯 Target Proficiency</h3>
        <ul>
          {data.proficiency_target &&
            Object.entries(data.proficiency_target).map(([skill, level], i) => (
              <li key={i}><strong>{skill}</strong>: {level}</li>
            ))}
        </ul>
      </section>

      <section>
        <h3>🧠 Technical Questions</h3>
        <ol>
          {data.technical_questions?.slice(0, 25).map((q, i) => <li key={i}>{q}</li>)}
        </ol>
      </section>

      <section>
        <h3>💬 HR Questions</h3>
        <ol>
          {data.hr_questions?.slice(0, 15).map((q, i) => <li key={i}>{q}</li>)}
        </ol>
      </section>

      <section>
        <h3>📘 Recommended Resources</h3>
        <ul>
          {data.resources?.map((res, i) => (
            <li key={i}>
              <a href={res.url} target="_blank" rel="noopener noreferrer">
                {res.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}