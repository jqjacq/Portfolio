import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, HashNavigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import data from "../../data/projectslist.js";
import ProjectButton from "../../utils/ProjectButton.jsx";

const ProjectSlider = ({ year, badge }) => {
  const filteredYearProjects = data.filter((project) => project.year === year);
  return (
    <div className="flex flex-col border-3 rounded-lg bg-gray-100 rounded-md m-2">
      <p className="!font-bold mt-5"> {year} Projects</p>
      <span> {badge} </span>
      <Swiper
        navigation={true}
        effect={"fade"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        initialSlide={2}
        lazy={"true"}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        {filteredYearProjects.map((project) => {
          const imageSrc = `/src/assets/${year}/${project.img}`;
          const projectLink = project.website
            ? `https://jqjacq.github.io/${project.link}`
            : `https://github.com/jqjacq/${project.link}`;
          return (
            <SwiperSlide key={project.id} data-hash={project.hash}>
              <div>
                {project.fullname}
                <a target="_blank " className={`${project.className}`} href={projectLink} alt="Website Link">
                  <img
                    className="rounded-xl w-50 h-30 mx-auto hover:opacity-75 hover:shadow-lg
                    active:border-2 active:border-gray-500"
                    src={imageSrc}
                    alt={project.name}
                    title={project.description}
                    loading="lazy"
                  />
                </a>

                <div>
                  <div>
                    {project.website ? (
                      <a
                        target="_blank "
                        href={`https://jqjacq.github.io/${project.link}`}
                        className="hover:bg-gray-200"
                      >
                        <ProjectButton>
                          <span className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2048 2048">
                              <path
                                fill="currentColor"
                                d="M2048 128v1031q-28-28-60-50t-68-40V640H128v1024h1088l-128 128H0V128zm-128 384V256H128v256zm-509 954q0-66 25-123t68-99t100-67t124-24q67 0 125 25t101 68t68 102t25 125q0 65-24 122t-67 101t-99 68t-123 25q-48 0-94-13t-87-39l-201 201q-23 23-45 46t-46 45q-10 9-19 14t-24 5q-26 0-46-20t-20-46q0-14 5-23t14-20q21-24 44-46t47-45q51-51 100-101t101-101q-25-41-38-86t-14-94m128 12q0 38 14 71t39 58t58 39t72 14t74-15t64-43t44-62t17-74q0-36-15-69t-42-60t-60-42t-70-16q-39 0-74 16t-62 45t-43 63t-16 75"
                              />
                            </svg>
                            <span className="ml-2">Website</span>
                          </span>
                        </ProjectButton>
                      </a>
                    ) : (
                      <a target="_blank " href={`https://github.com/jqjacq/${project.link}`}>
                        <ProjectButton>
                          <span className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                              <path
                                fill="currentColor"
                                d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3M716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8z"
                              />
                            </svg>
                            <span className="ml-2"> Code </span>
                          </span>
                        </ProjectButton>
                      </a>
                    )}
                  </div>
                </div>
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
