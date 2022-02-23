import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./ContactPage.css";

function ContactPage() {
  return (
    <div>
        <Navbar />
        <div>
            <h1 className="contact">Nous contacter</h1>
            <p className="email">elfenncosmetiques@gmail.com</p>
        </div>
        <Footer />
    </div>
  )
}

export default ContactPage