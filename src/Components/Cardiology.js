import React from "react";
import "../Styles/Cardiology.css";
const doctors = [
  {
    name: "Dr. John Smith12",
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
];
function Cardiology() {
  return (
    <div className="cardiology-container">
      <h2>Cardiology Department</h2>
      <p>Meet our expert team of cardiologists.</p>
      <div className="doctors-grid">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <img
              src={doctor.profileImage}
              alt={`${doctor.name} profile`}
              className="doctor-image"
            />
            <div>
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialization">{doctor.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardiology;
