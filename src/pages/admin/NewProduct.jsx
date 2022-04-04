import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Sidebar from "../../components/admin/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./NewProduct.css";

const New = ({ title }) => {
    const { register, handleSubmit, setValue } = useForm();
    const [file, setFile] = useState("");
    const params = useParams()

    React.useEffect(() => {
        if (params.id) {
            axios
            .get(`${process.env.REACT_APP_URL_SERVER}/api/products/${params.id}`)
            .then(response => {
                for (let item of ['sku','name','price','characteristic','description','ingredients_details'])
                    setValue(item, response.data[item])
            });
        }
      }, []);

    const onSubmit = async (data) => {
        try {
            let formData = new FormData();
            for (let item in data) {
                if (item === "picture") {
                    formData.append(item, data[item][0]);
                } else {
                    formData.append(item, data[item]);
                }
            }
            axios
                .post(
                    `${process.env.REACT_APP_URL_SERVER}/api/products`,
                    formData
                )
                .then((res) => {
                    if (res.status === 200) {
                        // setUpdate("Mise à jour effectuée");
                        // console.log({ update });
                        //   redirect("/#homepage");
                    }
                });
        } catch (error) {
            console.log(error);
        }
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
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                {/* {inputs.map((input) => (
                                    <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    />
                                    </div>
                                ))} */}

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
                                    placeholder="caractéristiques"
                                ></textarea>
                                <textarea
                                    {...register("description")}
                                    cols="30"
                                    rows="10"
                                    placeholder="description"
                                ></textarea>
                                <textarea
                                    {...register("ingredients_details")}
                                    cols="30"
                                    rows="10"
                                    placeholder="composition"
                                ></textarea>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient-0-name"
                                                    )}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient-0-description"
                                                    )}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient-1-name"
                                                    )}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient-1-description"
                                                    )}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient-2-name"
                                                    )}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient-2-description"
                                                    )}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient-3-name"
                                                    )}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient-3-description"
                                                    )}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient-4-name"
                                                    )}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient-4-description"
                                                    )}
                                                />
                                            </td>
                                        </tr>
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

export default New;
