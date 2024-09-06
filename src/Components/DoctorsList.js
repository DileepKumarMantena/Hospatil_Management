import React from "react";
import DoctorCard from "./DoctorCard";
import "../Styles/Doctors.css";

const doctorsList = [
  {
    name: "Dr. John Doe",
    profileImage:
      "https://th.bing.com/th/id/OIP.PBPYVES_vO2MW-UMqpAXQgHaHa?rs=1&pid=ImgDetMain",
    specialization: "Cardiologist",
  },
  {
    name: "Dr. Jane Smith",
    profileImage:
      "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    specialization: "Orthopedic Surgeon",
  },
  {
    name: "Dr. Emily Johnson",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s",
    specialization: "Neurologist",
  },
  {
    name: "Dr. Michael Brown",
    profileImage:
      "https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg",
    specialization: "General Surgeon",
  },
];

function DoctorsList() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Doctors</span>
        </h3>

        <p className="dt-description">Meet our expert doctors </p>
      </div>

      <div className="dt-cards-content">
        {doctorsList.map((doctor, index) => (
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

export default DoctorsList;
