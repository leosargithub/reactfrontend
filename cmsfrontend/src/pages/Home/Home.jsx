import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <div className="content">
        <p className="eyebrow">Hi, I'm</p>

        <h1>Your Name</h1>
        <h2>Frontend Developer</h2>

        <p className="lead">
          I build clean, fast and accessible web experiences. Welcome to my
          portfolio.
        </p>

        <div className="actions">
          <a href="/projects" className="btn primary">
            View my work
          </a>

          <a href="/contact" className="btn ghost">
            Contact me
          </a>
        </div>

        <div className="socials">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
