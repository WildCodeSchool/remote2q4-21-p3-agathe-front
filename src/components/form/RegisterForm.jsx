import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserProvider";
import "./RegisterForm.css";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const user = useUser();
    let navigate = useNavigate();

    React.useEffect(() => {
        if (user.data) reset(user.data);
    }, []);

    const handleRegistration = async (data) => {
        axios
            .post(`${process.env.REACT_APP_URL_SERVER}/api/users`, data, {
                withCredentials: true,
                mode: "cors",
            })
            .then(credentials => {
                console.log(credentials)
                user.set(credentials.data);
                navigate("/checkout");
            })
            .catch(error => console.log(error));
    };
    const handleError = (errors) => {
        console.log("handleError");
        console.log(errors);
    };

    const registerOptions = {
        first_name: { required: "Prénom requis" },
        last_name: { required: "Nom requis" },
        email: { required: "Adresse email requise" },
        phone_number: { required: "Numéro de téléphone requis" },
        address_1: { required: "Adresse requise" },
        post_code: { required: "Code postal requis" },
        city: { required: "Ville requise" },
        password: {
            required: "Mot de passe requis",
            minLength: {
                value: 8,
                message:
                    "Votre mot de passe doit être composé d'au moins 8 caractères",
            },
        },
    };

    return (
        <div className="registerContainer">
            <h2>{user.data ? "Modifier votre compte" : "Création de compte"}</h2>
            <form
                onSubmit={handleSubmit(handleRegistration, handleError)}
                className="registerForm">
                <span>Information de connexion</span>
                <div className="connexion">
                    <div className="regInput">
                        <input
                            type="email"
                            name="email"
                            placeholder="Votre email"
                            {...register("email", registerOptions.email)}
                        />
                        <small className="text-danger">
                            {errors?.email && errors.email.message}
                        </small>
                    </div>
                    <div className="regInput">
                        <input
                            type="password"
                            name="password"
                            placeholder="Mot de passe"
                            {...register("password", registerOptions.password)}
                        />
                        <small className="text-danger">
                            {errors?.password && errors.password.message}
                        </small>
                    </div>
                </div>
                <span>Information personnelle</span>
                <div className="info">
                    <div className="regInput">
                        <input
                            name="last_name"
                            type="text"
                            placeholder="Nom"
                            {...register("last_name", registerOptions.last_name)}
                        />
                        <small className="text-danger">
                            {errors?.last_name && errors.last_name.message}
                        </small>
                    </div>
                    <div className="regInput">
                        <input
                            name="first_name"
                            type="text"
                            placeholder="Prénom"
                            {...register(
                                "first_name",
                                registerOptions.first_name
                            )}
                        />
                        <small className="text-danger">
                            {errors?.first_name && errors.first_name.message}
                        </small>
                    </div>
                    <div className="regInput">
                        <input
                            name="phone_number"
                            type="text"
                            placeholder="Numéro de téléphone"
                            {...register(
                                "phone_number",
                                registerOptions.phone_number
                            )}
                        />
                        <small className="text-danger">
                            {errors?.phone_number &&
                                errors.phone_number.message}
                        </small>
                    </div>
                </div>
                <span>Adresse postale</span>
                <div className="postAddress">
                    <div className="regInput">
                        <input
                            name="address_1"
                            type="text"
                            placeholder="Adresse"
                            {...register(
                                "address_1",
                                registerOptions.address_1
                            )}
                        />
                        <small className="text-danger">
                            {errors?.address_1 && errors.address_1.message}
                        </small>
                        <input
                            name="address_2"
                            type="text"
                            placeholder="Adresse"
                            {...register("address_2")}
                        />
                        <input
                            name="address_3"
                            type="text"
                            placeholder="Adresse"
                            {...register("address_3")}
                        />
                    </div>
                    <div className="regInput">
                        <input
                            name="post_code"
                            type="text"
                            placeholder="Code Postal"
                            {...register(
                                "post_code",
                                registerOptions.post_code
                            )}
                        />
                        <small className="text-danger">
                            {errors?.post_code && errors.post_code.message}
                        </small>
                    </div>
                    <div className="regInput">
                        <input
                            name="city"
                            type="text"
                            placeholder="Ville"
                            {...register("city", registerOptions.city)}
                        />
                        <small className="text-danger">
                            {errors?.city && errors.city.message}
                        </small>
                    </div>
                </div>
                <button className="registerBtn">
                    {user.data ? "Valider" : "Créer votre compte"}
                </button>
            </form>
            {!user.data && (
                <div className="loginBox">
                    <h4>Déjà client ?</h4>
                    <Link to="/login">
                        <button className="loginBtn">Se connecter</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default RegisterForm;
