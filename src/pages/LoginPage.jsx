import React from 'react';
import Footer from '../components/home/Footer';
import LoginForm from "../components/form/LoginForm";
import Navbar from '../components/home/Navbar';
import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="LoginPage">
      <Navbar />
        <div className='LoginContainer'>
            <LoginForm  />
        </div>
        <Footer />
    </div>
  )
}

export default LoginPage