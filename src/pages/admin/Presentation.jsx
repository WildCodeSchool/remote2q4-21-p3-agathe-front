import Sidebar from "../../components/admin/Sidebar";
import PresentationForm from "../../components/form/PresentationForm";
import "./List.css";

const List = () => {
    return (
        <>
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <PresentationForm />
                </div>
            </div>
        </>
    );
};

export default List;
