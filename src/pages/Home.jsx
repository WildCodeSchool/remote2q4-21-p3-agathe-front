import React from "react";
import axios from "axios";
import AdminPanel from "./admin/AdminPanel";
import Introduction from "../components/home/Introduction";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import Presentation from "../components/home/Presentation";
import ProductsList from "../components/products/ProductsList";
import {useUser} from "../contexts/UserProvider";
import "./Home.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

const Home = () => {
    const user = useUser();
    const [admin, setAdmin] = React.useState(false);

    React.useEffect(() => {
      if (!user.data) {
            setAdmin(false);
        } else {
            axios
                .get(`${BASE_URL}/api/auth/admin`, { withCredentials: true })
                .then(response => {
                    setAdmin(response.status === 202); // admin user
                })
                .catch(err => err.response.status!==403 ? console.log(err):null);
        }
    }, [user.data]);

    return (
        <div className="home">
            {admin && (
                <>
                    <AdminPanel />
                </>
            )}
            {!admin && (
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
