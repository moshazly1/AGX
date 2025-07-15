import { useState } from "react";
import axios from "axios";
import { baseURL } from "../../API/API";
import Footer from "../Website/Footer";
import Heders from "../Website/Heders";

export default function ConfarmPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setEmail(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(`${baseURL}/forgot-password`, {
        email,
      });
      console.log(response.data);
      setSent(true);
    } catch (err) {
      setError(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page">
        <div className="container">
          <div className="row h-100">
            <form className="form" onSubmit={handleSubmit}>
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
            </form>
          </div>
        </div>
      </div>
      <Heders />
      <Footer />
    </>
  );
}
