import "./AdminPanel.css"
import Sidebar from '../components/admin/Sidebar'
import Footer from '../components/home/Footer'
import Navbar from '../components/home/Navbar'
import Widget from '../components/admin/Widget'
import Table from "../components/admin/Table"
import Featured from "../components/admin/Featured"
import Chart from "../components/admin/Chart"

const AdminPanel = () => {
    return (
        <div className='adminPanel'>
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
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table />
          </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AdminPanel