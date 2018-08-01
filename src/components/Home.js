import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <h1 className="lg-heading">
          <span className="text-secondary">S M </span>Deepak
        </h1>
        <h2 className="sm-heading">Full Stack Web Developer</h2>
        <div className="icons">
          <a href="https://twitter.com/S_M_DEEPAK" target="_blank">
            <i className="fab fa-twitter fa-2x" />
          </a>
          <a href="https://www.facebook.com/deepak.sm.58" target="_blank">
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/s-m-deepak-5ba253154/"
            target="_blank"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a href="https://github.com/virtualdesigner" target="_blank">
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
