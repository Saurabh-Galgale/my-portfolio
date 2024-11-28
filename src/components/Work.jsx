import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons
import data from "../assets/data.json";

const Work = () => {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    carouselRef.current.moveTo(carouselRef.current.state.selectedItem - 1);
  };

  const handleNext = () => {
    carouselRef.current.moveTo(carouselRef.current.state.selectedItem + 1);
  };

  return (
    <div id="work">
      <h2>Work</h2>
      <section>
        <article>
          <div className="carousel-container">
            <Carousel
              ref={carouselRef}
              autoPlay={true}
              showArrows={false}
              showIndicators={false}
              showStatus={false}
              showThumbs={false}
              interval={1800}
              infiniteLoop={true}
            >
              {data.projects.map((i) => (
                <div key={i.title} className="workItem">
                  <img src={i.imgSrc} alt={i.title} />
                  <aside>
                    <h3>{i.title}</h3>
                    <p>{i.description}</p>
                    <a target={"_blank"} href={i.url} rel="noreferrer">
                      View Demo
                    </a>
                  </aside>
                </div>
              ))}
            </Carousel>
            <div className="carousel-controls">
              <FaChevronLeft className="carousel-arrow left-arrow" onClick={handlePrev} />
              <FaChevronRight className="carousel-arrow right-arrow" onClick={handleNext} />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Work;