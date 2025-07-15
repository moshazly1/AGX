import { Link } from "react-router-dom";
import Heders from "../Website/Heders";
import SocialMedia from "../Website/SocialMidia";
import Footer from "../Website/Footer";
import AboutImge from "../../Imge/MoreAbout.jpg";
import AboutImge1 from "../../Imge/about-imge1.jpg";
import AItem1 from "../../Imge/a-item1.jpg";
import AItem2 from "../../Imge/a-item2.jpg";
import AItem3 from "../../Imge/a-item3.jpg";
import WhyImge from "../../Imge/why_imge.jpg";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UseScroll } from "../../UseScroll";
import { useEffect, useState } from "react";

export default function MoreAboutUs() {
  const showclass1 = UseScroll(1000);
  const showclass2 = UseScroll(1610);

  const showclass1Midiam = UseScroll(1400);
  const showclass2Midiam = UseScroll(2800);
  const [finalShow1, setFinalShow1] = useState(false);
  const [finalShow2, setFinalShow2] = useState(false);

  useEffect(() => {
    if ((showclass1 || showclass1Midiam) && !finalShow1) {
      setFinalShow1(true);
    }
  }, [showclass1, showclass1Midiam, finalShow1]);

  useEffect(() => {
    if ((showclass2 || showclass2Midiam) && !finalShow2) {
      setFinalShow2(true);
    }
  }, [showclass2, showclass2Midiam, finalShow2]);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // تحديث القيمة حسب مكان الـ scroll
    };

    window.addEventListener("scroll", handleScroll);

    // تنظيف الحدث عند الخروج
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollY);

  return (
    <>
      <div
        className="inner-header"
        style={{
          backgroundImage: `url(${AboutImge})`,
        }}
      >
        <div className="cover"></div>
        <figcaption>
          <nav>
            <Link className="linkeH" to="/">
              Home
            </Link>
            <Link className="linkeA" to="/faq">
              About Company
            </Link>
          </nav>
        </figcaption>
      </div>
      <section>
        <div className="container">
          <div
            className="hed"
            style={{ marginTop: "100px", marginBottom: "100px" }}
          >
            <span
              style={{ fontWeight: "900", fontSize: "7rem" }}
              className="solign solign-page"
            >
              Company
            </span>
            <h1
              style={{
                fontWeight: "700",
                textTransform: "uppercase",
              }}
              className="hed-h1"
            >
              Algorionix
            </h1>
          </div>

          <div className="m-about">
            <div className="a-imge col-6">
              <div className="main-imge">
                <img src={AboutImge1} alt="About Us" />
              </div>
            </div>
            <div className="a-infocom col-6">
              <div>
                <p className="a-title"> Who We Are</p>
                We are Algorionix – AGX, a software company driven by limitless
                ambition. We don’t just provide software solutions — we create
                complete digital experiences that reflect the speed and
                professionalism of today’s world. At a time when the entire
                world is going digital, we chose not just to be part of the
                change — but to lead it. AGX was born from a simple idea, fueled
                by big passion and the belief that every project can become a
                unique success story when backed by the right tech partner.
              </div>
              <div>
                <p className="a-title">Our Mission</p>
                We're here to make your journey easier: From the moment your
                idea sparks, until it shines online for the world to see, We
                stand by your side, think with you, and build it as if it were
                our own.
              </div>
              <div>
                <p className="a-title"> What We Do</p>
                From the heart of Egypt to the world… We specialize in:
                Developing high-quality websites Building full-featured
                e-commerce platforms Creating tailored web applications
                Delivering smart, scalable management systems
              </div>
              <div>
                <p className="a-title">Real Experiences</p>
                We take pride in being the technical developer behind the
                website of AFG — an international export company specializing in
                machinery and resource exports to Africa. This project stands as
                one of our key achievements, showcasing our ability to deliver
                digital solutions that meet global market standards.
              </div>

              <div>
                <p className="a-title">Our Vision</p>
                Our goal is to become one of the leading software companies in
                the Middle East and Africa — and the first choice for any
                business or individual seeking a reliable and trusted tech
                partner.
              </div>
              <div>
                <p className="a-title"> How to Reach Us</p>
                We are a fully online company, operating both within Egypt and
                internationally. You can easily get in touch with us through our
                website and social media platforms — always close to you, just
                one click away.
              </div>
            </div>
          </div>
          <div className="m-about2">
            <div className="hed">
              <span
                style={{ fontSize: "7.5rem", fontWeight: "750" }}
                className="solign solign-page"
              >
                About
              </span>
              <h1 className={`${finalShow1 ? "hed-h1" : ""}`}>Who We Are</h1>
              <div className="who-we-are">
                <div className="a-item">
                  <div className="a-imge">
                    <img src={AItem1}></img>
                  </div>
                  <div className="a-text">
                    <div>
                      <p className="title">Team with Passion</p>
                      We are a group of professional developers working in
                      harmony under the AGX umbrella. Each member brings strong
                      technical experience — but what truly unites us is our
                      passion for coding and our shared love for creating things
                      that matter.
                    </div>
                  </div>
                </div>
                <div className="a-item">
                  <div>
                    <div className="a-imge">
                      <img src={AItem2}></img>
                    </div>
                    <div className="a-text">
                      <div>
                        <p className="title">Purposeful Innovation</p>
                        At AGX, we don’t just work to deliver a project — we
                        innovate, think deeply, and analyze every detail to
                        provide smart and distinctive solutions. We understand
                        the market, we understand the client, and we deliver
                        systems and websites built to compete both locally and
                        globally.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="a-item">
                  <div>
                    <div className="a-imge">
                      <img src={AItem3}></img>
                    </div>
                    <div className="a-text">
                      <div>
                        <p className="title">Building the Future</p>
                        We believe that technology has no limits — and we aim to
                        be at the forefront of those pushing its boundaries.
                        With every line of code and every experience we launch,
                        we move one step closer to our vision: To make AGX a
                        globally recognized software company that started in
                        Egypt and serves the Arab.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-about3">
            <div className="hed">
              <span
                style={{ fontSize: "7.5rem", fontWeight: "750" }}
                className="solign solign-page"
              >
                Why Us
              </span>
              <h1 className={`${finalShow2 ? "hed-h1" : ""}`}>
                Why Algorionix
              </h1>
            </div>
            <div className="m-about">
              <div className="a-infocom col-6">
                <div style={{ marginLeft: "28px" }}>
                  <div className="contcone">
                    <FontAwesomeIcon
                      className="riteicone "
                      icon={faCircleCheck}
                    />
                    <p className="w-title">Development & Integrations</p>
                  </div>
                  Four solutions were designed, developed, implemented, and
                  supported by BI-Technologies experts: Salesbuzz, Fieldbuzz,
                  Fleet Control and Mandoobi, all of which had significant
                  market success. In addition to extensive expertise integrating
                  Salesbuzz with Microsoft Dynamics, SAP, Oracle, FAWRY
                  e-payments, e-invoicing authorizations, and others...
                </div>
                <div style={{ marginLeft: "28px" }}>
                  <div className="contcone">
                    <FontAwesomeIcon
                      className="riteicone "
                      icon={faCircleCheck}
                    />
                    <p className="w-title">User-Experience</p>
                  </div>
                  Impactful user experience. Delivers add-ons to fill the
                  functional gaps in a smart and user-friendly way.
                </div>
                <div style={{ marginLeft: "28px" }}>
                  <div className="contcone">
                    <FontAwesomeIcon
                      className="riteicone "
                      icon={faCircleCheck}
                    />
                    <p className="w-title">24/7 Hours Support</p>
                  </div>
                  High-level support around the clock for our customers through
                  a specialized team who provides prompt assistance and
                  consultation.
                </div>
                <div style={{ marginLeft: "28px" }}>
                  <div className="contcone">
                    <FontAwesomeIcon
                      className="riteicone "
                      icon={faCircleCheck}
                    />
                    <p className="w-title">Customer Satisfaction Guaranteed</p>
                  </div>
                  Quality client care integrated into our business culture
                </div>

                <div style={{ marginLeft: "28px" }}>
                  <div className="contcone">
                    <FontAwesomeIcon
                      className="riteicone "
                      icon={faCircleCheck}
                    />
                    <p className="w-title">World-class Partners</p>
                  </div>
                  Our partnerships with world-class technology and business
                  partners enable us to expand our geographical reach to new
                  clients while fulfilling the needs of our existing customers
                  in the MENA.
                </div>
                <div style={{ marginLeft: "28px" }}>
                  <div className="contcone">
                    <FontAwesomeIcon
                      className="riteicone "
                      icon={faCircleCheck}
                    />
                    <p className="w-title">Overall Value</p>
                  </div>
                  Premium products, solutions, and services for the best overall
                  value.
                </div>
                <div style={{ marginLeft: "28px" }}>
                  <div className="contcone">
                    <FontAwesomeIcon
                      className="riteicone "
                      icon={faCircleCheck}
                    />
                    <p className="w-title">SaaS & On-cloud Capabilities</p>
                  </div>
                  The pioneer of implementing SaaS and Cloud-based solutions
                </div>
                <div style={{ marginLeft: "28px" }}>
                  <div className="contcone">
                    <FontAwesomeIcon
                      className="riteicone "
                      icon={faCircleCheck}
                    />
                    <p className="w-title">Security & Data Management</p>
                  </div>
                  Protecting your privacy and online security is our
                  responsibility.
                </div>
                <div style={{ marginLeft: "28px" }}>
                  <div className="contcone">
                    <FontAwesomeIcon
                      className="riteicone "
                      icon={faCircleCheck}
                    />
                    <p className="w-title">Consulting & Training</p>
                  </div>
                  Outstanding software consulting, training, and project
                  management
                </div>
                <div style={{ marginLeft: "28px" }}>
                  <div className="contcone">
                    <FontAwesomeIcon
                      className="riteicone "
                      icon={faCircleCheck}
                    />
                    <p className="w-title">Controlled Processes</p>
                  </div>
                  We apply particular steps and protocols on every project to
                  ensure a clear division of responsibilities, seamless
                  development, speed, and quality.
                </div>
                <div style={{ marginLeft: "28px" }}>
                  <div className="contcone">
                    <FontAwesomeIcon
                      className="riteicone "
                      icon={faCircleCheck}
                    />
                    <p className="w-title">Research & Development</p>
                  </div>
                  We believe that R&D is worth investment; it enables us to
                  bring new features and modules that can help us improve your
                  business processes, efficiency, and productivity.
                </div>
                <div style={{ marginLeft: "28px" }}>
                  <div className="contcone">
                    <FontAwesomeIcon
                      className="riteicone "
                      icon={faCircleCheck}
                    />
                    <p className="w-title">
                      Personalized Digital Transformation
                    </p>
                  </div>
                  We enable the digital transformation of your business while
                  meeting all your unique needs and requirements, building on
                  your vision, and showing the alternatives that suit you best.
                </div>
                <div style={{ marginLeft: "28px" }}>
                  <div className="contcone">
                    <FontAwesomeIcon
                      className="riteicone "
                      icon={faCircleCheck}
                    />
                    <p className="w-title">Speed with Precision</p>
                  </div>
                  Fast execution without compromising quality.
                </div>
                <div style={{ marginLeft: "28px" }}>
                  <div className="contcone">
                    <FontAwesomeIcon
                      className="riteicone "
                      icon={faCircleCheck}
                    />
                    <p className="w-title">Competitive Pricing</p>
                  </div>
                  Competitive pricing that suits projects of all sizes.
                </div>
                <div style={{ marginLeft: "28px" }}>
                  <div className="contcone">
                    <FontAwesomeIcon
                      className="riteicone "
                      icon={faCircleCheck}
                    />
                    <p className="w-title">Modern & Impactful Design</p>
                  </div>
                   Modern designs that impress visitors and reflect your brand
                  identity.
                </div>
                <div style={{ marginLeft: "28px" }}>
                  <div className="contcone">
                    <FontAwesomeIcon
                      className="riteicone "
                      icon={faCircleCheck}
                    />
                    <p className="w-title">Professional from Start to Finish</p>
                  </div>
                  Professionalism in every step — from the first line of code to
                  the final button on the site.
                </div>
              </div>
              <div className="a-imge col-6">
                <div className="main-imge">
                  <img src={WhyImge} alt="About Us" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Heders />
      <SocialMedia />
      <Footer />
    </>
  );
}
