import React from "react";
import DoctorCard from "./DoctorCard";
import "../Styles/Doctors.css";

const orthopedicDoctors = [
  {
    name: "Dr. Alice Johnson",
    profileImage:
      "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    specialization: "Orthopedic Surgeon",
  },
  {
    name: "Dr. Robert Lee",
    profileImage:
      "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    specialization: "Pediatric Orthopedics",
  },
  {
    name: "Dr. Olivia Smith",
    profileImage:
      "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    specialization: "Sports Medicine",
  },
  {
    name: "Dr. James Davis",
    profileImage:
      "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    specialization: "Joint Replacement Surgeon",
  },
  {
    name: "Dr. Sarah Brown",
    profileImage:
      "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    specialization: "Spine Surgery",
  },
  {
    name: "Dr. Alice Johnson",
    profileImage:
      "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    specialization: "Orthopedic Surgeon",
  },
  {
    name: "Dr. Robert Lee",
    profileImage:
      "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    specialization: "Pediatric Orthopedics",
  },
  {
    name: "Dr. Olivia Smith",
    profileImage:
      "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    specialization: "Sports Medicine",
  },
];

function OrthopedicDoctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Orthopedics Department</span>
        </h3>

        <p className="dt-description">
          Meet our expert team of orthopedic surgeons
        </p>
      </div>

      <div className="dt-cards-content">
        {orthopedicDoctors.map((doctor, index) => (
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

export default OrthopedicDoctors;
