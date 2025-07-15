import { Link, NavLink } from "react-router-dom";
import Solution_Imge from "../../Imge/Solutions.jpg";
import Heders from "../Website/Heders";
import SocialMedia from "../Website/SocialMidia";
import Footer from "../Website/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import BookingSystem1 from "../../Imge/Imge_Solution/Team.jpg";
import BookingSystem2 from "../../Imge/Imge_Solution/Team1.jpg";
import BookingSystem3 from "../../Imge/Imge_Solution/Team2.jpg";
import BookingSystem4 from "../../Imge/Imge_Solution/realstate2.jpg";
import BookingSystem5 from "../../Imge/Imge_Solution/realstate4.jpg";
import ImgeE_commece7 from "../../Imge/Imge_Solution/Ecommerce7.jpg";
export default function TeamProjectandTaskManagement() {
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
            <Link
              Link
              className="linkeA"
              to="/solutions/Team-Project&Task-Management"
            >
              Team Project & Task Management
            </Link>
          </nav>
        </figcaption>
      </div>
      <div className="container">
        <div className="content">
          <div className="ecommerce">
            <h1>Team Project & Task Management System</h1>
            <h3>
              Advanced Solution to Digitize the Team Project & Task Management
              System
            </h3>
            <p>
              An intelligent system for managing teams, projects, and tasks —
              designed to streamline workflow within companies, technical teams,
              or creative groups.
            </p>
            <p>
              It provides powerful tools for task planning, role assignment,
              progress tracking, and seamless collaboration in a flexible and
              organized work environment.
            </p>
            <p>
              The system enhances productivity and reduces errors or delays
              through visual project boards (Kanban / Timeline), real-time
              notifications, and integration with external tools such as email,
              calendars, and cloud storage services.
            </p>
            <p>
              Whether you're managing a tech project, a marketing campaign, or
              daily administrative operations, this platform gives you a
              centralized and clear view of everything — all in one place.
            </p>

            <div className="btnsub">
              <NavLink to="/ask-for-a-demo" className="gradient-btn link-btn ">
                Ask For A Demo
              </NavLink>
            </div>
          </div>
          <div className="image_ecommerce">
            <img src={BookingSystem1} alt="E-Invoicing" />
          </div>
        </div>
        <div className="content">
          <div className="image_ecommerce">
            <img src={BookingSystem2} alt="E-Invoicing" />
          </div>
          <div className="ecommerce">
            <h2>Team Project & Task Management Features</h2>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Create projects and break them down into sub-tasks.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Add team members and assign specific roles.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Set task deadlines and delivery dates.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Task statuses: To Do – In Progress – Done.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Productivity and time tracking reports.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Notifications and alerts for new or delayed tasks.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Comments and file attachments within each task.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Task calendar view for scheduling and planning.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Drag & Drop Kanban-style interface.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Task timer to track time spent by each member.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="ecommerce">
            <h2> Team Project & Task Management Security </h2>

            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Encrypted login system using JWT.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Role-based permissions (Admin – Member – Viewer).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Protection against attacks (XSS – CSRF – SQL Injection).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Logs for all user actions.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Daily automated backups.
            </p>
          </div>
          <div className="image_ecommerce">
            <img src={BookingSystem3} alt="E-Invoicing" />
          </div>
        </div>
        <div className="content">
          <div className="image_ecommerce">
            <img src={BookingSystem5} alt="E-Invoicing" />
          </div>
          <div className="ecommerce">
            <h2>Front-End</h2>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Built with React.js / Next.js and Tailwind CSS or Material UI.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Fast and user-friendly interface.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Main pages: Dashboard – Tasks – Projects – Calendar – Profile.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Fully responsive design – Mobile-ready – Dark mode – Keyboard
              shortcuts.
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
              Powered by Node.js + Express / Django / Laravel.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Database: MongoDB or PostgreSQL.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              RESTful APIs or GraphQL architecture.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Notifications via Email / SMS / In-App alerts.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Integrations with tools like Slack, Trello, and Google Calendar.
            </p>
          </div>
          <div className="image_ecommerce">
            <img src={BookingSystem4} alt="E-Invoicing" />
          </div>
        </div>
        <div className="content">
          <div className="image_ecommerce">
            <img src={ImgeE_commece7} alt="E-Invoicing" />
          </div>
          <div className="ecommerce">
            <h2> Who Is This Website For?</h2>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Software development companies.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Design and marketing agencies.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Academic or volunteer teams.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Entrepreneurs tracking the progress of their projects.
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
