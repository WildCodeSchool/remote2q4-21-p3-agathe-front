import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='center'>
                <ul>
                    <p className="sidebarTitle">MAIN</p>
                    <Link to="/admin" style={{ textDecoration: "none" }}>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Menu</span>
                    </li>
                    </Link>
                    <p className="sidebarTitle">LISTS</p>
                    <Link to="/admin/users" style={{ textDecoration: "none" }}>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span>Clients</span>
                    </li>
                    </Link>
                    <Link to="/admin/products" style={{ textDecoration: "none" }}>
                    <li>
                        <Inventory2OutlinedIcon className='icon' />
                        <span>Produits</span>
                    </li>
                    </Link>
                    <Link to="/admin/orders" style={{ textDecoration: "none" }}>
                    <li>
                        <CreditCardOutlinedIcon className='icon' />
                        <span>Commandes</span>
                    </li>
                    </Link>
                    <li>
                        <LocalShippingOutlinedIcon className='icon' />
                        <span>Livraison</span>
                    </li>
                    <p className="sidebarTitle">UTILE</p>
                    <li>
                        <AssessmentOutlinedIcon className='icon' />
                        <span>Statistiques</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className="sidebarTitle">UTILISATEUR</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>Profil</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon' />
                        <Link to="/logout"><span>Déconnexion</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar