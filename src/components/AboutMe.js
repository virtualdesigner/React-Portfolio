import React, { Component } from "react";
import my_pic from "../img/portrait.jpg";

export default class AboutMe extends Component {
  render() {
    return (
      <div id="about">
        <h1 className="lg-heading">
          <span className="text-secondary">About</span> Me
        </h1>
        <div className="about-main">
          <div className="about-pic-side">
            <div className="about-pic" />
            <div className="about-name">S M Deepak</div>
          </div>
          <div className="about-text-side">
            I love to believe the truth that learning is the only one which
            helps you to understand failures, what is real victory, and give you
            the satisfaction of time spent well. Situations change, thoughts
            change, our passion might change, but learning doesn't! I'll surely
            grab each & every opportunity that makes me uncomfortable (in a good
            manner) and to learn from it, as a teen and a dropout i'll say that
            i've started tasting the learning process, which is awesome :) I
            have much respect to Programming which introduced me to Understand
            real Learning, and got me dropped out ;).That's all about me in
            short, see you soon.
          </div>
        </div>
      </div>
    );
  }
}
