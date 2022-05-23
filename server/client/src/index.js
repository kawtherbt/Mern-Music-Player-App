import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
//import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Main from './pages/Main';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


