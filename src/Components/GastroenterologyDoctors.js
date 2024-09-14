import React from "react";
import DoctorCard from "./DoctorCard";
import "../Styles/Doctors.css";

const gastroenterologyDoctors = [
  {
    name: "Dr. rajesh",
    profileImage:
      "https://c8.alamy.com/comp/2BWHN9X/gastroenterologist-with-model-of-stomach-in-clinic-2BWHN9X.jpg",
    specialization: "Interventional Cardiology",
  },
  {
    name: "Dr. kumar",
    profileImage:
      "https://c8.alamy.com/comp/2BWHN9X/gastroenterologist-with-model-of-stomach-in-clinic-2BWHN9X.jpg",
    specialization: "Pediatric Cardiology",
  },
  {
    name: "Dr. williams",
    profileImage:
      "https://c8.alamy.com/comp/2BWHN9X/gastroenterologist-with-model-of-stomach-in-clinic-2BWHN9X.jpg",
    specialization: "Cardiac Electrophysiology",
  },
  {
    name: "Dr. uday",
    profileImage:
      "https://c8.alamy.com/comp/2BWHN9X/gastroenterologist-with-model-of-stomach-in-clinic-2BWHN9X.jpg",
    specialization: "Heart Failure Specialist",
  },
  {
    name: "Dr. John Smith",
    profileImage:
      "https://c8.alamy.com/comp/2BWHN9X/gastroenterologist-with-model-of-stomach-in-clinic-2BWHN9X.jpg",
    specialization: "Interventional Cardiology",
  },
  {
    name: "Dr. Jane Doe",
    profileImage:
      "https://c8.alamy.com/comp/2BWHN9X/gastroenterologist-with-model-of-stomach-in-clinic-2BWHN9X.jpg",
    specialization: "Pediatric Cardiology",
  },
  {
    name: "Dr. Emily White",
    profileImage:
      "https://c8.alamy.com/comp/2BWHN9X/gastroenterologist-with-model-of-stomach-in-clinic-2BWHN9X.jpg",
    specialization: "Cardiac Electrophysiology",
  },
  {
    name: "Dr. William Brown",
    profileImage:
      "https://c8.alamy.com/comp/2BWHN9X/gastroenterologist-with-model-of-stomach-in-clinic-2BWHN9X.jpg",
    specialization: "Heart Failure Specialist",
  },
];


function GastroenterologyDoctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span> Gastroenterology Department</span>
        </h3>

        <p className="dt-description">Meet our expert team of  Gastroenterologist </p>
      </div>

      <div className="dt-cards-content">
        {gastroenterologyDoctors.map((doctor, index) => (
          <DoctorCard
            img={doctor.profileImage}
            name={doctor.name}
            title={doctor.specialization}
            contact="989898899"
          />
        ))}
      </div>
    </div>
  );
}

export default GastroenterologyDoctors;
