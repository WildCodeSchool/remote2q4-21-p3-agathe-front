import React from "react";
import Footer from "../../components/home/Footer";
import HistoryOders from "../../components/user/HistoryOrders";
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
