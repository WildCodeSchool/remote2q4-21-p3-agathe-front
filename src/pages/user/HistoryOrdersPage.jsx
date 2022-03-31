import React from "react";
import Footer from "../../components/home/Footer";
import HistoryOders from "../../components/user/HistoryOders";
import Navbar from "../../components/home/Navbar";



const HistoryOdersPage = () => {
  return (
    <div>
        <Navbar />
        <HistoryOders/>
        <Footer/>
    </div>
  );
};

export default HistoryOdersPage;
