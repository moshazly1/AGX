import axios from "axios";
import { useEffect } from "react";
import { baseURL, LOGOUT, USERS } from "../../API/API";
import Cookie from "cookie-universal";
import Logout from "../Auth/Logout";



export default function Users() {
    const cookie = Cookie();
  useEffect(() => {
    axios.get(`${baseURL}/${USERS}`, {
      headers: {
        Authorization: "Bearer " + cookie.get("e-commerce")
      }
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Users Page</h1>
     <Logout/>
    </div>
  );
}
