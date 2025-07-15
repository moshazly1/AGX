import { Link } from "react-router-dom";
import Solution_Imge from "../../Imge/Solutions.jpg";
import Heders from "../Website/Heders";
import SocialMedia from "../Website/SocialMidia";
import Footer from "../Website/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Serveise_imge1 from "../../Imge/Servises1.jpg";
import Serveise_imge2 from "../../Imge/Servises2.jpg";
import Serveise_imge3 from "../../Imge/Servises3.jpg";
export default function Services() {
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
            <Link Link className="linkeA" to="/services">
              Services
            </Link>
          </nav>
        </figcaption>
      </div>
      <div className="faq-container">
        <div className="hed">
          <span className="solign solign-page">Services</span>
          <h1 className="hed-h1">Our Services</h1>
        </div>
      </div>
      <div className="container">
        <div className="services ">
          <div className="service-item">
            <div className="service_imge">
              <img src={Serveise_imge3} alt="servise_imge"></img>
            </div>
            <div className="service-title">
              <h2>Product-based Software Development</h2>
              <p className="service-description">
                We follow all stages involved in bringing software from being a
                concept to reaching the market through integrating and deploying
                a set of tools and features while developing a software product
                to meet certain market needs, improve existing processes, and
                bring change to specific industries.
              </p>
              <ul className="service-list">
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Ideation and planning
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Requirements and feasibility analysis
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Product Design
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Development & coding
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Integration, testing, and launching.
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Operations and maintenance
                </li>
              </ul>
            </div>
          </div>
          <div className="service-item ">
            <div className="service_imge">
              <img src={Serveise_imge2} alt="servise_imge"></img>
            </div>
            <div className="service-title">
              <h2>Software Maintenance & Support</h2>
              <p className="service-description">
                We provide full support and maintenance services to our clients
                through our dedicated customer support team to ensure the
                software remains in optimal condition and up to date with
                changing technologies.
              </p>
              <ul className="service-list">
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Software updates & Features upgrade
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Functionality integration
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Ongoing Enhancement
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Technical support
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Backups and recovery
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Bug fixing, troubleshooting.
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  License configuration
                </li>
              </ul>
            </div>
          </div>
          <div className="service-item">
            <div className="service_imge">
              <img src={Serveise_imge1} alt="servise_imge"></img>
            </div>
            <div className="service-title">
              <h2>Software Consultation</h2>
              <p className="service-description">
                Our experienced consultants provide clients with deep expertise
                and guidance aligned to their business approach and the applied
                technology for better performance along their transformation
                journey.
              </p>
              <ul className="service-list">
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Technical Assessments and Evaluation
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Transformation Strategies & Roadmaps
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Functional Specification of the solutions
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Business Processes Redesign
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Selection of solution
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Business & System Analysis
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Operational Analysis
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  Project management consulting
                </li>
                <li>
                  <FontAwesomeIcon
                    className="service-icon"
                    icon={faCircleCheck}
                  />
                  User training, guidance, and assistance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Heders />
      <SocialMedia />
      <Footer />
    </>
  );
}
