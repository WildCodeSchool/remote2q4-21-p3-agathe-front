import React from "react";
<<<<<<< HEAD
import axios from "axios";
=======
>>>>>>> c5dc37a9e2fdca7dba298f509bea5d352759a6c1
import AdminPanel from "./admin/AdminPanel";
import Introduction from "../components/home/Introduction";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import Presentation from "../components/home/Presentation";
import ProductsList from "../components/products/ProductsList";
<<<<<<< HEAD
=======
import {useUser} from "../contexts/UserProvider";
>>>>>>> c5dc37a9e2fdca7dba298f509bea5d352759a6c1
import "./Home.css";

const Home = () => {
    const user = useUser();

    const DashBoard = () => {
        if (user.isAdmin) return <AdminPanel />
        return null
    }
    
    return (
        <div className="home">
            <DashBoard />
            {!user.isAdmin && (
                <>
                    <Introduction />
                    <div id="homepage" className="page home_page">
                        <Navbar />
                        <div>
                            <Presentation />
                            <div className="home_products">
                                <h2>Nos produits</h2>
                                <div className="products">
                                    <ProductsList randomize={true} />
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
