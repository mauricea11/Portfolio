import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [loadingNums, changeLoadingNums] = useState(0);
  function incrementbyone() {
    // clearInterval(interval);

    changeLoadingNums((prev) => prev + 1);
  }
  // const interval = setInterval(incrementbyone, 10);
  return (
    <div className="App">
      <h1 className="handwave">👋🏾</h1>
      <div className="hero-container">
        <h1>I'm Maurice</h1>
      </div>
      <section className="about">
        <h2>I'm a hobbyist front end developer and computer science student</h2>
      </section>
      <section className="work">
        <h2>Check out my work</h2>
        <div className="hr-container">
          <hr />
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front">Stemkasa Landing Page</div>
            <div className="back">back</div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front">Memory Game</div>
            <div className="back">back</div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front">Movie Generator</div>
            <div className="back">back</div>
          </div>
        </div>
      </section>
      <section className="other-interests">
        <h2>Only Code? Boring... What else do you do?</h2>
        <div className="otherimagesandtext">
          <div id="gamertext" className="otherimagetext">
            <h2>I'm a gamer and Twitch streamer</h2>
          </div>
          <div id="gamerimage"></div>
        </div>
        <div className="otherimagesandtext">
          <div id="cheftext" className="otherimagetext">
            <h2>...and an amateur chef</h2>
          </div>
          <div id="chefimage"></div>
        </div>
        <div className="otherimagesandtext">
          <div id="movietext" className="otherimagetext">
            <h2>...and also a movie fanatic</h2>
          </div>
          <div id="movieimage"></div>
        </div>
      </section>
      <section className="skills-section">
        <h2>My Skills</h2>
        <div className="hr-container">
          <hr />
        </div>
        <div className="listofskills">
          <ul>
            <li className="skill-item">
              <span>HTML</span>
            </li>
            <li className="skill-item">
              <span>CSS</span>
            </li>
            <li className="skill-item">
              <span>JavaScript(Vanilla, React)</span>
            </li>
            <li className="skill-item">
              <span>Node</span>
            </li>
            <li className="skill-item">
              <span>SQL</span>
            </li>
            <li className="skill-item">
              <span>Figma</span>
            </li>
            <li className="skill-item">
              <span>Git</span>
            </li>
            <li className="skill-item">
              <span>Python</span>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <h2>Contact Me</h2>
        <div className="hr-container">
          <hr />
        </div>
        <div className="links">
          <a href="#" target="blank">
            <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-github-community-for-software-building-and-testing-online-logo-color-tal-revivo.png" />
          </a>
          <a href="#" target="blank">
            <img src="https://img.icons8.com/ios-filled/55/null/linkedin.png" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
