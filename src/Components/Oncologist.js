import React from "react";
import NavigationBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/Cardiology.css";
import OncologistDoctors from "./OncologistDoctors";

function Oncologist() {
  return (
    <div className="home-section">
      <NavigationBar />
      <OncologistDoctors />
      <Footer />
    </div>
  );
}

export default Oncologist;
