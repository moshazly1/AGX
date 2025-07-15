import { Link, NavLink } from "react-router-dom";
import Solution_Imge from "../../Imge/Solutions.jpg";
import Heders from "../Website/Heders";
import SocialMedia from "../Website/SocialMidia";
import Footer from "../Website/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Business1 from "../../Imge/Imge_Solution/Biseniswibsite1.jpeg";
import Business2 from "../../Imge/Imge_Solution/Busineswebsit1.jpeg";
import Business3 from "../../Imge/Imge_Solution/fingerprint-2904774_1280.jpg";
import Business4 from "../../Imge/Imge_Solution/Busnes4.jpg";
import Business5 from "../../Imge/Imge_Solution/Busines5.jpg";
import ImgeE_commece7 from "../../Imge/Imge_Solution/Ecommerce7.jpg";
export default function Businesswebsites() {
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
            <Link Link className="linkeA" to="/solutions/businesswebsites">
              Business Websites
            </Link>
          </nav>
        </figcaption>
      </div>
      <div className="container">
        <div className="content">
          <div className="ecommerce">
            <h1>Business Websites</h1>
            <h3>Advanced Solution to Digitize the Business Websites </h3>
            <p>
              Your website is the official face of your company on the internet
              — it’s the first impression customers have of your brand.
            </p>
            <p>
              We provide you with a professional, modern website that reflects
              your company’s identity, builds trust, and presents your services
              or products in a well-organized and user-friendly manner across
              all devices.
            </p>
            <p>
              Attractive & Responsive Design: Fully optimized for desktop,
              tablet, and mobile.
            </p>
            <p>
              Smooth User Experience: Easy navigation and fast loading speed.
            </p>
            <p>
              Search Engine Optimization (SEO): To ensure your site appears in
              top search results.
            </p>
            <p>
              High Security: With data encryption, HTTPS protocol, and
              protection against cyberattacks.
            </p>
            <p>
              Admin Dashboard: Easily manage content, update services or add
              products.
            </p>
            <p>
              Multi-language Support: Expand your reach to local and
              international audiences.
            </p>
            <p>
              Analytics & Reports: Track performance and visitor behavior to
              boost results.
            </p>
            <div className="btnsub">
              <NavLink to="/ask-for-a-demo" className="gradient-btn link-btn ">
                Ask For A Demo
              </NavLink>
            </div>
          </div>
          <div className="image_ecommerce">
            <img src={Business1} alt="E-Invoicing" />
          </div>
        </div>
        <div className="content">
          <div className="image_ecommerce">
            <img src={Business2} alt="E-Invoicing" />
          </div>
          <div className="ecommerce">
            <h2> Business Websites Features</h2>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Professional and visually appealing design that reflects your
              brand identity.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Fully responsive across all devices (mobile – tablet – desktop).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Easy navigation with a clean and user-friendly interface.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Multi-language support for reaching an international audience.
              Dashboards for students, instructors, and administrators.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Integrated contact page (form – phone numbers – map).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              SEO optimization to ensure visibility on Google.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Full informational pages: Home About Us Services or Products
              Gallery Team Contact Us
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Social media integration (WhatsApp – Facebook – Instagram, etc.).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Optional blog or news section.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="ecommerce">
            <h2> Business Websites Security </h2>

            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Use of HTTPS (SSL Certificate) to encrypt communications.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Spam protection for forms using reCAPTCHA.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Protection against XSS and SQL Injection attacks.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Role-based access control if an admin panel is present.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Automatic backups and reliable cloud hosting.
            </p>
          </div>
          <div className="image_ecommerce">
            <img src={Business3} alt="E-Invoicing" />
          </div>
        </div>
        <div className="content">
          <div className="image_ecommerce">
            <img src={Business4} alt="E-Invoicing" />
          </div>
          <div className="ecommerce">
            <h2>Front-End</h2>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Built with technologies such as: HTML5, CSS3, JavaScript React.js
              / Next.js
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Modern, user-friendly design.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Uses Tailwind CSS or Bootstrap for structured, fast UI.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              High-quality visuals with interactive effects (hover, animations).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Compatible with all major browsers (Chrome – Safari – Firefox...).
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
              Technologies like Node.js / Express, Django / Laravel, or ASP.NET
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Content management database (MongoDB, MySQL, PostgreSQL)
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Admin dashboard for managing content and pages
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Secure login for administrators (via JWT or OAuth)
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Email integration and auto-response for submitted forms
            </p>
          </div>
          <div className="image_ecommerce">
            <img src={Business5} alt="E-Invoicing" />
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
              Startups and mid-sized companies
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Law firms – Consulting – Design – Engineering offices
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Shipping – Manufacturing – Home services companies
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Software and tech businesses
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Any business that needs a professional online presence
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
