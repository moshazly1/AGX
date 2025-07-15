import { useState } from "react";
import { baseURL, LOGIN } from "../../API/API";
import axios from "axios";
import Lodingsubmit from "../../Components/Loding/Loding";
import Googlg from "../../Imge/google-logo-png-open-2000.png";
import Cookie from "cookie-universal";
import AlartSuccess from "./AlartSuccess";
import { Link } from "react-router-dom";
import Heders from "../Website/Heders";
import Footer from "../Website/Footer";
export default function Login() {
  const [form, setFormData] = useState({
    email: "",
    password: "",
  });
  const [successAlert, setSuccessAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const cookie = Cookie();
  const [err, setErr] = useState("");

  function handleChange(e) {
    setFormData({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${baseURL}/${LOGIN}`, {
        email: form.email,
        password: form.password,
      });

      const tokenaccess = res.data.access;
      const tokenRefrech = res.data.refresh;

      cookie.set("AGXACCESS", tokenaccess);
      cookie.set("AGXREFRESH", tokenRefrech);

      setErr("");
      setSuccessAlert(true);
      setTimeout(() => {
        setSuccessAlert(false);
        window.location.href = "/";
      }, 3000);
    } catch (err) {
      setLoading(false);
      setErr(err.response.data.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading && <Lodingsubmit />}

      <div className="page">
        <div className="container">
          <div className="row h-100">
            <form className="form" onSubmit={handleSubmit}>
              <div className="custom-form">
                <h1 className="typing-animation-login">Login</h1>

                <div className="form-control">
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email..."
                  />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="form-control">
                  <input
                    minLength={6}
                    required
                    type="password"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter Your Password..."
                  />
                  <label htmlFor="password">Password</label>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>

                {/* <div className="google-btn">
                  <a href={`http://127.0.0.1:8000/login-google`}>
                    <div className="google-icon-wrapper">
                      <img
                        className="google-icon"
                        src={Googlg}
                        alt="Google Logo"
                      />
                    </div>
                    <p className="btn-text">
                      <b>Sign in with Google</b>
                    </p>
                  </a>
                </div> */}
                {successAlert && (
                  <AlartSuccess
                    message="Welcome!"
                    redirectText="Redirecting to the home page..."
                  />
                )}
                <div className="linkinauth">
                  <Link
                    to="/regester"
                    className="resetpass"
                    style={{ color: "blue", marginRight: "20px" }}
                  >
                    Register
                  </Link>

                  <Link to="/for-get-your-password" className="resetpass">
                    Forgot your password?
                  </Link>
                </div>

                {err && <span className="error">{err}</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Heders />
      <Footer />
    </>
  );
}
