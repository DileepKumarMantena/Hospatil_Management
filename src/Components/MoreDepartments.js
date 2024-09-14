import React from "react";
import Footer from "../Components/Footer";
import NavigationBar from "../Components/Navbar";
import { Link } from "react-router-dom";
import "../Styles/Doctors.css"; // Ensure this line is uncommented if needed
import "../Styles/MoreDepartments.css"; // Ensure this line is uncommented

const departments = [
  {
    name: "Dr. Laura Wilson",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmAGYiBuxy8F_TY9f6neqHfBKLT_mEE_QIA&s",
    specialization: "Neurologist",
  },
  {
    name: "Dr. Henry Adams",
    image:
      "https://www.muthoothealthcare.com/Kozhenchery/assets/image/doctors/doc_811405864.jpg",
    specialization: "General Surgeon",
  },
  {
    name: "Dr. rajesh",
    image:
      "https://c8.alamy.com/comp/2BWHN9X/gastroenterologist-with-model-of-stomach-in-clinic-2BWHN9X.jpg",
    specialization: "Interventional Gastroenterologist",
  },
  {
    name: "Dr. vijay Kumar",
    image:
      "https://drpriyatiwari.s3.amazonaws.com/static/services/Best-Oncologists-in-Gurgaon-01.jpg",
    specialization: "Interventional Oncologist",
  },
  {
    name: "Dr. John Doe",
    image:
      "https://www.felixhospital.com/sites/default/files/2022-11/dr-saurabh-bhatia.jpg",
    specialization: "Interventional Cardiology",
  },
  {
    name: "Dr. Alice Johnson",
    image:
      "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    specialization: "Interventional Orthopedics",
  },
];

function MoreDepartments() {
  return (
    <div className="more-departments">
      <NavigationBar />

      <div className="doctor-section" id="doctors">
        <div className="dt-title-content">
          <h3 className="dt-title">
            <span>Our Departments</span>
          </h3>

          <p className="dt-description">Explore our hospital departments</p>
        </div>

        <div className="dt-cards-content">
          {departments.map((department, index) => (
            <div key={index} className="department-card">
              {/* Display department image */}
              <img src={department.image} alt={department.name} className="department-img" />

              {/* Department name */}
              <h4 className="department-name">{department.name}</h4>

              {/* Button to go to department */}
              <Link to={`/${department.name.toLowerCase().replace(/\s+/g, '-')}`} className="btn-department">
                View {department.name} Department
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MoreDepartments;
