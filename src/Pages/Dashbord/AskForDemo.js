import { Link } from "react-router-dom";
import Heders from "../Website/Heders";
import SocialMedia from "../Website/SocialMidia";
import { useState } from "react";
import axios from "axios";
import { ASKFORDEMO, baseURL } from "../../API/API";
import Footer from "../Website/Footer";
import BackGround from "../../Imge/close-up-person-typing-laptop-scaled.jpg";
import Lodingsubmit from "../../Components/Loding/Loding";

export default function AskForDemo() {
  const [form, setform] = useState({
    name: "",
    title: "",
    emailAddress: "",
    mobileNumber: "",
    country: "",
    city: "",
    region: "",
    requested_solution: "",
    companyName: "",
    number_of_users: "",
    industry: "",
    other: "",
    whereAboutUs: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function handleChange(e) {
    setform({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function validateForm() {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "The field is required";
    if (!form.title.trim()) newErrors.title = "The field is required";
    if (!form.mobileNumber.trim())
      newErrors.mobileNumber = "The field is required";
    if (!form.companyName.trim())
      newErrors.companyName = "The field is required";
    if (!form.city.trim()) newErrors.city = "The field is required";
    if (!form.region.trim()) newErrors.region = "The field is required";
    if (!form.emailAddress.trim())
      newErrors.emailAddress = "The field is required";
    if (!form.country.trim()) newErrors.country = "The field is required";
    if (!form.number_of_users)
      newErrors.number_of_users = "The field is required";
    if (!form.requested_solution.trim())
      newErrors.requested_solution = "The field is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function hanselsubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${baseURL}/${ASKFORDEMO}`, form);
      setSuccessMessage(res.data.message);
      setErrorMessage("");
      setform({
        name: "",
        title: "",
        emailAddress: "",
        mobileNumber: "",
        country: "",
        city: "",
        region: "",
        requested_solution: "",
        companyName: "",
        number_of_users: "",
        other: "",
        industry: "",
        whereAboutUs: "",
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
      <Heders />
      <div
        className="inner-header"
        style={{
          backgroundImage: `url(${BackGround})`,
        }}
      >
        <div className="cover"></div>
        <figcaption>
          <nav>
            <Link className="linkeH" to="/">
              Home
            </Link>
            <Link className="linkeA" to="/ask-for-a-demo">
              Ask for a demo
            </Link>
          </nav>
        </figcaption>
      </div>

      <div className="container">
        <div className="contact-page">
          <div className="ask">
            <form className="demo-form" onSubmit={hanselsubmit}>
              <h2>Ask for a demo</h2>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="name" className="lable">
                    Name
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.name}
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                  {errors.name && <p className="errors">{errors.name}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="title" className="lable">
                    Title
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.title}
                    name="title"
                    id="title"
                    type="text"
                    placeholder="Title"
                  />
                  {errors.title && <p className="errors">{errors.title}</p>}
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="mobileNumber" className="lable">
                    Mobile Number
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.mobileNumber}
                    name="mobileNumber"
                    id="mobileNumber"
                    type="text"
                    placeholder="Mobile Number"
                  />
                  {errors.mobileNumber && (
                    <p className="errors">{errors.mobileNumber}</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="companyName" className="lable">
                    Company Name
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.companyName}
                    name="companyName"
                    id="companyName"
                    type="text"
                    placeholder="Company Name"
                  />
                  {errors.companyName && (
                    <p className="errors">{errors.companyName}</p>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="emailAddress" className="lable">
                    Email Address
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.emailAddress}
                    name="emailAddress"
                    id="emailAddress"
                    type="email"
                    placeholder="Email Address"
                  />
                  {errors.emailAddress && (
                    <p className="errors">{errors.emailAddress}</p>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="country" className="lable">
                    Country
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.country}
                    name="country"
                    id="country"
                    type="text"
                    placeholder="Country"
                  />
                  {errors.country && <p className="errors">{errors.country}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="city" className="lable">
                    City
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.city}
                    name="city"
                    id="city"
                    type="text"
                    placeholder="City"
                  />
                  {errors.city && <p className="errors">{errors.city}</p>}
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="region" className="lable">
                    Region
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.region}
                    name="region"
                    id="region"
                    type="text"
                    placeholder="Region"
                  />
                  {errors.region && <p className="errors">{errors.region}</p>}
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="industry" className="lable">
                    Industry
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.industry}
                    name="industry"
                    id="industry"
                    type="text"
                    placeholder="Industry"
                  />
                  {errors.industry && (
                    <p className="errors">{errors.industry}</p>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="number_of_users" className="lable">
                    Number of Users
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.number_of_users}
                    name="number_of_users"
                    id="number_of_users"
                    type="number"
                    min="1"
                    placeholder="Number of Users"
                  />
                  {errors.number_of_users && (
                    <p className="errors">{errors.number_of_users}</p>
                  )}
                </div>

                <div className="form-group">
                  <label className="lable">Requested Solution</label>
                  <select
                    onChange={handleChange}
                    value={form.requested_solution}
                    name="requested_solution"
                  >
                    <option value="">--Select an Option--</option>
                    <option value="Business Websites">Business Websites</option>
                    <option value="E-Commerce Solutions">
                      E-Commerce Solutions
                    </option>
                    <option value="Educational Platform">
                      Educational Platform
                    </option>
                    <option value="Booking & Reservation Systems">
                      Booking & Reservation Systems
                    </option>
                    <option value="Admin Dashboards">Admin Dashboards</option>
                    <option value="Digital Menu for Restaurants">
                      Digital Menu for Restaurants
                    </option>
                    <option value="Appointment Booking System for Clinics or Doctors">
                      Appointment Booking System for Clinics or Doctors
                    </option>
                    <option value="Real Estate Listing Platform for Rent and Sale">
                      Real Estate Listing Platform for Rent and Sale
                    </option>
                    <option value="Simple Invoicing and Sales Management System">
                      Simple Invoicing and Sales Management System
                    </option>
                    <option value="Team Project and Task Management">
                      Team Project and Task Management
                    </option>
                    <option value="Live Chat for Customers">
                      Live Chat for Customers
                    </option>
                  </select>
                  {errors.requested_solution && (
                    <p className="errors">{errors.requested_solution}</p>
                  )}
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="other" className="lable">
                    Other Solution
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.other}
                    name="other"
                    id="other"
                    type="text"
                    placeholder="Other Solution..."
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label htmlFor="whereAboutUs" className="lable">
                    Where did you hear about us
                  </label>
                  <input
                    onChange={handleChange}
                    value={form.whereAboutUs}
                    name="whereAboutUs"
                    id="whereAboutUs"
                    type="text"
                    placeholder="Optional..."
                  />
                </div>
              </div>

              <div className="btnsub">
                <button className="gradient-btn" type="submit">
                  Submit
                </button>
              </div>
              {successMessage && (
                <div className="success-message">{successMessage}</div>
              )}
              {errorMessage && <span className="error">{errorMessage}</span>}
            </form>
          </div>
        </div>
      </div>

      <SocialMedia />
      <Footer />
    </>
  );
}
