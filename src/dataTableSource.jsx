export const ordersColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "order_date", headerName: "Date", width: 70 },
    {
        field: "user_name",
        headerName: "Client",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
                    {params.row.user_name}
                </div>
            );
        },
    },
    {
        field: "product",
        headerName: "Produit",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
                    {params.row.product}
                </div>
            );
        },
    },
    {
        field: "quantity",
        headerName: "Quantité",
        width: 100,
    },
    {
        field: "amount",
        headerName: "Montant",
        width: 100,
    },
];

export const productColumns = [
    { field: "ProductID", headerName: "ID", width: 70 },
    {
        field: "SKU",
        headerName: "SKU",
        width: 100,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
                    {params.row.SKU}
                </div>
            );
        },
    },
    {
        field: "product",
        headerName: "Produit",
        width: 280,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
                    {params.row.name}
                </div>
            );
        },
    },
    {
        field: "price",
        headerName: "Prix",
        width: 100,
    },
];

export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return `${params.row.FirstName} ${params.row.LastName}`;
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },
];
