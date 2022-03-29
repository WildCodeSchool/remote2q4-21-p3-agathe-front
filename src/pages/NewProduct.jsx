import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Sidebar from "../components/admin/Sidebar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./New.css";

const New = ({ title }) => {
    const { register, handleSubmit, setValue } = useForm();
    const [file, setFile] = useState("");

    const onSubmit = async (data) => {
        try {
            console.log(data);
            axios
                .post(`${process.env.REACT_APP_URL_SERVER}/api/products`, data)
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
                            <label htmlFor="file">
                                Image:{" "}
                                <DriveFolderUploadOutlinedIcon className="newIcon" />
                            </label>
                            <div className=".newFormInput">
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>
                        </div>
                        <div className="newRight">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* {inputs.map((input) => (
                                    <div className="formInput" key={input.id}>
                                        <label>{input.label}</label>
                                        <input
                                            type={input.type}
                                            placeholder={input.placeholder}
                                        />
                                    </div>
                                ))} */}

                                <input
                                    type="text"
                                    {...register("SKU")}
                                    placeholder="Code du produit"
                                    maxlength="13"
                                />
                                <input
                                    type="text"
                                    {...register("Name")}
                                    placeholder="Désignation du produit"
                                    maxlength="200"
                                />
                                <input
                                    type="number"
                                    {...register("Price")}
                                    placeholder="Prix du produit"
                                    maxLength="5"
                                />
                                <textarea
                                    {...register("Characteristic")}
                                    cols="30"
                                    rows="10"
                                    placeholder="caractéristiques"
                                ></textarea>
                                <textarea
                                    {...register("Description")}
                                    cols="30"
                                    rows="10"
                                    placeholder="description"
                                ></textarea>
                                <textarea
                                    {...register("Ingredients_details")}
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
                                                        "ingredient1_name"
                                                    )}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient1-description"
                                                    )}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient2_name"
                                                    )}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient2-description"
                                                    )}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient3_name"
                                                    )}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient3-description"
                                                    )}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient4_name"
                                                    )}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient4-description"
                                                    )}
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient5_name"
                                                    )}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(
                                                        "ingredient5-description"
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
