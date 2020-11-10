import PropTypes from "prop-types";
import React from "react";

const Renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <div className="single-countdown">
        <span className="single-countdown__time">{days}</span>
        <span className="single-countdown__text">Days</span>
      </div>
      <div className="single-countdown">
        <span className="single-countdown__time">{hours}</span>
        <span className="single-countdown__text">Hours</span>
      </div>
      <div className="single-countdown">
        <span className="single-countdown__time">{minutes}</span>
        <span className="single-countdown__text">Minutes</span>
      </div>
      <div className="single-countdown">
        <span className="single-countdown__time">{seconds}</span>
        <span className="single-countdown__text">Seconds</span>
      </div>
    </>
  );
};

Renderer.propTypes = {
  days: PropTypes.number,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};

export default Renderer;
