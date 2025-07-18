import { Link, NavLink } from "react-router-dom";
import Heders from "../Website/Heders";
import SocialMedia from "../Website/SocialMidia";
import Footer from "../Website/Footer";
import Contact_imge from "../../Imge/contact.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import axios from "axios";
import { baseURL, CONTACTS } from "../../API/API";
import Lodingsubmit from "../../Components/Loding/Loding";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    mobileNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${baseURL}/${CONTACTS}`, formData);
      setSuccessMessage(res.data.message);
      setErrorMessage("");
      setFormData({
        name: "",
        emailAddress: "",
        mobileNumber: "",
        message: "",
      });
    } catch (err) {
      setErrorMessage(err.response.data.message);
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading && <Lodingsubmit />}

      <div
        className="inner-header"
        style={{
          backgroundImage: `url(${Contact_imge})`,
        }}
      >
        <div className="cover"></div>
        <figcaption>
          <nav>
            <Link className="linkeH" to="/">
              Home
            </Link>
            <Link className="linkeA" to="/contact">
              Contact Us
            </Link>
          </nav>
        </figcaption>
      </div>

      <div className="container">
        <div className="sec">
          <div className="hed">
            <span className="solign solign-page">Contacts</span>
            <h1 className="hed-h1">Contact Us</h1>
          </div>

          <div className="contact-wrapper">
            <div className="contact-form-section">
              <p>Send us a message and we will respond within 24 hours</p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  name="emailAddress"
                  type="email"
                  placeholder="Email Address"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                />
                <input
                  name="mobileNumber"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <div className="btnsub">
                  <button style={{ width: "100%" }} className="gradient-btn">
                    Submit
                  </button>
                </div>

                {successMessage && (
                  <div className="success-message">{successMessage}</div>
                )}
                {errorMessage && <span className="error">{errorMessage}</span>}
              </form>
            </div>

            <div className="contact-info-section">
              <div className="info-item">
                <div className="icon-circal">
                  <FontAwesomeIcon icon={faLocationDot} className="icon" />
                </div>
                <span>Online</span>
              </div>

              <div className="info-item">
                <div className="icon-circal">
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                </div>
                <NavLink
                  className="WM"
                  target="_blank"
                  to="mailto:algorionix@gmail.com"
                >
                  algorionix@gmail.com
                </NavLink>
              </div>

              <div className="info-item">
                <div className="icon-circal">
                  <FontAwesomeIcon
                    icon={faMobileScreenButton}
                    className="icon"
                  />
                </div>
                <span>Egypt: +2 01156391914</span>
              </div>

              <div className="info-item">
                <div className="icon-circal">
                  <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                </div>
                <NavLink
                  className="WM"
                  target="_blank"
                  to="https://wa.me/201080397902"
                >
                  +2 01080397902
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Heders />
      <SocialMedia />
      <Footer />
    </>
  );
}
