import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <div className="App">
      <a href="" id="handwavelink">
        <h1 className="handwave">👋🏾</h1>
      </a>
      <div className="hero-container">
        <h1>Hi, I'm Maurice</h1>
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
            <div className="front">
              <h3>Stemkasa Landing Page</h3>
            </div>
            <div className="back">
              <h3>Stemkasa Landing Page</h3>
              <p>
                A landing page created for an early stage company's STEM
                learning app. The app, called STEMkasa, teaches elementary and
                high school students from diverse backgrounds STEM topics,
                including Astronomy, Computer Science, Biology and Physics.
              </p>
              <div className="languages">
                <p>HTML</p>
                <p>CSS</p>
                <p>Node</p>
                <p>JavaScript</p>
              </div>

              <div id="scroll-down-animation">
                <span className="mouse">
                  <span className="move"></span>
                </span>
              </div>

              <div className="launchgif">
                <h3>Launch Gif</h3>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front">
              <h3>Memory Game</h3>
            </div>
            <div className="back">
              <h3>Memory Game</h3>
              <p>
                A simple light and sound memory game created in Glitch. This
                project led me to getting accepted into CodePath's SITE
                Internship, a competitive 10 week program that teaches students
                full-stack development with the PERN stack.
              </p>
              <div className="languages" id="memorygamelanguages">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
              </div>
              <div className="launchgif">
                <h3>Launch Gif</h3>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front">
              <h3>Movie Generator</h3>
            </div>
            <div className="back">
              <h3>Movie Generator</h3>
              <p>
                An app that allows users to search for movies and displays them
                using the themoviedb API. My first time using APIs and
                JavaScript
              </p>
              <div className="languages">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>Node</p>
              </div>
              <div className="launchgif">
                <h3>Launch Gif</h3>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="other-interests">
        <h2>Only Code? Boring... What else do you do?</h2>
        <div className="otherimagesandtext">
          <div id="gamertext" className="otherimagetext">
            <h2>I'm a gamer and Twitch streamer</h2>
          </div>
          <div id="gamerimage">
            <img src={require("./Portfolio Photos/IMG_1528 1.png")} alt="" />
          </div>
        </div>
        <div className="otherimagesandtext">
          <div id="chefimage">
            <img
              src={require("./Portfolio Photos/muhammed-paqer-jJUuF4hqCQM-unsplash.jpg")}
              alt=""
            />
            <h2>...and an amateur chef</h2>
          </div>
        </div>
        <div className="otherimagesandtext">
          <div id="movietext" className="otherimagetext">
            <h2>...and also a movie fanatic</h2>
          </div>
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
          <a href="https://github.com/mauricea11" target="blank">
            <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-github-community-for-software-building-and-testing-online-logo-color-tal-revivo.png" />
          </a>
          <a href="https://www.linkedin.com/in/mauriceaugust/" target="blank">
            <img src="https://img.icons8.com/ios-filled/55/null/linkedin.png" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
