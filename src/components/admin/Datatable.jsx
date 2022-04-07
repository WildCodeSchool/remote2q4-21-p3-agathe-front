import React from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import {
    productColumns,
    userColumns,
} from "../../dataTableSource";
import useModal from "../modal/useModal";
import Modal from "../modal/modal";
import { useUser } from "../../contexts/UserProvider";
import "./Datatable.css";

const BASE_URL = process.env.REACT_APP_URL_SERVER;
const PATH_ADMIN = process.env.REACT_APP_PATH_ADMIN;

const Datatable = () => {
    const user = useUser();
    const [idToDelete, setIDToDelete] = React.useState(null)
    const [type, setType] = React.useState(null);
    const [rows, setRows] = React.useState(null);
    const [columns, setColumns] = React.useState([]);
    const { isShowing: isModalShowed, toggle: toggleModal } = useModal();
    const { pathname } = useLocation();
    
    const ModalConfirmation = ({toggle}) => {
        return (
            <div className='ModalCart'>
                <button onClick={deleteProduct}>Oui</button>
                <button onClick={toggle} className='btn-link'>Non</button>
            </div>
        )
    }

    const deleteProduct = () => {
        if (idToDelete){
            let url = `${BASE_URL}/api/products/${idToDelete}`;
            axios
            .delete(url, user.getOptions())
            .then((response) => getRows('products'))
            setIDToDelete(null)
        }
        toggleModal()
    }
    
    const onDeleteProduct = (id) => {
        setIDToDelete(id)
        toggleModal()
    }

    const getRows = (type) => {
        let url = `${BASE_URL}/api/${type}`;
        axios
            .get(url, user.getOptions())
            .then((response) => setRows(response.data));
    };

    React.useEffect(() => {
        if (!pathname) {
            return;
        }
        if (pathname === `${PATH_ADMIN}/users`) {
            setType("users");
            getRows("users");
            setColumns(userColumns);
        } else if (pathname === `${PATH_ADMIN}/products`) {
            setType("products");
            getRows("products");
            setColumns(productColumns);
        }
    }, [pathname]);

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link
                            to={`${pathname}/${params.row.id}`}
                            style={{ textDecoration: "none" }}
                            >
                            <div className="viewButton">Voir</div>
                        </Link>
                        <Link
                            to=""
                            onClick={() => onDeleteProduct(params.row.id)}
                            style={{ textDecoration: "none" }}
                        >
                            <div className="deleteButton">Supprimer</div>
                        </Link>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable">
            <div className="datatableTitle">
                Liste des{" "}
                {
                    {
                        products: "produits",
                        users: "utilisateurs",
                    }[type]
                }
                <Link
                    to={`${PATH_ADMIN}/${type}/new`}
                    className="datatableLink"
                >
                    Ajouter
                </Link>
            </div>
            {type === "users" ? (
                <DataGrid
                    rows={rows ?? []}
                    columns={columns.concat(actionColumn)}
                    pageSize={20}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            ) : null}
            {type === "products" ? (
                <DataGrid
                    rows={rows ?? []}
                    columns={columns.concat(actionColumn)}
                    pageSize={20}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            ) : null}
            <Modal isShowing={isModalShowed} hide={toggleModal} title="Etes vous certain de vouloir supprimer cet article ?">
                <ModalConfirmation toggle={toggleModal}/>
            </Modal>
        </div>
    );
};

export default Datatable;
