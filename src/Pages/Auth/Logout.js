
import axios from 'axios';
import { baseURL, LOGOUT } from '../../API/API';
import Cookie from "cookie-universal";
export default function Logout() {

const cookie = Cookie() ;

 async function handelLogout () {
    try  {
  const res =  await   axios.get(`${baseURL}/${LOGOUT}` ,{ headers : {
Authorization :  'Bearer ' + cookie.get("e-commerce")

  }
    
  } );
  console.log(res) ;  
    }catch (err) {
   console.log(err) ;
    }
}


    return (
        <button onClick={handelLogout}>Logout</button>
    )
}