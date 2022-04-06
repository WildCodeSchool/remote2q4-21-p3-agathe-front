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
import { useUser } from "../../contexts/UserProvider";
import "./Sidebar.css"

const PATH_ADMIN = process.env.REACT_APP_PATH_ADMIN;

const Sidebar = () => {
    const user = useUser()

    return (
        <div className='sidebar'>
            <div className='center'>
                <ul>
                    <p className="sidebarTitle">MAIN</p>
                    <Link to={`${PATH_ADMIN}`} style={{ textDecoration: "none" }}>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Menu</span>
                    </li>
                    </Link>
                    <p className="sidebarTitle">LISTS</p>
                    <Link to={`${PATH_ADMIN}/users`} style={{ textDecoration: "none" }}>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span>Clients</span>
                    </li>
                    </Link>
                    <Link to={`${PATH_ADMIN}/products`} style={{ textDecoration: "none" }}>
                    <li>
                        <Inventory2OutlinedIcon className='icon' />
                        <span>Produits</span>
                    </li>
                    </Link>
                    <Link to={`${PATH_ADMIN}/orders`} style={{ textDecoration: "none" }}>
                    <li>
                        <CreditCardOutlinedIcon className='icon' />
                        <span>Commandes</span>
                    </li>
                    </Link>
                    <Link to={`${PATH_ADMIN}/deliveries`} style={{ textDecoration: "none" }}>

                    <li>
                        <LocalShippingOutlinedIcon className='icon' />
                        <span>Livraison</span>
                    </li>
                    </Link>
                    <p className="sidebarTitle">Modifications</p>
                    <Link to={`${PATH_ADMIN}/presentation`} style={{ textDecoration: "none" }}>
                    <li>
                        <AssessmentOutlinedIcon className='icon' />
                        <span>Présentation</span>
                    </li>
                    </Link>
                    <Link to={`${PATH_ADMIN}/products/new`} style={{ textDecoration: "none" }}>
                    <li>
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <span>Ajout d'articles</span>
                    </li>
                    </Link>
                    <p className="sidebarTitle">UTILISATEUR</p>
                    <li>
                        <LogoutOutlinedIcon className='icon' />
                        <Link to="" onClick={user.logout}><span>Déconnexion</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar