import React from "react";
import ContactForm from "../components/form/ContactForm";

import "./ContactPage.css";

function ContactPage() {
    return (
        <>
            <h1 className="contact">Nous contacter</h1>
            <a
                className="email"
                href="mailto: elfenncosmetiques@gmail.com"
                target="_blank"
                rel="noreferrer"
            >
                elfenncosmetiques@gmail.com
            </a>
            <ContactForm />
        </>
    );
}

export default ContactPage;
