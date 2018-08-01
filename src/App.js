import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./dist/main.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
