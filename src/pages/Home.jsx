import React from "react";
import axios from "axios";
import Introduction from "../components/home/Introduction";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import Presentation from "../components/home/Presentation";
import ProductsList from "../components/products/ProductsList";
import "./Home.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

const Home = () => {
  const [admin, setAdmin] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(`${BASE_URL}/api/auth/admin`, { withCredentials: true })
      .then(response => {
        setAdmin(response.status === 202) // admin user
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="home">
      {admin && (<>
        <Navbar />
        <div>Admin page placeholder</div>
        <Footer />
      </>)}
      {!admin && (
        <>
          <Introduction />
          <div id="homepage" className="page home_page">
            <Navbar />
            <div><Presentation />
              <div className="home_products">
                <h2>Nos produits</h2>
                <div className="products">
                  <ProductsList randomize={true} />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </>)
      }
    </div>
  );
};

export default Home;
