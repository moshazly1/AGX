import { Link, NavLink } from "react-router-dom";
import Solution_Imge from "../../Imge/Solutions.jpg";
import Heders from "../Website/Heders";
import SocialMedia from "../Website/SocialMidia";
import Footer from "../Website/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import ImgeE_commece1 from "../../Imge/Imge_Solution/Ecommerce1.jpeg";
import ImgeE_commece2 from "../../Imge/Imge_Solution/Ecommerce3.jpeg";
import ImgeE_commece3 from "../../Imge/Imge_Solution/Ecommerce4.jpg";
import ImgeE_commece4 from "../../Imge/Imge_Solution/Ecommerce5.jpg";
import ImgeE_commece5 from "../../Imge/Imge_Solution/Ecommerce6.jpg";
import ImgeE_commece7 from "../../Imge/Imge_Solution/Ecommerce7.jpg";
export default function Ecommerce() {
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
            <Link Link className="linkeA" to="/solutions/ecommerce">
              E-commerce
            </Link>
          </nav>
        </figcaption>
      </div>
      <div className="container">
        <div className="content">
          <div className="ecommerce">
            <h1>E-commerce </h1>
            <h3>Advanced Solution to Digitize the E-commerce</h3>
            <p>
              We provide comprehensive and intelligent e-commerce solutions that
              empower you to build and manage a professional online store
              tailored to reflect your brand identity and achieve your business
              goals.
            </p>
            <p>
              Our services include everything you need to sell your products or
              services online with ease—from stunning UI design and smooth user
              experience to secure payment systems, inventory management,
              shipping integration, and performance analytics.
            </p>
            <p>
              Whether you're starting from scratch or upgrading an existing
              store, we ensure high performance, advanced security, and full
              flexibility to grow and expand in the digital market.
            </p>

            <div className="btnsub">
              <NavLink to="/ask-for-a-demo" className="gradient-btn link-btn ">
                Ask For A Demo
              </NavLink>
            </div>
          </div>
          <div className="image_ecommerce">
            <img src={ImgeE_commece1} alt="E-Invoicing" />
          </div>
        </div>
        <div className="content">
          <div className="image_ecommerce">
            <img src={ImgeE_commece2} alt="E-Invoicing" />
          </div>
          <div className="ecommerce">
            <h2>E-Commerce Store Features</h2>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Professional storefront to showcase products in an attractive way.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Full product management (Add – Edit – Delete – Categorize).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Integrated shopping cart and online payment system with multiple
              payment gateways.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Various shipping options with automatic shipping rate calculation.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Sales tracking, reports, and detailed analytics.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Fully responsive across all devices (Mobile – Tablet – Desktop).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Multi-language and multi-currency support
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Integration with external systems such as ERP, inventory systems,
              SMS, and email platforms.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="ecommerce">
            <h2>E-Commerce Security </h2>

            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Use of HTTPS protocol to secure data transmission.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Encryption of payment data and passwords.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Protection against cyber attacks such as XSS, CSRF, and SQL
              Injection.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Daily backups and server security hardening.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Two-Factor Authentication (2FA) for admin panel access.
            </p>
          </div>
          <div className="image_ecommerce">
            <img src={ImgeE_commece3} alt="E-Invoicing" />
          </div>
        </div>
        <div className="content">
          <div className="image_ecommerce">
            <img src={ImgeE_commece4} alt="E-Invoicing" />
          </div>
          <div className="ecommerce">
            <h2> Front-End</h2>
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
              Built with React.js or Next.js for fast performance and smooth UX.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Product filtering, smart search, and promotional sliders.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Fully responsive design for all devices.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              High-quality product images and intuitive user experience.
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
              Admin dashboard for managing products and orders.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Integration with payment gateways like PayPal, Stripe, Fawry, and
              more.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Robust databases such as PostgreSQL or MongoDB.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Customer management, inventory, shipping, and payment settings.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Automated customer notifications via email or SMS.
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
            <h2>Who Is This Service For?</h2>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Clothing stores, electronics shops, accessories, home goods.
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Digital service providers (e.g., courses, designs, subscriptions).
            </p>
            <p className="ecommerce-p">
              <FontAwesomeIcon
                className="ecommerce_icon"
                icon={faCircleCheck}
              />
              Any business looking to enter the world of online sales.
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
