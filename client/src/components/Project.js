import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import "./css/Project.css";

const Project = (props) => {
  const [projectMeta, setProjectMeta] = useState({});
  const [projectItems, setProjectItems] = useState([]);

  console.log(props.match);

  //fire useEffect on load and when user moves between projects (and changes url at the same time, that's why the dependency array) in order to get the correct data
  useEffect(() => {
    const fetchProject = async () => {
      const url = window.location.href.split("/");
      const id = url[url.length - 1];

      const res = await axios.get("http://localhost:5000/api/project", {
        params: { id },
      });

      setProjectMeta(res.data.projectMeta);
      setProjectItems(res.data.projectItems);
    };

    fetchProject();
  }, [props.match.params.id]);

  return (
    <React.Fragment>
      <Header />
      <div className="main project">
        <div className="project-meta">
          <h2 className="project-title">{projectMeta.name}</h2>
          <p className="project-desc">{projectMeta.description}</p>
          <div className="project-nav">
            <Link to={`/project/${projectMeta.previousProject}`}>
              <div className="previous-project">
                <i className="arrow left"></i>
              </div>
            </Link>
            <Link to={`/project/${projectMeta.nextProject}`}>
              <div className="next-project">
                <i className="arrow right"></i>
              </div>
            </Link>
          </div>
        </div>
        <div className="project-items"></div>
        <div className="footer">Jan Kluczkiewicz</div>
      </div>
    </React.Fragment>
  );
};

export default Project;
