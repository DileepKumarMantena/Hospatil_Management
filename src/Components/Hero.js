import React, { useEffect, useState } from "react";
import Doctor from "../Assets/hospatil.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

import Hospital1 from "../Assets/hospatil_slider1.jpeg";
import One1 from "../Assets/hospatil_slider2.jpeg";
import Two2 from "../Assets/hospatil_slider3.jpeg";
import Three from "../Assets/hospatil_slider4.jpeg";
import Four from "../Assets/hospatil_slider5.jpeg";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
      >
        <div data-src={Hospital1} className="slider-img" />
        <div data-src={One1} className="slider-img" />
        <div data-src={Two2} className="slider-img" />
        <div data-src={Three} className="slider-img" />
        <div data-src={Four} className="slider-img" />
      </AutoplaySlider>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
