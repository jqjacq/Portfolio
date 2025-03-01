import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "../styles/carousel.css";
// import "../styles/index.css";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  HashNavigation,
} from "swiper/modules";

import projectlist from "../data/projectslist.js";

const PastProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(projectlist);
  }, []);

  return (
    <>
      <div className="transparent-container">
        <h1 className="bold centerText"> 2023 Projects</h1>
        <Swiper
          navigation={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={2}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 25,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, HashNavigation]}
          className="mySwiper"
        >
          {projects
            .filter((project) => project.year === 2023)
            .map((project) => (
              <SwiperSlide key={project.id} data-hash={project.hash}>
                <div className="project-grid" key={project.id}>
                  <h5 className="bold centerText project-type">
                    {/* {project.projecttype}: {project.name} */}
                    {project.fullname}
                    {project.website ? (
                      <a
                        target="_blank "
                        className={`${project.className}`}
                        href={`https://jqjacq.github.io/${project.link}`}
                        alt="Website Link"
                      >
                        <img
                          className="project-images"
                          src={project.img}
                          alt={project.name}
                          title={project.description}
                        ></img>
                      </a>
                    ) : (
                      <a
                        target="_blank "
                        href={`https://github.com/jqjacq/${project.link}`}
                      >
                        <img
                          className="project-images"
                          src={project.img}
                          alt={project.name}
                          title={project.description}
                        ></img>
                      </a>
                    )}
                    <div className="centerText">
                      <span className="subsize">{project.language}</span>
                      <div className="codelink bold centerText">
                        <a
                          target="_blank "
                          href={`https://github.com/jqjacq/${project.link}`}
                        >
                          Code <i className="fa fa-github icons"></i>
                        </a>
                        {project.website ? (
                          <a
                            target="_blank "
                            href={`https://jqjacq.github.io/${project.link}`}
                          >
                            Website <i className="fa fa-link icons"></i>
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </h5>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="transparent-container">
        <h1 className="bold centerText"> 2022 Projects</h1>
        <Swiper
          navigation={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={2}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 25,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation, HashNavigation]}
          className="mySwiper"
        >
          {projects
            .filter((project) => project.year === 2022)
            .map((project) => (
              <SwiperSlide key={project.id}>
                <div
                  className="project-grid"
                  key={project.id}
                  data-hash={project.hash}
                >
                  <h5 className="bold centerText project-type">
                    {project.fullname}
                    <a
                      target="_blank "
                      className={`${project.className}`}
                      href={`https://github.com/jqjacq/${project.link}`}
                      alt="Website Link"
                    >
                      <img
                        className="project-images"
                        src={project.img}
                        alt={project.name}
                        title={project.description}
                      ></img>
                    </a>
                    <div className="centerText">
                      <span className="subsize">{project.language}</span>
                      <div className="codelink bold centerText">
                        <a
                          target="_blank "
                          href={`https://github.com/jqjacq/${project.link}`}
                        >
                          Code <i className="fa fa-github icons"></i>
                        </a>
                      </div>
                    </div>
                  </h5>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default PastProjects;
