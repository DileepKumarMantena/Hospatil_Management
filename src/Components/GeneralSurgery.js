import React from "react";
import NavigationBar from "../Components/Navbar";
import GeneralSurgeryDoctors from "../Components/GeneralSurgeryDoctors";
import Footer from "../Components/Footer";
import "../Styles/GeneralSurgery.css";

function GeneralSurgery() {
  return (
    <div className="surgery-container">
      <NavigationBar />
      <GeneralSurgeryDoctors />
      <Footer />
    </div>
  );
}

export default GeneralSurgery;
