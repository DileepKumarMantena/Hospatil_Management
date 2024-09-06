import React from "react";
import NavigationBar from "../Components/Navbar";
import CardiologyDoctors from "../Components/CardiologyDoctors";
import Footer from "../Components/Footer";
import "../Styles/Cardiology.css";

function Cardiology() {
  return (
    <div className="home-section">
      <NavigationBar />
      <CardiologyDoctors />
      <Footer />
    </div>
  );
}

export default Cardiology;
