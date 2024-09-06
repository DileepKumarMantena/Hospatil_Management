import React from "react";
import "../Styles/Orthopedics.css";

import NavigationBar from "../Components/Navbar";
import OrthopedicDoctors from "../Components/OrthopedicDoctors";
import Footer from "../Components/Footer";

function Orthopedics() {
  return (
    <div className="orthopedics-container">
      <NavigationBar />
      <OrthopedicDoctors />

      <Footer />
    </div>
  );
}

export default Orthopedics;
