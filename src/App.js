import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Website/HomePage";
import Login from "./Pages/Auth/Login";
import Regester from "./Pages/Auth/Regester";
import Users from "./Pages/Dashbord/Users";
import UplodePhoto from "./Pages/Dashbord/UplodPhoto";
import MoreAboutUs from "./Pages/information/MoreAboutUs";
import AskForDemo from "./Pages/Dashbord/AskForDemo";
import FAQs from "./Pages/Dashbord/FAQs";
import ScrollToTop from "./ScrollToTop";
import Contact from "./Pages/information/Contact";
import Solutions from "./Pages/Dashbord/Solution";
import AdminDashboards from "./Pages/Dashbord/AdminDashboards";
import Elearning from "./Pages/Dashbord/E_Learinang";
import Businesswebsites from "./Pages/Dashbord/BisnesWebsite";
import Ecommerce from "./Pages/Dashbord/E_commerc";
import BookingSystem from "./Pages/Dashbord/BookingSystem";
import RealEstate from "./Pages/Dashbord/RealEstate";
import TeamProjectandTaskManagement from "./Pages/Dashbord/TeamProject";
import Services from "./Pages/information/Services";
import Activation from "./Pages/Auth/Activation";
import ForgetYourPassword from "./Pages/Auth/ForgetYourPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/moreaboutus" element={<MoreAboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regester" element={<Regester />} />
        <Route path="/Activate" element={<Activation />} />
        <Route path="/Reset-Password" element={<ResetPassword />} />
        <Route path="/for-get-your-password" element={<ForgetYourPassword />} />
        <Route path="/users" element={<Users />} />
        <Route path="/uplodphoto" element={<UplodePhoto />} />
        <Route path="/ask-for-a-demo" element={<AskForDemo />} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route
          path="/solutions/admindashboards"
          element={<AdminDashboards />}
        />
        <Route path="/solutions/bookingsystem" element={<BookingSystem />} />
        <Route path="/solutions/elearning" element={<Elearning />} />
        <Route
          path="/solutions/businesswebsites"
          element={<Businesswebsites />}
        />
        <Route path="/solutions/ecommerce" element={<Ecommerce />} />
        <Route path="/solutions/real-state" element={<RealEstate />} />
        <Route
          path="/solutions/Team-Project&Task-Management"
          element={<TeamProjectandTaskManagement />}
        />
        <Route path="services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
