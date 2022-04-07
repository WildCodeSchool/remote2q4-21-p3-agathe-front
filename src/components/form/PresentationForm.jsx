import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./PresentationForm.css"

const PresentationForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [update, setUpdate] = useState("");

  const onSubmit = async (data) => {
    try {
      console.log(data);
      axios
        .put(`${process.env.REACT_APP_URL_SERVER}/api/presentation`, data)
        .then((res) => {
          if (res.status === 200) {
            setUpdate("Mise à jour effectuée");
            console.log({ update });
            //   redirect("/#homepage");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_SERVER}/api/presentation`)
      .then((response) => setValue("presentation", response.data.presentation));
  });

  return (
    <div className="presentationForm">
      <h1>Modification du texte de présentation</h1>
      <form classeName="presentationForm" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          id="presentation"
          cols="30"
          rows="10"
          {...register("presentation")}
        ></textarea>
        <input type="submit" value="Valider"/>
      </form>
      <p>{update}</p>
    </div>
  );
};

export default PresentationForm;
