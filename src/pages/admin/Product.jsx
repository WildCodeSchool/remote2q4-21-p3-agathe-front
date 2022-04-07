import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Sidebar from "../../components/admin/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./Product.css";

const Product = ({ title }) => {
    const { register, handleSubmit, reset } = useForm();
    const [productData, setProductData] = useState(null);
    const [file, setFile] = useState("");
    const params = useParams();

    React.useEffect(() => {
        if (params.id) {
            axios
                .get(
                    `${process.env.REACT_APP_URL_SERVER}/api/products/${params.id}`
                )
                .then((response) => {
                    // préparation de ingrédients
                    let i = 0
                    for (let { id, name, description } of response.data
                        .ingredients) {
                        response.data[`ingredient-${i}-name`] = name;
                        response.data[`ingredient-${i}-description`] =
                            description;
                        i += 1
                    }
                    reset(response.data);
                    setProductData(response.data);
                });
        }
    }, []);

    const onSubmit = async (data) => {
        let formData = new FormData();
        try {
            for (let item in data) {
                if (item === "picture") formData.append(item, data[item][0]);
                else formData.append(item, data[item]);
            }
            if (productData) {
                console.log('formData:')
                for (let fi of formData.entries()) console.log(fi)

                axios
                    .put(
                        `${process.env.REACT_APP_URL_SERVER}/api/products`,
                        formData, { withCredentials: true, mode: "cors" }
                    )
                    .then((res) => {
                        console.log(res)
                        if (res.status === 200) {
                            // setUpdate("Mise à jour effectuée");
                            // console.log({ update });
                            //   redirect("/#homepage");
                        }
                    })
                    .catch(err => console.log(err));
            } else {
                axios
                    .post(
                        `${process.env.REACT_APP_URL_SERVER}/api/products`,
                        formData, { withCredentials: true, mode: "cors" }
                    )
                    .then((res) => {
                        if (res.status === 200) {
                            // setUpdate("Mise à jour effectuée");
                            // console.log({ update });
                            //   redirect("/#homepage");
                        }
                    })
                    .catch(err => console.log(err));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const EmptyIngredients = () => {
        return (
            <>
                {[0, 1, 2, 3, 4, 5].map((index) => (
                    <tr>
                        <td>
                            <input
                                type="text"
                                {...register(`ingredient-${index}-name`)}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                {...register(`ingredient-${index}-description`)}
                            />
                        </td>
                    </tr>
                ))}
            </>
        );
    };

    const Ingredients = () => {
        if (!productData) return <>Loading...</>;
        console.log(productData?.ingredients);
        return (
            <>
                {productData.ingredients &&
                    productData.ingredients.map(({ id, name, description }, index) => (
                        <tr>
                            {/* {console.log(id, name, description)} */}
                            <td>
                                <input
                                    type="text"
                                    {...register(`ingredient-${index}-name`)}
                               />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    {...register(
                                        `ingredient-${index}-description`
                                    )}
                                />
                            </td>
                        </tr>
                    ))}
            </>
        );
    };

    return (
        <>
            <div className="new">
                <Sidebar />
                <div className="newContainer">
                    <div className="newTop">
                        <h1>{title}</h1>
                    </div>
                    <div className="newBottom">
                        <div className="newLeft">
                            <img
                                src={
                                    file
                                        ? URL.createObjectURL(file)
                                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                }
                                alt=""
                            />
                        </div>
                        <div className="newRight">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="file">
                                    Image:{" "}
                                    <DriveFolderUploadOutlinedIcon className="newIcon" />
                                </label>
                                <div className=".newFormInput">
                                    <input
                                        {...register("picture")}
                                        type="file"
                                        // id="picture"
                                        onChange={(e) =>
                                            setFile(e.target.files[0])
                                        }
                                        // style={{ display: "none" }}
                                    />
                                </div>
                                <input
                                    type="text"
                                    {...register("sku")}
                                    placeholder="Code du produit"
                                    maxLength="13"
                                />
                                <input
                                    type="text"
                                    {...register("name")}
                                    placeholder="Désignation du produit"
                                    maxLength="200"
                                />
                                <input
                                    type="number"
                                    step="any"
                                    {...register("price")}
                                    placeholder="Prix du produit"
                                    maxLength="5"
                                />
                                <textarea
                                    {...register("characteristic")}
                                    cols="30"
                                    rows="10"
                                    placeholder="Caractéristiques"
                                ></textarea>
                                <textarea
                                    {...register("description")}
                                    cols="30"
                                    rows="10"
                                    placeholder="Description"
                                ></textarea>
                                <textarea
                                    {...register("ingredients_details")}
                                    cols="30"
                                    rows="10"
                                    placeholder="Composition"
                                ></textarea>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {!productData && <EmptyIngredients/>}
                                        {productData && (
                                            <Ingredients
                                                key={productData?.id}
                                            />
                                        )}
                                    </tbody>
                                </table>
                                <button>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
