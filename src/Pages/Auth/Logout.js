import axios from "axios";
import { baseURL, LOGOUT } from "../../API/API";
import Cookie from "cookie-universal";

export default function Logout() {
  const cookie = Cookie();

  async function handelLogout() {
    try {
      const res = await axios.post(`${baseURL}/${LOGOUT}`, {
        refresh: cookie.get("AGXREFRESH"),
      });
      cookie.remove("AGXACCESS");
      cookie.remove("AGXREFRESH");

      window.location.href = "/login";
      // console.log(cookie.get("AGXREFRESH"));
      // console.log(res);
    } catch (err) {
      // console.log(cookie.get("AGXREFRESH"));
      // console.log(err);
    }
  }

  return (
    <button
      className="btn-auth"
      style={{ cursor: "pointer" }}
      onClick={handelLogout}
    >
      Logout
    </button>
  );
}
