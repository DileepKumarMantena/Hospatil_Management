import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  faCircleCheck,
  faCalendarCheck,
  faCommentDots,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { toast } from "react-toastify";

function NavigationBar({ onHospitalClick }) {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const isMoreDepartmentsPage = location.pathname.includes("/MoreDepartments");
  

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">Evergreen Memorial Hospital</Link>
      </h1>

      {/* Conditionally render the navbar items and appointment button */}
      {!isMoreDepartmentsPage && (
        <>
          {/* Desktop */}
          <ul className="navbar-items">
            <li>
              <Link to="/" className="navbar-links">
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link className="navbar-links dropdown-toggle show nav-link">
                Departments
              </Link>
              <div className="dropdown-content">
                <Link to="/cardiology">Cardiology</Link>
                <Link to="/orthopedics">Orthopedics</Link>
                <Link to="/MoreDepartments">More</Link>
              </div>
            </li>
            <li>
              <Link to="/doctors" className="navbar-links">
                Doctors
              </Link>
            </li>
            <li>
              <a
                onClick={onHospitalClick}
                className="navbar-links"
                style={{ cursor: "pointer" }}
              >
                Hospital
              </a>
            </li>
          </ul>

          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
        </>
      )}

      {/* More departments list */}
      {isMoreDepartmentsPage && (
        <ul className="navbar-items">
          <li className="dropdown">
            <Link className="navbar-links dropdown-toggle show nav-link">
              Departments
            </Link>
            <div className="dropdown-content">
              <Link to="/neurology">Neurology</Link>
              <Link to="/generalsurgery">General Surgery</Link>
              <Link to="/dermatology">Dermatology</Link>
              <Link to="/gastroenterology">Gastroenterology</Link>
              <Link to="/oncologist">Oncologist</Link>
            </div>
          </li>
        </ul>
      )}

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          {!isMoreDepartmentsPage && (
            <>
              <li>
                <Link onClick={openNav} to="/">
                  Home
                </Link>
              </li>
              <li className="dropdown">
                <Link className="navbar-links dropdown-toggle show nav-link">
                  Departments
                </Link>
                <div className="dropdown-content">
                  <Link to="/cardiology">Cardiology</Link>
                  <Link to="/orthopedics">Orthopedics</Link>
                  <Link to="/MoreDepartments">More</Link>
                </div>
              </li>
              <li>
                <Link onClick={openNav} to="/doctors">
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
            </>
          )}
          {isMoreDepartmentsPage && (
            <li className="dropdown">
              <Link className="navbar-links dropdown-toggle show nav-link">
                Departments
              </Link>
              <div className="dropdown-content">
                <Link to="/neurology">Neurology</Link>
                <Link to="/generalsurgery">General Surgery</Link>
              </div>
            </li>
          )}
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
