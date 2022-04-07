<<<<<<< HEAD
import Datatable from "../../components/admin/Datatable";
import Sidebar from "../../components/admin/Sidebar";
=======
import Sidebar from "../../components/admin/Sidebar";
import Datatable from "../../components/admin/Datatable";
>>>>>>> c5dc37a9e2fdca7dba298f509bea5d352759a6c1
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
