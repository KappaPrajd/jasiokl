import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import "./css/App.css";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/projects" exact component={Projects}></Route>
      <Route path="/about" exact component={About}></Route>
      <Route path="/contact" exact component={Contact}></Route>
    </Router>
  );
};

export default App;
