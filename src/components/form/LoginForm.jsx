import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useUser } from '../../contexts/UserProvider';
import "./LoginForm.css";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleError = (errors) => { console.log('handleError'); console.log(errors) };
  const user = useUser();

  const registerOptions = {
    email: { required: "Adresse email requise" },
    password: {
      required: "Mot de passe requis",
    }
  };

  return (
    <div className="loginContainer"><h2>Bienvenue !</h2>
    <form onSubmit={handleSubmit(user.login, handleError)} className="loginForm">
      <div className="input">
        <input
          type="email"
          name="email"
          {...register('email', registerOptions.email)} placeholder="Adresse email"/>
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div>
      <div className="input">
        <input
          type="password"
          name="password"
          {...register('password', registerOptions.password)} placeholder="Mot de passe"/>
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
      </div>
      <button className="loginBtn">Se connecter</button>
    </form>
    <div className="registerBox">
    <h4>Nouveau client ?</h4>
    <Link to="/register" className="registerLink"><button className="registerButton">S'enregistrer</button></Link>
    </div>
    </div>
  );
};
export default RegisterForm;
