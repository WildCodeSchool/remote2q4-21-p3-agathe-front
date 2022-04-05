import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from '../../contexts/UserProvider';
import "./LoginForm.css";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { setUser } = useUser();

  let navigate = useNavigate();
  const redirect = (url) => {
    navigate(url);
  };

  const handleRegistration = async ({email, password}) => {
    try {
      axios
        .post(`${process.env.REACT_APP_URL_SERVER}/api/auth/login`, { email, password },
          { withCredentials: true, mode: 'cors' })
        .then(credentials => {
          setUser({token: credentials});
          redirect(-1);
        });
    } catch (error) {
      console.log(`error when login :${error}`);
    }
  }
  const handleError = (errors) => { console.log('handleError'); console.log(errors) };

  const registerOptions = {
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      // minLength: {
      //   value: 8,
      //   message: "Password must have at least 8 characters"
      // }
    }
  };

  return (
    <div className="loginContainer"><h2>Bienvenue ! Identifiez-vous</h2>
    <form onSubmit={handleSubmit(handleRegistration, handleError)} className="loginForm">
      <div>
        <input
          type="email"
          name="email"
          {...register('email', registerOptions.email)} placeholder="Votre email"/>
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div>
      <div>
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
    <Link to="/register"><button className="registerBtn">S'enregistrer</button></Link>
    </div>
    </div>
  );
};
export default RegisterForm;
