import React from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.css";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => {}
  const handleError = (errors) => { };

  const registerOptions = {
    email: { required: "Email is required" },
    message: { required: "Message is required" }
  };

  return (
      <div className="ContactForm">
        <p>Ou</p>
         <form onSubmit={handleSubmit(handleRegistration, handleError)}>
          <div className="Form">
              <input type="text" name="lastname" placeholder="Nom" required
                {...register('last_name', registerOptions.last_name)}
              />
              <small className="text-danger">
                {errors?.last_name && errors.last_name.message}
              </small>
            </div>
            <div className="Form">
              <input type="text" name="firstname" placeholder="Prénom" required
                {...register('first_name', registerOptions.first_name)}
              />
              <small className="text-danger">
                {errors?.first_name && errors.email.first_name}
              </small>
            </div>
            <div className="Form">
              <input type="email" name="email" placeholder="Email" required
                {...register('email', registerOptions.email)}
              />
              <small className="text-danger">
                {errors?.email && errors.email.message}
              </small>
            </div>
            <div className="Form">
              <textarea name="name" type="text" placeholder="Message" {...register('name', registerOptions.name)} />
              <small className="text-danger">
                {errors?.name && errors.name.message}
              </small>
            </div>
          </form>
          <button class="sendingBtn">Envoyer</button>
        </div>
  );
};

export default ContactForm;
