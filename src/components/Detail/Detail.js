import "./Detail.scss";
import { FaStar } from "react-icons/fa";
import { SlArrowLeft } from "react-icons/sl";

import { SlArrowRight } from "react-icons/sl";

import { useState } from "react";
function Detail(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? props.images.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === props.images.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <>
      <div className="carousel detail-container">
        <div className="carousel-inner">
          <img
            src={props.images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="detail-img"
          />

          {/* Numérotation des images */}
          <div className="image-counter">
            {currentIndex + 1}/{props.images.length}
          </div>
        </div>

        <SlArrowLeft
          className="carousel-control prev"
          onClick={handlePrevious}
        />

        <SlArrowRight className="carousel-control next" onClick={handleNext} />
      </div>

      <div className="detail-infos">
        <div className="detail-content">
          <div className="detail-info">
            <h1>{props.title}</h1>
            <p>{props.location} </p>
          </div>

          <div className="tag">{props.tags}</div>
        </div>

        <div className="tagAndRating">
          <div className=" host-detail">
            <p>{props.name}</p>

            <div className="picture-host">
              <img src={props.photo} alt="pictur host" />
            </div>
          </div>

          <div className="rating">
            {[...Array(5)].map((star, i) => (
              <FaStar
                className="star"
                key={i}
                color={i < props.rating ? "gold" : "gray"}
                size={24}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Detail;
