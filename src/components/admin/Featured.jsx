import "./Featured.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredTop">
            <h1 className="topTitle">Revenu des ventes</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="featuredBottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="bottomTtitle">Vente total du jour</p>
            <p className="amount">250 €</p>
            <p className="desc">Les paiements du jour d'avant peuvent être toujours en cours de calcul</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Hier</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize="small" />
                        <div className="resultAmount">120 €</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Semaine passée</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small" />
                        <div className="resultAmount">1550 €</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Mois dernier</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small" />
                        <div className="resultAmount">6230 €</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured