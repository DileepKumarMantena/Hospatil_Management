import React from "react";
import DoctorCard from "./DoctorCard";
import "../Styles/Doctors.css";

const oncologistDoctors = [
  {
    name: "Dr. vijay Kumar",
    profileImage:
      "https://drpriyatiwari.s3.amazonaws.com/static/services/Best-Oncologists-in-Gurgaon-01.jpg",
    specialization: "Interventional Cardiology",
  },
  {
    name: "Dr. vamshi",
    profileImage:
      "https://drpriyatiwari.s3.amazonaws.com/static/services/Best-Oncologists-in-Gurgaon-01.jpg",
    specialization: "Pediatric Cardiology",
  },
  {
    name: "Dr. Rahul",
    profileImage:
      "https://drpriyatiwari.s3.amazonaws.com/static/services/Best-Oncologists-in-Gurgaon-01.jpg",
    specialization: "Cardiac Electrophysiology",
  },
  {
    name: "Dr. Praveen",
    profileImage:
      "https://drpriyatiwari.s3.amazonaws.com/static/services/Best-Oncologists-in-Gurgaon-01.jpg",
    specialization: "Heart Failure Specialist",
  },
  {
    name: "Dr. John Smith",
    profileImage:
      "https://drpriyatiwari.s3.amazonaws.com/static/services/Best-Oncologists-in-Gurgaon-01.jpg",
    specialization: "Interventional Cardiology",
  },
  {
    name: "Dr. Jane Doe",
    profileImage:
      "https://drpriyatiwari.s3.amazonaws.com/static/services/Best-Oncologists-in-Gurgaon-01.jpg",
    specialization: "Pediatric Cardiology",
  },
  {
    name: "Dr. Emily White",
    profileImage:
      "https://drpriyatiwari.s3.amazonaws.com/static/services/Best-Oncologists-in-Gurgaon-01.jpg",
    specialization: "Cardiac Electrophysiology",
  },
  {
    name: "Dr. William Brown",
    profileImage:
      "https://drpriyatiwari.s3.amazonaws.com/static/services/Best-Oncologists-in-Gurgaon-01.jpg",
    specialization: "Heart Failure Specialist",
  },
];


function OncologistDoctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span> Oncologist Department</span>
        </h3>

        <p className="dt-description">Meet our expert team of  Oncologist </p>
      </div>

      <div className="dt-cards-content">
        {oncologistDoctors.map((doctor, index) => (
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

export default OncologistDoctors;
