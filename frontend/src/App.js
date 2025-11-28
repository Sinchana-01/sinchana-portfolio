// App.js
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <header className="hero">
        <h1>Sinchana</h1>
        <p>Computer Science Student | Aspiring Software Engineer</p>
      </header>

      <main className="container">
        {/* Contact */}
        <section>
          <h2>Contact</h2>
          <p>📞 +91 87921 71893</p>
          <p>📧 sinchanabrigade1@gmail.com</p>
          <p>📍 Hassan, Karnataka</p>
        </section>

        {/* Career Objective */}
        <section>
          <h2>Career Objective</h2>
          <p>
            Motivated Computer Science student with strong programming and
            problem-solving skills, seeking to build scalable software
            solutions and grow through continuous learning and real-world
            project experience.
          </p>
        </section>

        {/* Education */}
        <section>
          <h2>Education</h2>
          <ul>
            <li>
              <strong>B.E. in Computer Science and Engineering</strong>, Malnad
              College of Engineering, Hassan (2020 – 2026) <br />
              CGPA: 9.74 (till 6th semester)
            </li>
            <li>
              <strong>12th Grade (PUC)</strong>, Brigade PU College, Hassan
              (2022) <br />
              Percentage: 95.67%
            </li>
            <li>
              <strong>10th Grade (SSLC)</strong>, Sri Sathyanarayana Prasanna
              High School, Hassan (2020) <br />
              Percentage: 93.28%
            </li>
          </ul>
        </section>

        {/* Technical Skills */}
        <section>
          <h2>Technical Skills</h2>
          <ul>
            <li>
              <strong>Programming Languages:</strong> C, Python, Java (Basics)
            </li>
            <li>
              <strong>Web Development:</strong> HTML, CSS, JavaScript, React
              (Basics)
            </li>
            <li>
              <strong>Database:</strong> MySQL, MongoDB, PostgreSQL
            </li>
            <li>
              <strong>Frameworks &amp; Tools:</strong> Figma, Canva
            </li>
          </ul>
        </section>

        {/* Projects */}
        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Farm2Home – E-Commerce Website (2025)</strong>
              <br />
              Developed a responsive website to connect farmers directly with
              customers, reducing dependency on intermediaries. Built using
              HTML, CSS, JavaScript with backend integration to manage
              products, orders, and user interactions.
            </li>
            <li>
              <strong>
                Ovarian Cancer Detection using Advanced ML Techniques (Ongoing)
              </strong>
              <br />
              Focused on early diagnosis using ML models such as Fuzzy Gabor
              filter, t-SNE, and ResNet for classification of medical images.
              Serving as the team lead, responsible for model experimentation
              and result analysis.
            </li>
            <li>
              <strong>Smart Last-Mile Logistics Platform (2025)</strong>
              <br />
              Designed a lightweight backend dispatch system using FastAPI and
              PostgreSQL to streamline rural feed-bag deliveries. Implemented
              order clustering using K-Means, OTP-based delivery verification
              with Twilio, and real-time cash-on-delivery (COD) tracking.
            </li>
          </ul>
        </section>

        {/* Certifications */}
        <section>
          <h2>Certifications</h2>
          <ul>
            <li>
              Diploma in Computer Programming – IDEAL Computer Education (2022)
            </li>
            <li>C Programming – Great Learning Academy (2023)</li>
            <li>Soft Skill Development – NPTEL (2024)</li>
            <li>Human Computer Interaction – NPTEL (2025)</li>
          </ul>
        </section>

        {/* Languages */}
        <section>
          <h2>Languages</h2>
          <ul>
            <li>English – Fluent</li>
            <li>Kannada – Native</li>
            <li>Hindi – Basic</li>
          </ul>
        </section>

        <footer>
          <p>© {new Date().getFullYear()} Sinchana</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
