import React from "react";
import NavigationBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/Cardiology.css";
import GastroenterologyDoctors from "../Components/GastroenterologyDoctors";

function Gastroenterology() {
  return (
    <div className="home-section">
      <NavigationBar />
      <GastroenterologyDoctors />
      <Footer />
    </div>
  );
}

export default Gastroenterology;
