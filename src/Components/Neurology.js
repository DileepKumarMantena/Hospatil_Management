import React from "react";
import NavigationBar from "../Components/Navbar";
import NeurologyDoctors from "../Components/NeurologyDoctors";
import Footer from "../Components/Footer";
import "../Styles/Neurology.css";

function Neurology() {
  return (
    <div className="neurology-container">
      <NavigationBar />
      <NeurologyDoctors />
      <Footer />
    </div>
  );
}

export default Neurology;
