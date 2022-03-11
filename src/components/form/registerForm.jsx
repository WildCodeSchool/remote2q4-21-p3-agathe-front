import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./RegisterForm.css"

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

  const registerOptions = {
    firstName: { required: "Votre Prénom est requis" },
    email: { required: "Votre adresse email est requise" },
    password: {
      required: "Votre mot de passe est requis",
      minLength: {
        value: 8,
        message: "Votre mot de passe doit être composé d'au moins 8 caractères"
      }
    }
  };

  return (
    <div className="registerContainer"><h2>Création de compte</h2>
    <form onSubmit={handleSubmit(handleRegistration, handleError)} className="registerForm">
      <div>
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          {...register('email', registerOptions.email)}/>
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          {...register('password', registerOptions.password)}/>
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
      </div>
      <div>
      <div>
        <input name="Name" type="text" placeholder="Nom" {...register('Name', registerOptions.name) }/>
        <small className="text-danger">
          {errors?.name && errors.name.message}
        </small>
      </div>
      <div>
        <input name="FirstName" type="text" placeholder="Prénom" {...register('FirstName', registerOptions.firstName) }/>
        <small className="text-danger">
          {errors?.firstName && errors.name.message}
        </small>
      </div>
      <div>
        <input name="Phone" type="text" placeholder="Numéro de téléphone" {...register('Phone', registerOptions.phone) }/>
        <small className="text-danger">
          {errors?.phone && errors.name.message}
        </small>
      </div>
      <div>
        <input name="Address" type="text" placeholder="Adresse" {...register('Address', registerOptions.address) }/>
        <small className="text-danger">
          {errors?.address && errors.name.message}
        </small>
      </div>
      <div>
        <input name="City" type="text" placeholder="Ville" {...register('City', registerOptions.city) }/>
        <small className="text-danger">
          {errors?.city && errors.name.message}
        </small>
      </div>
      <div>
        <input name="PostCode" type="text" placeholder="Code Postal" {...register('PostCode', registerOptions.postCode) }/>
        <small className="text-danger">
          {errors?.postCode && errors.name.message}
        </small>
      </div>
      </div>
      <button className="registerBtn">Créer votre compte</button>
    </form>
    <div className="loginBox">
    <h4>Déjà client ?</h4>
    <Link to="/login"><button className="loginBtn">Se connecter</button></Link>
    </div>
    </div>
  );
};
export default RegisterForm;