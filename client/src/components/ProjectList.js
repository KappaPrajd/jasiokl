import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard } from "swiper";
import Header from "./Header";
import Footer from "./Footer";
import "swiper/swiper-bundle.css";
import "./css/ProjectList.css";

// Slides containing responsive pictures break Swiper when window is resized
// https://github.com/nolimits4web/swiper/issues/3088

SwiperCore.use([Keyboard]);

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get("/api/projects");
      setProjects(res.data);
    };

    fetchProjects();
  }, []);

  const renderSlides = () => {
    return projects.map((project) => {
      return (
        <SwiperSlide className="swiper-slide-projects" key={project.id}>
          <Link to={`/project/${project.id}`}>
            <div
              className="slide-img-projects"
              style={{ backgroundImage: `url(${project.thumbnail})` }}
            >
              <div className="slide-id">
                <h3>{project.id}</h3>
              </div>
              <div className="slide-name">
                <h3>{project.name}</h3>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      );
    });
  };

  return (
    <React.Fragment>
      <Header />
      <div className="main projects">
        <h1 className="bg-header">PROJEKTY</h1>
        <Swiper
          className="swiper-container-projects"
          slidesPerView="auto"
          spaceBetween={window.innerWidth > 600 ? 175 : 0}
          centeredSlides={true}
          keyboard={true}
          onResize={(e) => console.log(e)}
        >
          {renderSlides()}
        </Swiper>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Projects;
