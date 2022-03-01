import React from 'react';
import ContactForm from "../components/form/ContactForm";
import Footer from '../components/home/Footer';
import Navbar from '../components/home/Navbar';
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="ContactPage">
      <Navbar />
        <div className='FormContainer'>
            <h1 className="contact">Nous contacter</h1>
            <a className="email" href="mailto: elfenncosmetiques@gmail.com" target="_blank" rel="noreferrer">elfenncosmetiques@gmail.com</a>
            <ContactForm  />
        </div>
        <Footer />
    </div>
  )
}

export default ContactPage