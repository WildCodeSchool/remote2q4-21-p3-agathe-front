import Navbar from "../components/home/Navbar";
import Sidebar from "../components//admin/Sidebar";
import Chart from "../components/admin/Chart";
import List from "../components/admin/Table";
import "./Single.css";

const Single = () => {
  return (
    <>
    <Navbar />
    <div className="single">
    <Sidebar />
      <div className="singleContainer">
        <div className="singleTop">
          <div className="singleLeft">
            <div className="editButton">Editer</div>
            <h1 className="singleTitle">Information</h1>
            <div className="singleItem">
              <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="" className="itemImg" />

              <div className="details">
                <h1 className="singleItemTitle">John Doe</h1>
                <div className="singleDetailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">johndoe@gmail.com</span>
                </div>
                <div className="singleDetailItem">
                  <span className="itemKey">Téléphone: </span>
                  <span className="itemValue">0123456789</span>
                </div>
                <div className="singleDetailItem">
                  <span className="itemKey">Adresse: </span>
                  <span className="itemValue">666 Inur Beut St. Poil</span>
                </div>
                <div className="singleDetailItem">
                  <span className="itemKey">Pays: </span>
                  <span className="itemValue">Groland</span>
                </div>
                </div>
              </div>
            </div>
            <div className="singleRight">
              <Chart aspect={3 / 1} title="Revenu du client (Des 6 derniers mois)"/>
            </div>
            </div>
            <div className="singleBottom">
            <h2 className="singleTitle">Dernières commandes</h2>
              <List />
            </div>
      </div>
    </div>
    </>
  )
}

export default Single