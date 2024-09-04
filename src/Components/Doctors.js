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
        At Health Plus, our hospitals are committed to providing comprehensive healthcare services with state-of-the-art facilities and compassionate care. We strive to create a welcoming environment where patients receive personalized attention and world-class treatment. With a focus on patient safety, advanced medical technology, and a team of experienced healthcare professionals, our hospitals are dedicated to improving health and enhancing the quality of life for every individual we serve. Trust Health Plus for your healthcare needs and experience the difference in care that truly puts patients first.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="MindCare Psychiatric Hospital"
          title="Vizag"
        />
        <DoctorCard
          img={profile2}
          name="ClearView Eye Hospital"
          title="Hyderbad"
        />
        <DoctorCard
          img={profile3}
          name="Renew Orthopedic Hospital"
          title="Banglore"
        />
        <DoctorCard
          img={profile4}
          name="Prime Care Hospital"
          title="Chennai"
        />
      </div>
    </div>
  );
}

export default Doctors;
