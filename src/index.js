import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './Css/Components/Form.css'
import './Css/base/madia.css';  
import './Css/Components/button.css'
import'./Css/Components/alart.css'
import "./Css/Components/loding.css"
import './Css/Components/google.css'
import './Css/Components/Heders.css'
import './Css/Components/Homepage.css'
import'./Css/Components/socialmadi.css'
import './Css/Components/text.css'
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);


