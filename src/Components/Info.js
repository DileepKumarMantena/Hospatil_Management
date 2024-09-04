import React from "react";
import InformationCard from "./InformationCard";
import {
  faHeartPulse,
  faTruckMedical,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    // <div className="info-section" id="services">
    //   <div className="info-cards-content">
    //     <InformationCard title="Emergency Care" />

    //     <InformationCard title="Heart Disease" />

    //     <InformationCard title="Dental Care" />
    //   </div>
    // </div>

    <div className="info-section" id="services">
      <div className="info-cards-content">
        <div className="text-stats-container">
          <p>145k+</p>
          <p>Receive Patients</p>
        </div>

        <div className="text-stats-container">
          <p>50+</p>
          <p>Expert Doctors</p>
        </div>

        <div className="text-stats-container">
          <p>10+</p>
          <p>Years of Experience</p>
        </div>

        <div className="text-stats-container">
          <p>20+</p>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>

    // <div className="text-section info-section" id="services">
    //   <div className="text-stats info-cards-content">
    //     <div className="text-stats-container">
    //       <p>145k+</p>
    //       <p>Receive Patients</p>
    //     </div>

    //     <div className="text-stats-container">
    //       <p>50+</p>
    //       <p>Expert Doctors</p>
    //     </div>

    //     <div className="text-stats-container">
    //       <p>10+</p>
    //       <p>Years of Experience</p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Info;
