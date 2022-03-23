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
            <h1 className="topTitle">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="featuredBottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="bottomTtitle">Total sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">Previous transactions processing last payments may not be included</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Yesterday</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize="small" />
                        <div className="resultAmount">$250</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small" />
                        <div className="resultAmount">$3,000</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpOutlinedIcon fontSize="small" />
                        <div className="resultAmount">$12,000</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured