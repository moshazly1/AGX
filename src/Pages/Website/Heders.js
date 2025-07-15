import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Imge/logo3.png";
import axios from "axios";
import Logout from "../Auth/Logout";
import Cookie from "cookie-universal";
export default function Heders() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [serchTerm, setSearchTerm] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false);

  const cookie = Cookie();
  const token = cookie.get("AGXACCESS");

  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  async function handelsubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`api/surch`, { serchTerm });
    } catch (error) {
      console.log(error);
    }
    setShowPopup(false);
  }

  useEffect(() => {
    const HandelScrol = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener("scroll", HandelScrol);
    return () => window.removeEventListener("scroll", HandelScrol);
  }, []);

  return (
    <header>
      {showPopup && (
        <div
          className="search-overlay"
          onClick={() => setShowPopup(false)}
        ></div>
      )}

      <div
        style={{
          backgroundColor: hasScrolled ? "white" : "transparent",
        }}
        className="headers"
      >
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <NavLink to="/">
                <img src={logo} alt="logo" />
              </NavLink>
            </div>

            <div className="nav-links desktop">
              {["/", "/moreaboutus", "/solutions", "/services", "/contact"].map(
                (path, i) => (
                  <NavLink
                    key={i}
                    style={hasScrolled ? { color: "#596673" } : {}}
                    className={({ isActive }) =>
                      isActive ? "item active" : "item"
                    }
                    to={path}
                  >
                    {["Home", "About", "Solutions", "Services", "Contact"][i]}
                  </NavLink>
                )
              )}
            </div>

            <div className="right-section">
              {/* ✅ أيقونة البحث */}
              {/* <button
                style={hasScrolled ? { color: "#596673" } : {}}
                className="search-icon"
                onClick={() => setShowPopup(true)}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button> */}

              <div className="Auth">
                {token ? (
                  <Logout />
                ) : (
                  <>
                    <Link className="btn-auth" to="/login">
                      Login
                    </Link>
                    <Link className="btn-auth" to="/regester">
                      Register
                    </Link>
                  </>
                )}
              </div>

              <div className="burger" onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="dropdown-menu">
              {["/", "/moreaboutus", "/solutions", "/services", "/contact"].map(
                (path, i) => (
                  <NavLink
                    key={i}
                    onClick={() => setIsOpen(false)}
                    className="item"
                    to={path}
                  >
                    {["Home", "About", "Solutions", "Services", "Contact"][i]}
                  </NavLink>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {showPopup && (
        <>
          <div
            className="search-overlay"
            onClick={() => setShowPopup(false)}
          ></div>

          <div className="search-popup-box elegant-popup">
            <form className="popup-search-form modern" onSubmit={handelsubmit}>
              <div className="search-icon-box">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <input
                type="text"
                placeholder="How can we help ...?"
                value={serchTerm}
                onChange={handleSearchChange}
                autoFocus
              />
            </form>
          </div>
        </>
      )}
    </header>
  );
}
