import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "./Header";
import "swiper/swiper-bundle.css";
import "./css/Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get("http://localhost:5000/api/projects");
      setProjects(res.data);
    };

    fetchProjects();
  }, []);

  const renderSlides = () => {
    return projects.map((project) => {
      return (
        <SwiperSlide key={project.id}>
          <div
            className="slide-img"
            style={{ backgroundImage: `url(${project.thumbnail})` }}
          >
            <div className="slide-id">
              <h3>{project.id}</h3>
            </div>
            <div className="slide-name">
              <h3>{project.name}</h3>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <React.Fragment>
      <Header />
      <div className="main projects">
        <h1 className="bg-header">PROJEKTY</h1>
        <Swiper slidesPerView="auto" spaceBetween={175} centeredSlides={true}>
          {renderSlides()}
        </Swiper>
        <div className="footer">
          <h3>Jan Kluczkiewicz</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
