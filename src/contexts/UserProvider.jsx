import React, { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [data, setData] = useState(null)

     const set = (userData) => {
        setData(userData)
    }
    const getOptions = () => {
        if (data) return { withCredentials: true, mode: "cors" };
        else return {};
    };

    const contextValues = {
        data,
        set,
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
