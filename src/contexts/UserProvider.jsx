import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const UserContext = createContext(null);

const BASE_URL = process.env.REACT_APP_URL_SERVER;

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(
        localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : null
    );
    const [infos, setInfos] = useState({})

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            axios
            .get(`${BASE_URL}/api/users/who_am_i`, getOptions())
            .then(response => setInfos(response.data))
            .catch(error => console.log(`call to who_am_i: ${error}`));
        } else {
            axios
                .get(`${BASE_URL}/api/auth/logout`)
                .then(response => localStorage.removeItem("user"))
                .catch(error => {
                    console.log("error logout");
                    console.log(error);
                });
        }
    }, [user]);

    const getOptions = () => {
        if (user) return { withCredentials: true, mode: "cors" };
        else return {};
    };

    const contextValues = {
        user,
        infos,
        setUser,
        getOptions,
    };

    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
