import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import "./css/App.css";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
    </Router>
  );
};

export default App;
