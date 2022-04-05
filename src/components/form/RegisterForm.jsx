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
        if (!user.data) {
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
        }else{
            console.log('update user')
            console.log(data)
            axios
            .put(`${process.env.REACT_APP_URL_SERVER}/api/users`, data, {
                withCredentials: true,
                mode: "cors",
            })
            .then(credentials => {
                console.log(credentials)
                user.set(credentials.data);
                navigate("/");
            })
            .catch(error => console.log(error));
        }
    };
    const handleError = (errors) => {
        console.log(errors);
    };

    const registerOptions = {
        first_name: { required: "Votre prénom est requis" },
        last_name: { required: "Votre nom est requis" },
        email: { required: "Votre adresse email est requise" },
        phone_number: { required: "Votre numéro de téléphone est requis" },
        address_1: { required: "Votre adresse est requise" },
        post_code: { required: "Votre code postal est requis" },
        city: { required: "Votre ville est requis" },
        password: {
            required: "Votre mot de passe est requis",
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
                className="registerForm"
            >
                <div>
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
                {!user.data && 
                <div>
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
}
                <div>
                    <div>
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
                    <div>
                        <input
                            name="last_name"
                            type="text"
                            placeholder="Nom"
                            {...register(
                                "last_name",
                                registerOptions.last_name
                            )}
                        />
                        <small className="text-danger">
                            {errors?.last_name && errors.last_name.message}
                        </small>
                    </div>
                    <div>
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
                    <div className="address">
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
                    <div>
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
                    <div>
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
