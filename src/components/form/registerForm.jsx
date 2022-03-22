import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from '../../contexts/UserProvider';
import "./RegisterForm.css"

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setUser } = useUser();

  let navigate = useNavigate();
  
  const handleRegistration = async (data) => {
    try {
      axios
      .post(`${process.env.REACT_APP_URL_SERVER}/api/users`, data, { withCredentials: true, mode: 'cors' })
      .then(credentials => {
        setUser({token: credentials});
        navigate('/checkout');
      });
    } catch (error) {
      console.log(error);
    }
  }
  const handleError = (errors) => { console.log('handleError'); console.log(errors) };
  
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
        <input name="LastName" type="text" placeholder="Nom" {...register('LastName', registerOptions.name) }/>
        <small className="text-danger">
          {errors?.LastName && errors.LastName.message}
        </small>
      </div>
      <div>
        <input name="FirstName" type="text" placeholder="Prénom" {...register('FirstName', registerOptions.firstName) }/>
        <small className="text-danger">
          {errors?.FirstName && errors.FirstName.message}
        </small>
      </div>
      <div>
        <input name="PhoneNumber" type="text" placeholder="Numéro de téléphone" {...register('PhoneNumber', registerOptions.phone) }/>
        <small className="text-danger">
          {errors?.PhoneNumber && errors.PhoneNumber.message}
        </small>
      </div>
      <div>
        <input name="Address1" type="text" placeholder="Adresse" {...register('Address1', registerOptions.address) }/>
        <small className="text-danger">
          {errors?.Address1 && errors.Address1.message}
        </small>
      </div>
      <div>
        <input name="Address2" type="text" placeholder="Adresse" {...register('Address2', registerOptions.address) }/>
        <small className="text-danger">
          {errors?.Address2 && errors.Address2.message}
        </small>
      </div>
      <div>
        <input name="Address3" type="text" placeholder="Adresse" {...register('Address3', registerOptions.address) }/>
        <small className="text-danger">
          {errors?.Address3 && errors.Address3.message}
        </small>
      </div>
      <div>
        <input name="city" type="text" placeholder="Ville" {...register('city', registerOptions.city) }/>
        <small className="text-danger">
          {errors?.city && errors.city.message}
        </small>
      </div>
      <div>
        <input name="postCode" type="text" placeholder="Code Postal" {...register('postCode', registerOptions.postCode) }/>
        <small className="text-danger">
          {errors?.postCode && errors.postCode.message}
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