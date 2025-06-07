import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from   '../../Imge/logo3.png'; 
import axios from "axios";

export default function Heders() {
  const [isOpen, setIsOpen] = useState(false);
  
 const [serchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    };


   async function handelsubmit(e) {
   e.preventDefault();
   try {
 await axios.post(`api/surch` , {
      serchTerm: serchTerm,
 }) ;
   } catch (error) {
   console.log(error);
   }
  
   }

  console.log(serchTerm);
  return (
    <header>
      <div className="headers">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="nav-links desktop">
              <NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to="/">Home</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to="/about">About</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to="/services">Services</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "item active" : "item")} to="/contact">Contact</NavLink>
            </div>
           <div className="center-serch" >
            <form  className="search-bar" onSubmit={ handelsubmit}>
              
  <input type="text"  name="seach" value={serchTerm}  onChange={handleSearchChange}  placeholder="Search..." />
  <button  type="submit" >
    <FontAwesomeIcon icon={faMagnifyingGlass} />
  </button>
</form>

           </div>



            <div className="burger" onClick={() => setIsOpen(!isOpen)}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>

          {isOpen && (
            <div className="dropdown-menu">
              <NavLink onClick={() => setIsOpen(false)} className="item" to="/">Home</NavLink>
              <NavLink onClick={() => setIsOpen(false)} className="item" to="/about">About</NavLink>
              <NavLink onClick={() => setIsOpen(false)} className="item" to="/services">Services</NavLink>
              <NavLink onClick={() => setIsOpen(false)} className="item" to="/contact">Contact</NavLink>
            </div>
          )}
        </div>
      </div>
    </header>

  );
}
