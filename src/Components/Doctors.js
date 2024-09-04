import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/one.jpg";
import profile2 from "../Assets/two.jpeg";
import profile3 from "../Assets/three.jpg";
import profile4 from "../Assets/four.jpg";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Our Hospitals</span>
        </h3>

        <p className="dt-description">
        At Evergreen Memorial Hospital, we provide comprehensive healthcare with advanced facilities and compassionate care. Our experienced team is dedicated to patient safety, personalized attention, and world-class treatment to improve health and quality of life. Choose us for a care experience that puts patients first.        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="MindCare Psychiatric Hospital"
          title="Vizag"
          contact="989898899"
        />
        <DoctorCard
          img={profile2}
          name="ClearView Eye Hospital"
          title="Hyderbad"
          contact="989898889"
        />
        <DoctorCard
          img={profile3}
          name="Renew Orthopedic Hospital"
          title="Banglore"
          contact="9849175143"
        />
        <DoctorCard
          img={profile4}
          name="Prime Care Hospital"
          title="Chennai"
          contact="9849175142"
        />
      </div>
    </div>
  );
}

export default Doctors;
