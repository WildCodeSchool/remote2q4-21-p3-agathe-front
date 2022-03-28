import "./AdminPanel.css";
import Chart from "../components/admin/Chart";
import Featured from "../components/admin/Featured";
import Sidebar from "../components/admin/Sidebar";
import List from "../components/admin/Table";
import Widget from "../components/admin/Widget";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

const AdminPanel = () => {
    return (
        <div className="adminPanel">
            <Navbar />
            <div className="adminMain">
                <Sidebar className="sidebar" />
                <div className="adminContainer">
                    <div className="widgets">
                        <Widget type="user" />
                        <Widget type="order" />
                        <Widget type="earning" />
                        <Widget type="balance" />
                    </div>
                    <div className="charts">
                        <Featured />
                        <Chart
                            title="Résultat des 6 derniers mois (Revenu)"
                            aspect={2 / 1}
                        />
                    </div>
                    <div className="listContainer">
                        <div className="listTitle">Dernières Commandes</div>
                        <List />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AdminPanel;
