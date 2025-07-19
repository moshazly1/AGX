import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faEnvelope,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [day, setday] = useState("");

  useEffect(() => {
    const today = new Date();
    setday(
      today.toLocaleDateString("en-US", {
        weekday: "long",
        timeZone: "Africa/Cairo",
      })
    );
  }, []);

  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-col">
              <h4>Contact</h4>
              <p>
                <FontAwesomeIcon className="ficon" icon={faClock} />{" "}
                {day !== "Friday" ? "Is Open" : "IS Close"}
              </p>
              <p>
                <FontAwesomeIcon className="ficon" icon={faEnvelope} />
                <NavLink
                  className="wm"
                  target="_blank"
                  to="mailto:algorionix@gmail.com"
                >
                  algorionix@gmail.com
                </NavLink>
              </p>

              <p>
                <FontAwesomeIcon
                  className="ficon"
                  icon={faMobileScreenButton}
                />
                Egypt : +2 01156391914
              </p>
              <p>
                <FontAwesomeIcon
                  className="ficon"
                  icon={faMobileScreenButton}
                />
                Egypt: +2 01146391492
              </p>

              <p>
                <FontAwesomeIcon className="ficon" icon={faWhatsapp} />
                <NavLink
                  className="wm"
                  target="_blank"
                  to="https://wa.me/201080397902"
                >
                  +2 01080397902
                </NavLink>
              </p>
              <div className="social-icons">
                <div>
                  <NavLink
                    target="_blank"
                    to="https://www.facebook.com/profile.php?id=61575205084724"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </NavLink>
                  <NavLink
                    target="_blank"
                    to="https://www.instagram.com/agx20_25/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </NavLink>
                  <NavLink
                    target="_blank"
                    to="https://www.linkedin.com/company/algorionix/about/?viewAsMember=true"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </NavLink>
                  <NavLink target="_blank" to="mailto:algorionix@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <NavLink className="wm" to="/faq">
                <h4>FAQs</h4>
              </NavLink>
              <p>
                <NavLink className="wm" to="/faq">
                  What services does your company offer?
                </NavLink>
              </p>
              <p>
                <NavLink className="wm" to="/faq">
                  Do you develop mobile applications and websites?
                </NavLink>
              </p>
              <p>
                <NavLink className="wm" to="/faq">
                  Do you offer custom designs or use templates?
                </NavLink>
              </p>
              <p>
                <NavLink className="wm" to="/faq">
                  What technologies do you use?
                </NavLink>
              </p>
              <p>
                <NavLink className="wm" to="/faq">
                  Why do you use React and .NET?
                </NavLink>
              </p>
            </div>

            <div className="footer-col">
              <NavLink className="wm" to="/solutions">
                <h4>Solutions</h4>
              </NavLink>

              <p>
                <NavLink className="wm" to="/solutions/businesswebsites">
                  Business Websites
                </NavLink>
              </p>
              <p>
                <NavLink className="wm" to="/solutions/ecommerce">
                  E-Commerce Solutions
                </NavLink>
              </p>
              <p>
                <NavLink className="wm" to="/solutions/bookingsystem">
                  Booking & Reservation Systems
                </NavLink>
              </p>
              <p>
                <NavLink className="wm" to="/solutions/admindashboards">
                  Admin Dashboards
                </NavLink>
              </p>
              <p>
                <NavLink className="wm" to="/solutions/elearning">
                  E-learning Platform
                </NavLink>
              </p>
              <p>
                <NavLink
                  className="wm"
                  to="/solutions/Team-Project&Task-Management"
                >
                  Team Project & Task Management
                </NavLink>
              </p>
              <p></p>
            </div>

            <div className="footer-col">
              <h4>Information</h4>
              <ul>
                <p>
                  <NavLink className="wm" to="/contact">
                    Contact us
                  </NavLink>
                </p>
                <li>Technical Support</li>
                <li>Quality Policy</li>
              </ul>
              <div className="newsletter">
                <h5>Newsletter</h5>
                <input type="email" placeholder="Email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p> © 2025 Mohamed El Shazly – Founder & Owner of Algorionix. </p>
            <span>Powered by Factory Yard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
