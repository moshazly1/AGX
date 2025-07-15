import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AlartSuccess({ message, redirectText }) {
  return (
    <div className="success-alert">
      <strong>
        <FontAwesomeIcon icon={faCircleCheck} />
        {"   "}
        {message}
      </strong>
      {"   "} {redirectText}
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
    </div>
  );
}
