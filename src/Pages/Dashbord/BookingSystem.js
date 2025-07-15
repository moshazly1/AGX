import { Link, NavLink } from "react-router-dom";
import Solution_Imge from "../../Imge/Solutions.jpg";
import Heders from "../Website/Heders";
import SocialMedia from "../Website/SocialMidia";
import Footer from "../Website/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import BookingSystem1 from "../../Imge/BookingSystem1.jpg";
import BookingSystem2 from "../../Imge/Imge_Solution/BookingSystem2.jpg";
import BookingSystem3 from "../../Imge/Imge_Solution/BookingSystem3.jpg";
import BookingSystem4 from "../../Imge/Imge_Solution/BookingSystem4.jpg";
import BookingSystem5 from "../../Imge/Imge_Solution/realstate2.jpg";
import ImgeE_commece7 from "../../Imge/Imge_Solution/Ecommerce7.jpg";
export default function BookingSystem() {
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
            <Link Link className="linkeA" to="/solutions/bookingsystem">
              Booking & Reservation Systems
            </Link>
          </nav>
        </figcaption>
      </div>
      <div className="container">
        <div className="content">
          <div className="ecommerce">
            <h1>Booking & Reservation Systems</h1>
            <h3>
              Advanced Solution to Digitize the Booking & Reservation Systems
            </h3>
            <p>
              The electronic booking system is a smart and advanced tool that
              helps companies and organizations manage appointments and
              reservations online with ease and flexibility.
            </p>
            <p>
              We provide you with a comprehensive platform that operates 24/7,
              allowing your clients to book your services anytime and from
              anywhere — without the need for direct communication or complex
              paperwork.
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
            <h2> Booking Systems Features</h2>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Interactive calendar to display available time slots and daily
              bookings.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              User login system for clients and staff.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Options to modify or cancel bookings by the client or admin.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Automatic notifications and alerts (SMS / Email) upon booking or
              before the appointment.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Availability settings for each service or staff member.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Online payment support (optional – Visa / Fawry / PayPal).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Detailed reports for daily and weekly bookings.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Fully responsive design for mobile and tablet devices.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Booking integration with various services (sessions – rooms –
              equipment – staff).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Multi-language and multi-currency support tailored to your
              business.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="ecommerce">
            <h2> Booking Systems Security </h2>

            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Full HTTPS encryption for all communications.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Role-based access control (Admin – Staff – Client).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Protection against appointment manipulation or fake bookings.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              reCAPTCHA integration to prevent bot-based bookings.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Secure login with JWT and/or Two-Factor Authentication (2FA).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Automatic database backups for data safety.
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
              Built using React.js or Next.js for a fast and dynamic user
              interface.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Dynamic calendar displaying real-time bookings.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Clean and intuitive UI/UX design.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Filter by service or staff for easier navigation.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Fully responsive layout suitable for all screen sizes.
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
              Powered by Node.js + Express, or Django, or Laravel.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Supports databases like MongoDB or PostgreSQL
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Comprehensive API system for integration with mobile apps or CRM.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Real-time availability management
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Notifications & email systems using NodeMailer / Twilio /
              Firebase.
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
              Medical clinics and diagnostic labs.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Hotels and serviced apartments.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Car rental companies.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Beauty salons and spas
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Photography studios.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Any business that depends on scheduled appointments or services.
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
