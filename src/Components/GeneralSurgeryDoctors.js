import React from "react";
import DoctorCard from "./DoctorCard";
import "../Styles/Doctors.css";

const surgeryDoctors = [
  {
    name: "Dr. Henry Adams",
    profileImage:
      "https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg",
    specialization: "General Surgeon",
  },
  {
    name: "Dr. Laura Green",
    profileImage:
      "https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg",
    specialization: "Laparoscopic Surgeon",
  },
  {
    name: "Dr. William Foster",
    profileImage:
      "https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg",
    specialization: "Trauma Surgeon",
  },
  {
    name: "Dr. Emma Harris",
    profileImage:
      "https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg",
    specialization: "Breast Surgeon",
  },
  {
    name: "Dr. David Clark",
    profileImage:
      "https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg",
    specialization: "Colorectal Surgeon",
  },
  {
    name: "Dr. Henry Adams",
    profileImage:
      "https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg",
    specialization: "General Surgeon",
  },
  {
    name: "Dr. Laura Green",
    profileImage:
      "https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg",
    specialization: "Laparoscopic Surgeon",
  },
  {
    name: "Dr. William Foster",
    profileImage:
      "https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg",
    specialization: "Trauma Surgeon",
  },
];

function GeneralSurgeryDoctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>General Surgery Department</span>
        </h3>

        <p className="dt-description">Meet our experienced general surgeons </p>
      </div>

      <div className="dt-cards-content">
        {surgeryDoctors.map((doctor, index) => (
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

export default GeneralSurgeryDoctors;
