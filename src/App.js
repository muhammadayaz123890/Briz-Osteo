import React from 'react';
import "./App.scss";
import Navbar from './components/navbar';
import Router from './components/router';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { useLocation } from 'react-router-dom';
import Footer from './components/footer';



function App() {

  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (

    
    <div className="App">
      {!isAdminRoute && <Navbar /> }
      
      <Router />

      {!isAdminRoute && <Footer />}
    </div>
  );
}


export default App;



