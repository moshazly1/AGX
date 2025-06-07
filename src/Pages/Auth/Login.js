import { useState } from "react";
import { baseURL, LOGIN } from "../../API/API";
import axios from "axios";
import Lodingsubmit from "../../Components/Loding/Loding";
import Googlg from"../../Imge/google-logo-png-open-2000.png" ;
import Cookie from 'cookie-universal'
export default function Login() {
  const [form, setFormData] = useState({
    email: "",
    password: "",
  });

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
    const res =   await axios.post(`${baseURL}/${LOGIN}`, {
      email:form.email,
      password:form.password,
    });
     const token = res.data.token ;
     cookie.set("e-commerce" , token)
      window.location.href = "/users";

    console.log(res)
    } catch (err) {
      if (err.response?.status === 401) {
        setErr("Invalid email or password");
      } else if (err.response?.status === 422) {
        setErr("Please check your input");
      } else {
        setErr("Internal Server Error");
      }
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
              <h1 className="typing-animation-login" >Login</h1>

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
                <div className="google-btn">
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
</div>

             {err && <span className="error">{err}</span>}
          </div>
        </form>
        </div>
      </div>
      </div>
    </>
  );
}
