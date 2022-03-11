import React from 'react';
import Footer from '../components/home/Footer';
import RegisterForm from "../components/form/RegisterForm";
import Navbar from '../components/home/Navbar';
import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div className="RegisterPage">
      <Navbar />
        <div className='RegisterContainer'>
            <RegisterForm  />
        </div>
        <Footer />
    </div>
  )
}

export default RegisterPage