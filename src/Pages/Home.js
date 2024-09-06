import React from "react";
import NavigationBar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import HospitalsSection from "../Components/HospitalsSection";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <NavigationBar />
      <Hero />

      {/* <About /> */}
      {/* <BookAppointment /> */}
      {/* <Reviews /> */}
      <HospitalsSection />
      <Info />
      <Footer />
    </div>
  );
}

export default Home;
