// frontend/src/utils/RequireAuth.js
import React from "react";
import axios from "axios";
// import { connect } from "react-redux";
// import { push } from "connected-react-router";
// import PropTypes from "prop-types";

const BASE_URL = process.env.REACT_APP_URL_SERVER;

export default function RequireAuth(Component) {
    const [isAdmin, setIsAdmin] = React.useState(false);

    React.useEffect(() => {
        axios
            .get(`${BASE_URL}/api/auth/admin`, { withCredentials: true })
            .then((response) => {
                setIsAdmin(response.status === 202); // admin user
            })
            .catch((err) => console.log(err));
    });

    return (
    <>
    {isAdmin && isAdmin === true ? <Component /> : null}
    </>
    );
}