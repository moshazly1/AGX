import { useState } from "react";
import axios from "axios";
import { baseURL, SENDEMAILRESETPASSWORD } from "../../API/API";
import Lodingsubmit from "../../Components/Loding/Loding";
import Footer from "../Website/Footer";
import Heders from "../Website/Heders";

export default function ForgotYourPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [OK, setOK] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setEmail(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    try {
      const response = await axios.post(
        `${baseURL}/${SENDEMAILRESETPASSWORD}`,

        { email: email }
      );

      setOK(response.data.message);
      setSent(true);
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Lodingsubmit />}
      <div className="page">
        <div className="container">
          <div className="row h-100">
            <form className="form" onSubmit={handleSubmit}>
              <div className="custom-form">
                <h1>Forgot Your Password?</h1>
                <p style={{ margin: "25px 0px" }}>
                  Enter your email and we'll send you a reset link.
                </p>

                <div className="form-control">
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter Your Email..."
                  />
                  <label htmlFor="email">Email</label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>

                {sent && (
                  <div className="success-message" role="alert">
                    ✅ {OK}
                  </div>
                )}

                {error && (
                  <div className="error" role="alert">
                    ❌ {error}
                  </div>
                )}
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
