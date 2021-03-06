import React from "react";
import ContactForm from "../components/form/ContactForm";
import "./ContactPage.css";

function ContactPage() {
    return (
        <div className="contactPage">
            <div className="contactLeft">
                <h1 className="contact">Nous contacter</h1>
                <p>Par email :<a
                    className="email"
                    href="mailto: elfenncosmetiques@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    elfenncosmetiques@gmail.com
                </a></p>
                <ContactForm />
            </div>
            <div className="contactRight"></div>
        </div >
    );
}

export default ContactPage;
