import Sidebar from "../components/admin/Sidebar";
import Navbar from "../components/home/Navbar";
import Datatable from "../components/admin/Datatable";
import "./List.css";

const List = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <Datatable />
                </div>
            </div>
        </>
    );
};

export default List;
