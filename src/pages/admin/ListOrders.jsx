import Sidebar from "../../components/admin/Sidebar";
import DatatableOrders from "../../components/admin/DatatableOrders";
import "./List.css";

const List = () => {
    return (
        <>
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <DatatableOrders />
                </div>
            </div>
        </>
    );
};

export default List;
