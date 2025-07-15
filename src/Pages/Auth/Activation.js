import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { ACTIVATION, baseURL } from "../../API/API";
import Lodingsubmit from "../../Components/Loding/Loding";

export default function Activation() {
  const location = useLocation();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get("code");
    const id = queryParams.get("id");

    const activateEmail = async () => {
      setLoading(true);
      try {
        const res = await axios.post(`${baseURL}/${ACTIVATION}`, {
          uidb64: id,
          token: code,
        });
        window.location.href = "/login";
        console.log(res);
      } catch (err) {
        setLoading(false);
        setErr(err.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };

    activateEmail();
  }, [location.search]);

  return (
    <>
      {loading && <Lodingsubmit />}
      <div className="activation-container">
        {!loading && err && <div className="activation-alert error">{err}</div>}
      </div>
    </>
  );
}
