import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./ContactPage.css";

function ContactPage() {
  return (
    <div>
        <Navbar />
        <div className='ContactPage'>
            <h1 className="contact">Nous contacter</h1>
            <a className="email" href="mailto: elfenncosmetiques@gmail.com" target="_blank">elfenncosmetiques@gmail.com</a>
        </div>
        <Footer />
    </div>
  )
}

export default ContactPage