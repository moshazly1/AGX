import { NavLink } from "react-router-dom";
import AboutImge1 from "../../Imge/About.jpg";
import { useEffect, useRef, useState } from "react";
export default function AboutUs() {
  const [showClass, setShowClass] = useState(false);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY;

      if (scrolled > 110 && !hasAnimatedRef.current) {
        hasAnimatedRef.current = true;
        setShowClass(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="AboutWrapper">
      <div className="container">
        <div className="About ">
          <div className={`AboutImge ${showClass && "showIM"} `}>
            <img src={AboutImge1} />
          </div>
          <div className="InfoWrapper">
            <div className={`AboutInfo  ${showClass && "show"} `}>
              <span className="solign">About</span>
              <h2>We provide the best solutions</h2>
              <div className="AboutText">
                <p>
                  At <strong>Algorionix</strong>, we specialize in developing
                  innovative and fully integrated web solutions that meet the
                  needs of modern businesses. We build high-performance websites
                  and web applications that are fast, responsive, and scalable
                  Our team is composed of professional developers with deep
                  expertise in the latest web technologies, We combine clean
                  code with smart design to deliver user-centered digital
                  experiences.
                </p>
                <p>
                  We believe technology is the engine of the future — that’s why
                  we’re committed to delivering modern solutions that align with
                  the latest digital trends while ensuring quality, speed, and
                  client satisfaction We’ve successfully partnered with several
                  organizations, including <strong>AFG</strong>, delivering
                  impactful web solutions that helped them achieve measurable
                  results and accelerate their digital growth.
                </p>
                <p>
                  Whether you're looking to launch a professional website,
                  develop a custom web application, or build a smart platform to
                  manage your operations — <strong>Algorionix</strong> is your
                  trusted technology partner.
                </p>
              </div>

              <NavLink className="btn-More" to="/moreaboutus">
                More About Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
