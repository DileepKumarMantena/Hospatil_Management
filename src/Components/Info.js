import React from "react";
import CountUp from "react-countup";
import InformationCard from "./InformationCard";
import {
  faHeartPulse,
  faTruckMedical,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-cards-content">
        <div className="text-stats-container">
          <p>
            <CountUp end={145000} duration={15} separator="," suffix="+" />
          </p>
          <p>Receive Patients</p>
        </div>

        <div className="text-stats-container">
          <p>
            <CountUp end={50} duration={15} suffix="+" />
          </p>
          <p>Expert Doctors</p>
        </div>

        <div className="text-stats-container">
          <p>
            <CountUp end={10} duration={15} suffix="+" />
          </p>
          <p>Years of Experience</p>
        </div>

        <div className="text-stats-container">
          <p>
            <CountUp end={20} duration={15} suffix="+" />
          </p>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
  );
}

export default Info;


