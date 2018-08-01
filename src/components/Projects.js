import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <h1 className="lg-heading">
          <span className="text-secondary">Pro</span>jects
        </h1>
        <div className="projects-list">
          <div className="project">
            <div className="project-back-pic" />
            <div className="project-link-box">
              <a
                href="https://github.com/virtualdesigner/ProgrammerzClub"
                target="_blank"
                className="project-text-link"
              >
                Github
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-back-pic" />
            <div className="project-link-box">
              <a
                href="https://codepen.io/CreatorInCloud/pen/qoYmKR"
                target="_blank"
                className="project-text-link"
              >
                Codepen
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-back-pic" />
            <div className="project-link-box">
              <a
                href="https://codepen.io/CreatorInCloud/pen/ELKYaB"
                target="_blank"
                className="project-text-link"
              >
                Codepen
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-back-pic" />
            <div className="project-link-box">
              <a
                href="https://codepen.io/CreatorInCloud/pen/Yamzrx"
                target="_blank"
                className="project-text-link"
              >
                Codepen
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-back-pic" />
            <div className="project-link-box">
              <a
                href="https://codepen.io/CreatorInCloud/pen/odvdbw"
                target="_blank"
                className="project-text-link"
              >
                Codepen
              </a>
            </div>
          </div>
          <div className="project">
            <div className="project-back-pic" />
            <div className="project-link-box">
              <a
                href="https://codepen.io/CreatorInCloud/pen/OZVPxQ"
                target="_blank"
                className="project-text-link"
              >
                Codepen
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
