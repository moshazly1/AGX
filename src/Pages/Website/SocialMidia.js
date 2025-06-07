import { faComment, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {

  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function SocialMedia() {
    return (
        <>
        
    
        <div className="social-media">
            <div className="social-links">
                <NavLink className="facebook" to="#">
                 <FontAwesomeIcon icon={faFacebookF} />
                </NavLink>
                <NavLink className="instagram" to="#">
                    <FontAwesomeIcon icon={faInstagram} />
                </NavLink>
                <NavLink className="linkedin" to="#">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </NavLink>
                <NavLink className="email" to="#">
                    <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>
            </div>
           
        </div>

       <div className="socal-order">
        <div className="socal" >
            
    <NavLink className="chat"  to="#" >
<FontAwesomeIcon icon={faComment} />
    </NavLink>
    <NavLink className="whats-app"  to="#">

    <FontAwesomeIcon icon={faWhatsapp} />
    </NavLink>
       </div>
       </div>
           </>
    );
}
