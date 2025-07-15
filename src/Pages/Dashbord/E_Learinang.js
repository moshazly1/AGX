import { Link, NavLink } from "react-router-dom";
import Solution_Imge from "../../Imge/Solutions.jpg";
import Heders from "../Website/Heders";
import SocialMedia from "../Website/SocialMidia";
import Footer from "../Website/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import ELarnnig1 from "../../Imge/Imge_Solution/Elearnning1.jpeg";
import ImgeE_ELarnnig2 from "../../Imge/Imge_Solution/Elearnning2.jpeg";
import ImgeE_ELarnnig3 from "../../Imge/Imge_Solution/Elearnning3.jpg";
import ImgeE_ELarnnig4 from "../../Imge/Imge_Solution/Elearnning4.jpg";
import ImgeE_commece5 from "../../Imge/Imge_Solution/Ecommerce6.jpg";
import ImgeE_commece7 from "../../Imge/Imge_Solution/Ecommerce7.jpg";
export default function Elearning() {
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
            <Link Link className="linkeA" to="/solutions/elearning">
              E-learning
            </Link>
          </nav>
        </figcaption>
      </div>
      <div className="container">
        <div className="content">
          <div className="ecommerce">
            <h1>E-Learning Platform </h1>
            <h3>Advanced Solution to Digitize the E-Learning Platform </h3>
            <p>
              Our e-learning platforms provide a comprehensive and integrated
              online learning experience. They enable students to easily access
              educational content, interact directly with teachers and peers,
              and complete assessments and quizzes anytime, from anywhere.
            </p>
            <p>
              Our platforms support modern technologies such as interactive
              videos, live virtual classrooms, content management systems, and
              detailed performance tracking reports.
            </p>
            <p>
              We place great emphasis on security and data privacy, ensuring an
              effective, flexible, and user-friendly learning experience for all
              age groups and educational levels.
            </p>

            <div className="btnsub">
              <NavLink to="/ask-for-a-demo" className="gradient-btn link-btn ">
                Ask For A Demo
              </NavLink>
            </div>
          </div>
          <div className="image_ecommerce">
            <img src={ELarnnig1} alt="E-Invoicing" />
          </div>
        </div>
        <div className="content">
          <div className="image_ecommerce">
            <img src={ImgeE_ELarnnig2} alt="E-Invoicing" />
          </div>
          <div className="ecommerce">
            <h2> Platform Features</h2>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Organized courses by category (courses – levels – certificates).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Video lessons available for streaming or download.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Interactive assignments and quizzes with automatic grading.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Dashboards for students, instructors, and administrators.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Course-specific forums or comment systems for discussion.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Auto-generated completion certificates with the learner’s name.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Study progress tracking and time monitoring.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Online payments for accessing paid courses.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Multi-language support and responsive across all devices.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="ecommerce">
            <h2>E-Platform Security </h2>

            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              HTTPS for secure communication.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Passwords and login data encrypted with bcrypt.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Video protection against unauthorized downloading.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Role-based access control (Admin – Teacher – Student).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Protection from attacks like XSS, SQL Injection, and CSRF.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              User activity monitoring to detect cheating in exams.
            </p>
          </div>
          <div className="image_ecommerce">
            <img src={ImgeE_ELarnnig3} alt="E-Invoicing" />
          </div>
        </div>
        <div className="content">
          <div className="image_ecommerce">
            <img src={ImgeE_ELarnnig4} alt="E-Invoicing" />
          </div>
          <div className="ecommerce">
            <h2>Front-End</h2>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Clean, intuitive educational UI.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Built with React.js or Next.js and Tailwind CSS for fast, smooth
              performance.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Supports dark mode and RTL/LTR languages.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Internal course search engine + filters by level or instructor.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Video playback using VideoJS or Plyr.
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
              Powered by Node.js + Express, Django, or Laravel for logic and
              data management.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Strong database support (MongoDB / PostgreSQL).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Uses RESTful APIs or GraphQL for front-back integration.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Secure authentication using JWT or OAuth.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Full admin dashboard to manage users, content, and platform
              settings.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Integration with third-party services:
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Zoom or Jitsi for live streaming
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Firebase for real-time notifications
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Stripe or PayPal for payment processing
            </p>
          </div>
          <div className="image_ecommerce">
            <img src={ImgeE_commece5} alt="E-Invoicing" />
          </div>
        </div>
        <div className="content">
          <div className="image_ecommerce">
            <img src={ImgeE_commece7} alt="E-Invoicing" />
          </div>
          <div className="ecommerce">
            <h2> Suitable For</h2>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Universities and colleges
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Private course platforms (like a mini Udemy or Coursera)
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              E-learning schools
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Certified training centers and academies
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
