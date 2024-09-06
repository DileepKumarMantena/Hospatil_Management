import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        {/* <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              Health <span className="ft-sign">+</span>
            </p>
            <p className="ft-description">
              Talk to online doctors and get medical advice, online
              prescriptions, refills and medical notes within minutes. On-demand
              healthcare services at your fingertips.
            </p>
          </div>

          <SubscribeNewsletter />
        </div> */}

        <div className="ft-list">
          <p className="ft-list-title">About Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@deelipkumar@gmail.com">
                deelipkumar@gmail.com
              </a>
            </li>
            <li>
              <a href="#">Visakhapatnam</a>
            </li>
            <li>
              <a href="tel:+9505816053">9505816053</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>© 2024 Evergreen Memorial Hospital. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
