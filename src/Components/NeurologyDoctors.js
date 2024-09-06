import React from "react";
import DoctorCard from "./DoctorCard";
import "../Styles/Doctors.css";

const neurologyDoctors = [
  {
    name: "Dr. Laura Wilson",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s",
    specialization: "Neurologist",
  },
  {
    name: "Dr. Michael Brown",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s",
    specialization: "Neurosurgeon",
  },
  {
    name: "Dr. Emma Clarke",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s",
    specialization: "Pediatric Neurology",
  },
  {
    name: "Dr. David Scott",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s",
    specialization: "Epilepsy Specialist",
  },
  {
    name: "Dr. Sarah Roberts",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s",
    specialization: "Neurophysiologist",
  },
  {
    name: "Dr. Laura Wilson",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s",
    specialization: "Neurologist",
  },
  {
    name: "Dr. Michael Brown",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s",
    specialization: "Neurosurgeon",
  },
  {
    name: "Dr. Emma Clarke",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s",
    specialization: "Pediatric Neurology",
  },
];

function NeurologyDoctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Neurology Department</span>
        </h3>

        <p className="dt-description">Meet our expert team of neurologists </p>
      </div>

      <div className="dt-cards-content">
        {neurologyDoctors.map((doctor, index) => (
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

export default NeurologyDoctors;
