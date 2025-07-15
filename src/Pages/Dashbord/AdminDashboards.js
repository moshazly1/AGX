import { Link, NavLink } from "react-router-dom";
import Solution_Imge from "../../Imge/Solutions.jpg";
import Heders from "../Website/Heders";
import SocialMedia from "../Website/SocialMidia";
import Footer from "../Website/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Imge_Admin1 from "../../Imge/Imge_Solution/Bisneswibsite.jpeg";
import Imge_Admin2 from "../../Imge/Imge_Solution/Busnieswebsite3.jpeg";
import Imge_Admin3 from "../../Imge/Imge_Solution/internet-3572404_1280.jpg";
import Imge_Admin4 from "../../Imge/Imge_Solution/AdmenDashbord2.jpeg";
import Imge_Admin5 from "../../Imge/Imge_Solution/engineer-4904884_1280.jpg";
import ImgeE_commece7 from "../../Imge/Imge_Solution/Ecommerce7.jpg";
export default function AdminDashboards() {
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
            <Link Link className="linkeA" to="/solutions/admindashboards">
              Admin-Dashboards
            </Link>
          </nav>
        </figcaption>
      </div>
      <div className="container">
        <div className="content">
          <div className="ecommerce">
            <h1> Admin Dashboards</h1>
            <h3>Advanced Solution to Digitize the Admin Dashboards</h3>
            <p>
              We provide you with carefully designed admin dashboards that
              enable you to manage your system or platform with ease and
              efficiency, through a powerful graphical interface that gives you
              full control over data, users, settings, and analytics.
            </p>
            <p>
              User-Friendly: Intuitive and well-organized interfaces suitable
              for all technical levels, with support for both Arabic and
              English.
            </p>
            <p>
              Real-Time Analytics: Live data visualization and reporting to
              support data-driven decision-making.
            </p>
            <p>
              Flexible Permissions: Role-based access control system to define
              who can manage specific parts of the platform.
            </p>
            <p>
              Content Management: Tools for creating and editing content,
              uploading files, and scheduling tasks effortlessly.
            </p>
            <p>
              Alerts & Notifications: Instant notification system to help you
              stay on top of important activities and security alerts.
            </p>
            <p>
              Seamless Integration: Ability to connect with external services
              such as email, online payments, CRM systems, and more.
            </p>

            <div className="btnsub">
              <NavLink to="/ask-for-a-demo" className="gradient-btn link-btn ">
                Ask For A Demo
              </NavLink>
            </div>
          </div>
          <div className="image_ecommerce">
            <img src={Imge_Admin1} alt="E-Invoicing" />
          </div>
        </div>
        <div className="content">
          <div className="image_ecommerce">
            <img src={Imge_Admin2} alt="E-Invoicing" />
          </div>
          <div className="ecommerce">
            <h2> Admin Dashboard Features</h2>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Real-time analytics and live data visualization.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Full user management (Add – Edit – Delete – Permissions).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Manage content, products, or bookings based on your project type.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Smart filtering and search functionality across data.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Internal notifications and important alerts.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Multi-language support and dark mode.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              File upload/download and report export (Excel - PDF).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Multiple roles and access levels (Admin – Staff – Viewer).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Flexible, scalable design ready for future feature extensions.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="ecommerce">
            <h2>Admin Dashboard Security</h2>

            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Secure login using JWT or OAuth.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Encryption of sensitive data (Passwords – API Keys).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              RBAC (Role-Based Access Control) for permission management.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Event logging to monitor all user actions.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Protection against CSRF, XSS, and SQL Injection attacks.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Unauthorized users are redirected immediately.
            </p>
          </div>
          <div className="image_ecommerce">
            <img src={Imge_Admin3} alt="E-Invoicing" />
          </div>
        </div>
        <div className="content">
          <div className="image_ecommerce">
            <img src={Imge_Admin5} alt="E-Invoicing" />
          </div>
          <div className="ecommerce">
            <h2>Front-End</h2>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Built with React.js or Vue.js for high performance.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Styled using modern UI libraries such as
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Tailwind CSS / Chakra UI.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              shadcn/ui or Material UI.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Dynamic tables, charts, and graphical dashboards.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Fully responsive layout for all screen sizes.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Clean and intuitive user experience.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="ecommerce">
            <h2>Back-End</h2>

            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Powered by Node.js + Express, .NET Core, or Django.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Uses RESTful APIs or GraphQL for communication.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Databases: PostgreSQL / MongoDB.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Includes session protection, identity verification, and access
              control.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Features like webhooks, data processing, and report exporting.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Supports integration with payment systems and third-party tools.
            </p>
          </div>
          <div className="image_ecommerce">
            <img src={Imge_Admin4} alt="E-Invoicing" />
          </div>
        </div>
        <div className="content">
          <div className="image_ecommerce">
            <img src={ImgeE_commece7} alt="E-Invoicing" />
          </div>
          <div className="ecommerce">
            <h2> Who Needs Admin Dashboards</h2>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              E-commerce store owners
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              E-learning platforms
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Reservation and booking systems
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Employee or project management systems
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Service websites requiring content administration
            </p>
          </div>
        </div>
      </div>
      <Heders />
      <SocialMedia />
      <Footer />
    </>
  );
}
