import React from "react";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import "./Page.css"

const Page = ({SubPage}) => {
    return (
        <div className="Page">
            <Navbar />
            <SubPage />
            <Footer />
        </div>
    );
};

export default Page;