import React, { useRef } from "react";
import NavigationBar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import HospitalsSection from "../Components/HospitalsSection";
import Footer from "../Components/Footer";

function Home() {
  const hospitalSectionRef = useRef(null);

  const scrollToHospitalSection = () => {
    if (hospitalSectionRef.current) {
      hospitalSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="home-section">
      <NavigationBar onHospitalClick={scrollToHospitalSection} />
      <Hero />

      {/* <About /> */}
      {/* <BookAppointment /> */}
      {/* <Reviews /> */}
      <div ref={hospitalSectionRef}>
        <HospitalsSection />
      </div>
      <Info />
      <Footer />
    </div>
  );
}

export default Home;
