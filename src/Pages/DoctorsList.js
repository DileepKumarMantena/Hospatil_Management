// src/pages/Doctors.js
import React from "react";
// import DoctorCard from "../components/DoctorCard"; // Import the DoctorCard component

// import profile1 from "../assets/profile-1.png";
// import profile2 from "../assets/profile-2.png";
// import profile3 from "../assets/profile-3.png";
// import profile4 from "../assets/profile-4.png";

// Hospatil_Management\src\Assets\profile-2.png

function DoctorsList() {
  // Sample data for doctors
  const doctors = [
    {
      // img: profile1,
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      emergencyContact: "+1 234 567 8901",
    },
    {
      // img: profile2,
      name: "Dr. Jane Smith",
      specialty: "Orthopedic Surgeon",
      emergencyContact: "+1 234 567 8902",
    },
    {
      // img: profile3,
      name: "Dr. Emily Johnson",
      specialty: "Neurologist",
      emergencyContact: "+1 234 567 8903",
    },
    {
      // img: profile4,
      name: "Dr. Michael Brown",
      specialty: "General Surgeon",
      emergencyContact: "+1 234 567 8904",
    },
  ];

  return (
    <div className="doctors-page">
      <h1>Our Doctors</h1>
      <div className="doctors-list">
        {doctors.map((doctor, index) => (
          <DoctorsList
            key={index}
            img={doctor.img}
            name={doctor.name}
            title={doctor.specialty}
            emergencyContact={doctor.emergencyContact}
          />
        ))}
      </div>
    </div>
  );
}

export default DoctorsList;
