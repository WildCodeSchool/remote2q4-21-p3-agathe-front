import Sidebar from "../../components/admin/Sidebar";
import PresentationForm from "../../components/form/PresentationForm";
import "./Presentation.css"
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
