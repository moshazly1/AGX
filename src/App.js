
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Website/HomePage';
import Login from './Pages/Auth/Login';  
import Regester from './Pages/Auth/Regester';
import Users from './Pages/Dashbord/Users';

function App() {
  return (
    <div className="App">
      <Routes >
      <Route path="/" exact element={<HomePage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/regester" element={<Regester/>} />
     <Route path='/users' element ={<Users/>}  />
      </Routes>
  

    </div>
  );
}

export default App;
