import React from "react";
import AdminPanel from "./admin/AdminPanel";
import Introduction from "../components/home/Introduction";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import Presentation from "../components/home/Presentation";
import ProductsList from "../components/products/ProductsList";
import {useUser} from "../contexts/UserProvider";
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
