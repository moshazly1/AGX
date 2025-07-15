import { useState } from "react";
import axios from "axios";
import { baseURL, RESETPASSWORD } from "../../API/API";
import { useLocation } from "react-router-dom";
import Lodingsubmit from "../../Components/Loding/Loding";
import Heders from "../Website/Heders";
import Footer from "../Website/Footer";

export default function ResetPassword() {
  const location = useLocation();
  const [sent, setSent] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [okMessage, setOkMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("code");
  const id = queryParams.get("id");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    try {
      const response = await axios.post(`${baseURL}/${RESETPASSWORD}`, {
        uidb64: id,
        password: newPassword,
        token: code,
      });

      window.location.href = "/login";

      setOkMessage(response.data.message);
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
                <h1>Reset Your Password</h1>
                <p style={{ margin: "25px 0px" }}>
                  Please enter your new password below.
                </p>

                <div className="form-control">
                  <input
                    minLength={6}
                    required
                    type="password"
                    id="new-password"
                    name="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter New Password..."
                  />
                  <label htmlFor="new-password">New Password</label>
                </div>

                <div className="form-control">
                  <input
                    minLength={6}
                    required
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm New Password..."
                  />
                  <label htmlFor="confirm-password">Confirm Password</label>
                </div>

                {newPassword &&
                  confirmPassword &&
                  newPassword !== confirmPassword && (
                    <p
                      style={{
                        margin: "10px 0px ",
                        color: "red",
                        fontSize: "14px",
                      }}
                    >
                      Passwords do not match.
                    </p>
                  )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading || newPassword !== confirmPassword}
                >
                  {loading ? "Resetting..." : "Reset"}
                </button>

                {sent && (
                  <div className="success-message" role="alert">
                    ✅ {okMessage}
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
