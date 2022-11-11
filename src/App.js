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
        <div className="contain">
          <div className="row">
            <div className="row__inner">
              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg"
                    alt=""
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>

              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-2.jpg"
                    alt=""
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>

              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-17.jpg"
                    alt=""
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>

              <div className="tile">
                <div className="tile__media">
                  <img
                    className="tile__img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-18.jpg"
                    alt=""
                  />
                </div>
                <div className="tile__details">
                  <div className="tile__title">Top Gear</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skills-section">
        <h1>My Skills</h1>
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
    </div>
  );
}

export default App;
