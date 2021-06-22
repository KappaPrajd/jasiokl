import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "./Header";
import Footer from "./Footer";
import "swiper/swiper-bundle.css";
import "./css/Project.css";

const Project = (props) => {
  const [projectMeta, setProjectMeta] = useState({});
  const [projectItems, setProjectItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState();

  //fire useEffect on load and when user moves between projects (and changes url at the same time, hence the dependency array) in order to get the correct data
  useEffect(() => {
    const fetchProject = async () => {
      const url = window.location.href.split("/");
      const id = url[url.length - 1];

      const res = await axios.get("http://localhost:5000/api/project", {
        params: { id },
      });

      if (res.data.error) {
        setError(res.data.error);
        return;
      }

      setProjectMeta(res.data.projectMeta);
      setProjectItems(res.data.projectItems);
    };

    fetchProject();
  }, [props.match.params.id]);

  const renderSlides = () => {
    return projectItems.map((el, index) => {
      return (
        <SwiperSlide className="swiper-slide-project" key={index}>
          <div
            className="item-img"
            style={{ backgroundImage: `url(${el})` }}
          ></div>
        </SwiperSlide>
      );
    });
  };

  if (error) {
    return <Redirect to="/" />;
  }

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
        <div className="project-items">
          <Swiper
            className="swiper-container-project"
            slidesPerView={1}
            onSlideChange={(e) => setCurrentSlide(e.realIndex)}
          >
            {renderSlides()}
          </Swiper>
          <div className="slide-number">
            <h4>
              {currentSlide + 1}/{projectItems.length}
            </h4>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Project;
