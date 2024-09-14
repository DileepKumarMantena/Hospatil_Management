import React from "react";
import DoctorCard from "./DoctorCard";
import "../Styles/Doctors.css";

const dermatologyDoctors = [
  {
    name: "Dr. John Doe",
    profileImage:
      "https://www.felixhospital.com/sites/default/files/2022-11/dr-saurabh-bhatia.jpg",
    specialization: "Interventional Cardiology",
  },
  {
    name: "Dr. kiran",
    profileImage:
      "https://www.felixhospital.com/sites/default/files/2022-11/dr-saurabh-bhatia.jpg",
    specialization: "Pediatric Cardiology",
  },
  {
    name: "Dr. White",
    profileImage:
      "https://www.felixhospital.com/sites/default/files/2022-11/dr-saurabh-bhatia.jpg",
    specialization: "Cardiac Electrophysiology",
  },
  {
    name: "Dr. Brown",
    profileImage:
      "https://www.felixhospital.com/sites/default/files/2022-11/dr-saurabh-bhatia.jpg",
    specialization: "Heart Failure Specialist",
  },
  {
    name: "Dr. John Smith",
    profileImage:
      "https://www.felixhospital.com/sites/default/files/2022-11/dr-saurabh-bhatia.jpg",
    specialization: "Interventional Cardiology",
  },
  {
    name: "Dr. Jane Doe",
    profileImage:
      "https://www.felixhospital.com/sites/default/files/2022-11/dr-saurabh-bhatia.jpg",
    specialization: "Pediatric Cardiology",
  },
  {
    name: "Dr. Emily White",
    profileImage:
      "https://www.felixhospital.com/sites/default/files/2022-11/dr-saurabh-bhatia.jpg",
    specialization: "Cardiac Electrophysiology",
  },
  {
    name: "Dr. William Brown",
    profileImage:
      "https://www.felixhospital.com/sites/default/files/2022-11/dr-saurabh-bhatia.jpg",
    specialization: "Heart Failure Specialist",
  },
];

function DermatologyDoctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span> Dermatology Department</span>
        </h3>

        <p className="dt-description">Meet our expert team of  Dermatologist </p>
      </div>

      <div className="dt-cards-content">
        {dermatologyDoctors.map((doctor, index) => (
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

export default DermatologyDoctors;
