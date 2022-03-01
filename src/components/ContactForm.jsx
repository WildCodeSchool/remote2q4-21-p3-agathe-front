import React from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.css";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => { };

  const registerOptions = {
    email: { required: "Email is required" },
    message: { required: "Message is required" }
  };

  return (
    <div className="ContactForm">
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div className="Form">
          <input type="email" name="email" placeholder="Votre email" required
            {...register('email', registerOptions.email)}
          />
          <small className="text-danger">
            {errors?.email && errors.email.message}
          </small>
        </div>
        <div>
          <textarea name="name" type="text" placeholder="Votre message" {...register('name', registerOptions.name)} />
          <small className="text-danger">
            {errors?.name && errors.name.message}
          </small>
        </div>
        <button>Envoyer le message</button>
      </form>
    </div>
  );
};

export default ContactForm;
