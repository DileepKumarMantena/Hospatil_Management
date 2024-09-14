import React from "react";
import NavigationBar from "../Components/Navbar";
import DermatologyDoctors from "./DermatologyDoctors";
import Footer from "../Components/Footer";
import "../Styles/Cardiology.css";

function Dermatology() {
  return (
    <div className="home-section">
      <NavigationBar />
      <DermatologyDoctors />
      <Footer />
    </div>
  );
}

export default Dermatology;
