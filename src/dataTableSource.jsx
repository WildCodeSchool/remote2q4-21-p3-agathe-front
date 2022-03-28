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
        return (
            `${params.row.FirstName} ${params.row.LastName}`
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
];
  
