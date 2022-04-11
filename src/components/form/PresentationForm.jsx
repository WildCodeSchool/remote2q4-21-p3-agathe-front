import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Modal from "../modal/modal";
import useModal from "../modal/useModal";
import "./PresentationForm.css";

const PresentationForm = () => {
    const { register, handleSubmit, setValue } = useForm();
    const [update, setUpdate] = useState("");
    const {
        isShowing: isModalShowed,
        toggle: toggleModal,
        className: ModalClass,
    } = useModal(true);

    const onSubmit = async (data) => {
        try {
            axios
                .put(
                    `${process.env.REACT_APP_URL_SERVER}/api/presentation`,
                    data
                )
                .then((res) => {
                    if (res.status === 200) {
                        // setUpdate("Mise à jour effectuée");
                        //   redirect("/#homepage");
                        toggleModal();
                    }
                });
        } catch (error) {}
    };

    useEffect(() => {
        console.log("read presentation data...");
        axios
            .get(`${process.env.REACT_APP_URL_SERVER}/api/presentation`)
            .then((response) => {
                setValue("presentation", response.data.presentation);
            });
    }, []);

    return (
        <div className="presentationForm">
            <h1>Modification du texte de présentation</h1>
            <form
                className="presentationForm"
                onSubmit={handleSubmit(onSubmit)}
            >
                <textarea
                    id="presentation"
                    cols="30"
                    rows="10"
                    {...register("presentation")}
                ></textarea>
                <input type="submit" value="Valider" />
            </form>
            <p>{update}</p>
            <Modal
                className={ModalClass}
                isShowing={isModalShowed}
                hide={toggleModal}
                title=""
            >
                <p>Données mises à jour !</p>
            </Modal>
        </div>
    );
};

export default PresentationForm;
