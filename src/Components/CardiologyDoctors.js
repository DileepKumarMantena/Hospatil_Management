import React from "react";
import DoctorCard from "./DoctorCard";
import "../Styles/Doctors.css";

const cardiologyDoctors = [
  {
    name: "Dr. John Smith",
    profileImage:
      "https://th.bing.com/th/id/OIP.PBPYVES_vO2MW-UMqpAXQgHaHa?rs=1&pid=ImgDetMain",
    specialization: "Interventional Cardiology",
  },
  {
    name: "Dr. Jane Doe",
    profileImage:
      "https://th.bing.com/th/id/OIP.PBPYVES_vO2MW-UMqpAXQgHaHa?rs=1&pid=ImgDetMain",
    specialization: "Pediatric Cardiology",
  },
  {
    name: "Dr. Emily White",
    profileImage:
      "https://th.bing.com/th/id/OIP.PBPYVES_vO2MW-UMqpAXQgHaHa?rs=1&pid=ImgDetMain",
    specialization: "Cardiac Electrophysiology",
  },
  {
    name: "Dr. William Brown",
    profileImage:
      "https://th.bing.com/th/id/OIP.PBPYVES_vO2MW-UMqpAXQgHaHa?rs=1&pid=ImgDetMain",
    specialization: "Heart Failure Specialist",
  },
  {
    name: "Dr. John Smith",
    profileImage:
      "https://th.bing.com/th/id/OIP.PBPYVES_vO2MW-UMqpAXQgHaHa?rs=1&pid=ImgDetMain",
    specialization: "Interventional Cardiology",
  },
  {
    name: "Dr. Jane Doe",
    profileImage:
      "https://th.bing.com/th/id/OIP.PBPYVES_vO2MW-UMqpAXQgHaHa?rs=1&pid=ImgDetMain",
    specialization: "Pediatric Cardiology",
  },
  {
    name: "Dr. Emily White",
    profileImage:
      "https://th.bing.com/th/id/OIP.PBPYVES_vO2MW-UMqpAXQgHaHa?rs=1&pid=ImgDetMain",
    specialization: "Cardiac Electrophysiology",
  },
  {
    name: "Dr. William Brown",
    profileImage:
      "https://th.bing.com/th/id/OIP.PBPYVES_vO2MW-UMqpAXQgHaHa?rs=1&pid=ImgDetMain",
    specialization: "Heart Failure Specialist",
  },
];

function CardiologyDoctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Cardiology Department</span>
        </h3>

        <p className="dt-description">Meet our expert team of cardiologists </p>
      </div>

      <div className="dt-cards-content">
        {cardiologyDoctors.map((doctor, index) => (
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

export default CardiologyDoctors;
