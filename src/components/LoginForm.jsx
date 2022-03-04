import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  let navigate = useNavigate();
  const redirect = (url) => {
    navigate(url);
  };

  const handleRegistration = async (data) => {
    try {
      axios
        .post(`${process.env.REACT_APP_URL_SERVER}/api/auth/login`, { email: data.email, password: data.password },
         {withCredentials: true, mode: 'cors'})
        .then(res => {
          if (res.status === 200) {
            redirect("/#homepage");
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
  const handleError = (errors) => { console.log('handleError'); console.log(errors) };

  const registerOptions = {
    name: { required: "Name is required" },
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
    <form onSubmit={handleSubmit(handleRegistration, handleError)} className="LoginForm">
      <div>
        <input name="name" type="text" {...register('name', registerOptions.name)} required placeholder="Nom" />
        <small className="text-danger">
          {errors?.name && errors.name.message}
        </small>
      </div>
      <div>
        <input
          type="email"
          name="email"
          {...register('email', registerOptions.email)} placeholder="Votre email"
        />
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register('password', registerOptions.password)}
        />
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
      </div>
      <input type="submit" />
    </form>
  );
};
export default RegisterForm;