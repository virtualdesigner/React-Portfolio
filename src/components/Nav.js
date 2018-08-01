import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      close: false
    };

    this.toggleHamburger = this.toggleHamburger.bind(this);
  }

  toggleHamburger() {
    this.setState(prevState => ({
      close: !prevState.close
    }));
  }

  render() {
    return (
      <div id="nav">
        <div
          className={classnames("hamburger", {
            close: this.state.close
          })}
          onClick={this.toggleHamburger}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>

        <div
          className={classnames("nav-box", {
            show: this.state.close
          })}
        >
          <div
            className={classnames("portrait-side", {
              show: this.state.close
            })}
          >
            <div
              className={classnames("portrait", {
                show: this.state.close
              })}
            />
          </div>
          <ul
            className={classnames("nav-link-side", {
              show: this.state.close
            })}
          >
            <li
              className={classnames("nav-item", {
                show: this.state.close
              })}
            >
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li
              className={classnames("nav-item", {
                show: this.state.close
              })}
            >
              <Link to="/about" className="nav-link">
                About Me
              </Link>
            </li>
            <li
              className={classnames("nav-item", {
                show: this.state.close
              })}
            >
              <Link to="/projects" className="nav-link">
                My Projects
              </Link>
            </li>
            <li
              className={classnames("nav-item", {
                show: this.state.close
              })}
            >
              <Link to="/contact" className="nav-link">
                How to Reach Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
