import { Link, NavLink, Outlet } from "react-router-dom";
import { UseScroll } from "../../UseScroll";
import ImgeSolutio1 from "../../Imge/Imge_Solution/AdminDhashbord1.jpeg";
import ImgeSolutio2 from "../../Imge/solution2.jpg";
import ImgeSolutio3 from "../../Imge/solution3.jpg";
import ImgeSolutio4 from "../../Imge/Imge_Solution/E-commerce1.jpeg";

export default function HSolutions() {
  const showClass = UseScroll(900);
  return (
    <div className="selutions">
      <div className="container">
        <div className="solutions-section">
          <div className="hed">
            <span
              style={{ fontSize: "7rem", top: "-2.7rem" }}
              className="solign solign-page"
            >
              Solutions
            </span>
            <h1 className={`${showClass && "hed-h1"}`}>
              Solutions empowering the world!
              <p style={{ fontWeight: "normal", fontSize: "16px" }}>
                We are determined to play a pivotal role in contributing to the
                digital transformation of businesses in diverse industry sectors
                with the best-in-class solutions and services.
              </p>
            </h1>
          </div>
          <div className="container-cards">
            <div className="card">
              <Link to={"/solutions/admindashboards"}>
                <img src={ImgeSolutio1} alt="E-Invoicing" />
                <div className="door">Admin Dashboards</div>
              </Link>
            </div>

            <Link to={"/solutions/elearning"}>
              <div className="card">
                <img src={ImgeSolutio2} alt="Driver with GPS" />
                <div className="door">E-learning Platform</div>
              </div>
            </Link>
            <Link to={"/solutions/businesswebsites"}>
              <div className="card">
                <img src={ImgeSolutio3} alt="Team Work" />
                <div className="door">Business Websites</div>
              </div>
            </Link>

            <div className="card">
              <Link to={"/solutions/ecommerce"}>
                <img src={ImgeSolutio4} alt="Call Center" />
                <div className="door">E-Commerce </div>
              </Link>
            </div>
            <Outlet />
          </div>

          <div className="btnsub">
            <NavLink to="/solutions" className="gradient-btn link-btn ">
              View All Solutions
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
