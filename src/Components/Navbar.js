import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from "react-router-dom";
import {
  faCircleCheck,
  faCalendarCheck,
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { toast } from "react-toastify";

function NavigationBar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const openNav = () => {
    setNav(!nav);
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">Evergreen Memorial Hospital</Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li className="dropdown">
          <Link to="/" className="navbar-links dropdown-toggle show nav-link">
            Departments
          </Link>
          <div className="dropdown-content">
            <Link to="/cardiology">Cardiology</Link>
            <Link to="/orthopedics">Orthopedics</Link>
            <Link to="/neurology">Neurology</Link>
            <Link to="/generalsurgery">General Surgery</Link>
          </div>
        </li>
        <li>
          <Link to="/doctors" className="navbar-links"> {/* Changed to Link */}
            Doctors
          </Link>
        </li>
        <li>
          <Link to="/hospital" className="navbar-links"> {/* Changed to Link */}
            Hospital
          </Link>
        </li>
      </ul>

      <button
        className="text-appointment-btn"
        type="button"
        onClick={handleBookAppointmentClick}
      >
        <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/" className="navbar-links dropdown-toggle show nav-link">
              Departments
            </Link>
            <div className="dropdown-content">
              <Link to="#">Department 1</Link>
              <Link to="#">Department 2</Link>
            </div>
          </li>

          <li>
            <Link onClick={openNav} to="/doctors"> {/* Changed to Link */}
              Doctors
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/reviews">
              Reviews
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default NavigationBar;

