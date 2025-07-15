import { Link } from "react-router-dom";
import Solution_Imge from "../../Imge/Solutions.jpg";
import Heders from "../Website/Heders";
import SocialMedia from "../Website/SocialMidia";
import Footer from "../Website/Footer";
import ImgeE_commece1 from "../../Imge/Imge_Solution/Ecommerce1.jpeg";
import ELarnnig1 from "../../Imge/Imge_Solution/Elearnning1.jpeg";
import ImgeSolutio1 from "../../Imge/Imge_Solution/AdminDhashbord1.jpeg";
import Business1 from "../../Imge/Imge_Solution/Biseniswibsite1.jpeg";
import RealEstate5 from "../../Imge/Imge_Solution/realstate5.jpg";
import Team from "../../Imge/Imge_Solution/Team.jpg";
import ImgeBookingSystem from "../../Imge/Imge_Solution/BookingSystem_main.jpg";
import { UseScroll } from "../../UseScroll";
export default function Solutions() {
  const scroolImgerow1 = UseScroll(300);
  const scroolImgerow2 = UseScroll(600);
  return (
    <>
      <div
        className="inner-header"
        style={{
          backgroundImage: `url(${Solution_Imge})`,
        }}
      >
        <div className="cover"></div>
        <figcaption>
          <nav>
            <Link className="linkeH" to="/">
              Home
            </Link>
            <Link Link className="linkeA" to="/solutions">
              Products
            </Link>
          </nav>
        </figcaption>
      </div>

      <div className="faq-container">
        <div className="hed">
          <span className="solign solign-page">Solutions</span>
          <h1 className="hed-h1">Our Solutions</h1>
        </div>
      </div>
      <div className="container">
        <div className="solutions">
          <Link className="Sitem" to={"/solutions/elearning"}>
            <img className="SImge" src={ELarnnig1} alt="E-learning" />
            <h2 className="SolutionTitle">E-learning Platform</h2>
          </Link>

          <Link className="Sitem" to={"/solutions/ecommerce"}>
            <img className="SImge" src={ImgeE_commece1} alt="E-commerce" />
            <h2 className="SolutionTitle">E-commerce </h2>
          </Link>

          <Link className="Sitem" to="/solutions/businesswebsites">
            <img className="SImge" src={Business1} alt="Website Development" />
            <h2 className="SolutionTitle">Business Websites</h2>
          </Link>

          <Link
            className={scroolImgerow1 ? "Sitem" : "ScroolImge"}
            to="/solutions/admindashboards"
          >
            <img
              className="SImge"
              src={ImgeSolutio1}
              alt="Mobile App Development"
            />
            <h2 className="SolutionTitle">Admin Dashboards</h2>
          </Link>

          <Link
            className={scroolImgerow1 ? "Sitem" : "ScroolImge"}
            to="/solutions/bookingsystem"
          >
            <img
              className="SImge"
              src={ImgeBookingSystem}
              alt="SaaS Solutions"
            />
            <h2 className="SolutionTitle">Booking System</h2>
          </Link>

          <Link
            className={scroolImgerow1 ? "Sitem" : "ScroolImge"}
            to="/solutions/real-state"
          >
            <img className="SImge" src={RealEstate5} alt="AI Solutions" />
            <h2 className="SolutionTitle">Real State System</h2>
          </Link>

          <Link
            className={scroolImgerow2 ? "Sitem" : "ScroolImge"}
            to="/solutions/Team-Project&Task-Management"
          >
            <img className="SImge" src={Team} alt="Consulting Services" />
            <h2 className="SolutionTitle">Team Project & Task Management</h2>
          </Link>
        </div>
      </div>

      <Heders />
      <SocialMedia />
      <Footer />
    </>
  );
}
