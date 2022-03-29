export const userInputs = [{
        id: 1,
        label: "Username",
        type: "text",
        placeholder: "john_doe",
    },
    {
        id: 2,
        label: "Name and surname",
        type: "text",
        placeholder: "John Doe",
    },
    {
        id: 3,
        label: "Email",
        type: "mail",
        placeholder: "john_doe@gmail.com",
    },
    {
        id: 4,
        label: "Phone",
        type: "text",
        placeholder: "+1 234 567 89",
    },
    {
        id: 5,
        label: "Password",
        type: "password",
    },
    {
        id: 6,
        label: "Address",
        type: "text",
        placeholder: "Elton St. 216 NewYork",
    },
    {
        id: 7,
        label: "Country",
        type: "text",
        placeholder: "USA",
    },
];

//   CREATE TABLE products (
//     ProductID int  NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     SKU varchar(13)  NOT NULL DEFAULT '',
//     `name` varchar(200)  NOT NULL ,
//     description text  NOT NULL ,
//     price decimal(5,2)  NOT NULL ,
//     characteristic text  NOT NULL ,
//     ingredients_details text NOT NULL ,
// );

// CREATE TABLE Ingredients (
//     IngredientID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     `name` varchar(255) NOT NULL,
//     description text NOT NULL,
//     ProductID int  NOT NULL
// );
export const productInputs = [{
        id: 1,
        label: "Code",
        type: "text",
        placeholder: "SKU",
    },
    {
        id: 2,
        label: "Nom",
        type: "text",
        placeholder: "Huile",
    },
    {
        id: 3,
        label: "Description",
        type: "text",
        placeholder: "Description",
    },
    {
        id: 4,
        label: "Prix",
        type: "float",
        placeholder: 14.99,
    },
    {
        id: 5,
        label: "Charactéristiques",
        type: "textarea",
        placeholder: "blabla",
    },
    {
        id: 6,
        label: "Composition",
        type: "text",
        placeholder: "Composition détail",
    },
];