import React from "react";
import NavigationBar from "../Components/Navbar";
import DoctorsList from "../Components/DoctorsList";
import Footer from "../Components/Footer";
import "../Styles/Cardiology.css";

function Cardiology() {
  return (
    <div className="home-section">
      <NavigationBar />
      <DoctorsList />
      <Footer />
    </div>
  );
}

export default Cardiology;
