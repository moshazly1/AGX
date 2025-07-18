import { faComment, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function SocialMedia() {
  return (
    <>
      <div className="social-media">
        <div className="social-links">
          <NavLink
            className="facebook"
            target="_blank"
            to="https://www.facebook.com/profile.php?id=61575205084724"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </NavLink>
          <NavLink
            className="instagram"
            target="_blank"
            to="https://www.instagram.com/agx20_25/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </NavLink>
          <NavLink
            target="_blank"
            className="linkedin"
            to="https://www.linkedin.com/company/algorionix/about/?viewAsMember=true"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </NavLink>
          <NavLink
            target="_blank"
            className="email"
            to="mailto:algorionix@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </NavLink>
        </div>
      </div>

      <div className="socal-order">
        <div className="socal">
          <NavLink className="chat" to="/ask-for-a-demo">
            <FontAwesomeIcon icon={faComment} />
          </NavLink>
          <NavLink
            className="whats-app"
            target="_blank"
            to="https://wa.me/201080397902"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </NavLink>
        </div>
      </div>
    </>
  );
}
