import { useState } from "react";
import axios from "axios";
import { baseURL, REGESTER } from "../../API/API";
import Lodingsubmit from "../../Components/Loding/Loding";
import Googlg from"../../Imge/google-logo-png-open-2000.png" ;
import Cookie from 'cookie-universal'
export default function Register() {
  // States
  const [form, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const cookie = Cookie();
  const [err, setErr] = useState("");

  // Handle Change
  function handleChange(e) {
    setFormData({ ...form, [e.target.name]: e.target.value });
  }

  // Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
     const res =  await axios.post(`${baseURL}/${REGESTER}`, form);

      setLoading(false);
      const token = res.data.token ;
     cookie.set("e-commerce" , token)
      window.location.href = "/users";
    } catch (err) {
       setLoading(false);
      
       if (err.response?.status === 422) {
        setErr("Email is already taken");
       } else {
        setErr("Internal Server Error");
        }
       }   finally {
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
              <h1 class="typing-animation" >Register Now</h1>

              <div className="form-control">
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name..."
                />
                <label htmlFor="name">Name</label>
              </div>

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
                Register
              </button>
              <div className="google-btn">
                  <a href={`http://127.0.0.1:8000/register-google`}>
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
