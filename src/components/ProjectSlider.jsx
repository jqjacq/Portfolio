import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, HashNavigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/swiper.css";
import data from "../data/projectslist.js";

const ProjectSlider = ({ year }) => {
  const filteredYearProjects = data.filter((project) => project.year === year);
  return (
    <div className="transparent-container">
      <h1 className="bold centerText"> {year} Projects</h1>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={2}
        coverflowEffect={{ rotate: 35, stretch: 0, depth: 25, modifier: 1, slideShadows: false }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        {filteredYearProjects.map((project) => {
          const imageSrc = `/src/assets/${year}/${project.img}`;
          return (
            <SwiperSlide key={project.id} data-hash={project.hash}>
              <div className="project-grid">
                <h5 className="bold centerText project-type">
                  {project.fullname}
                  <a
                    target="_blank "
                    className={`${project.className}`}
                    href={`https://jqjacq.github.io/${project.link}`}
                    alt="Website Link"
                  >
                    <img className="project-images" src={imageSrc} alt={project.name} title={project.description} />
                  </a>
                  <div className="centerText">
                    <span className="subsize">{project.language}</span>
                    <div className="codelink bold centerText">
                      <a target="_blank " href={`https://github.com/jqjacq/${project.link}`}>
                        Code <i className="fa fa-github icons"></i>
                      </a>
                      {project.website && (
                        <a target="_blank " href={`https://jqjacq.github.io/${project.link}`}>
                          Website <i className="fa fa-link icons"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

ProjectSlider.propTypes = {
  year: PropTypes.number.isRequired,
};

export default ProjectSlider;
