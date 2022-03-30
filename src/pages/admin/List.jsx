import Datatable from "../../components/admin/Datatable";
import Sidebar from "../../components/admin/Sidebar";
import "./List.css";

const List = () => {
    return (
        <>
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
