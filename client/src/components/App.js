import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";
import "./css/App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/projects" exact component={Projects}></Route>
        <Route path="/project/:id" exact component={Project}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
