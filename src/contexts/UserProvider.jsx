import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [data, setData] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const navigate = useNavigate()
    // React.useEffect(() => {
    //     if (!user.data) {
    //           setAdmin(false);
    //       } else {
    //           axios
    //               .get(`${BASE_URL}/api/auth/admin`, { withCredentials: true })
    //               .then(response => {
    //                   setAdmin(response.status === 202); // admin user
    //               })
    //               .catch(err => err.response.status!==403 ? console.log(err):null);
    //       }
    //   }, [user.data]);
  
    const login = async ({email, password}) => {
        try {
            let url = `${process.env.REACT_APP_URL_SERVER}/api/auth/login`
            let result = await axios.post(url, { email, password }, { withCredentials: true, mode: 'cors' })
            setData(result.data)
            setIsAdmin(result.data.is_admin)
            navigate(-1)
        } catch (error) {
          console.log(`Error during login :${error}`);
        }
    }

    const logout = async () => {
        try {
            let url = `${process.env.REACT_APP_URL_SERVER}/api/auth/logout`
            await axios.get(url, null, { withCredentials: true, mode: 'cors' })
            setData(null)
            setIsAdmin(false)
            navigate('/')
        } catch (error) {
          console.log(`Error during logout :${error}`);
        }
    }

    const set = (userData) => {
        setData(userData)
    }

    const getOptions = () => {
        if (data) return { withCredentials: true, mode: "cors" };
        else return {};
    };

    const contextValues = {
        data,
        isAdmin,
        login,
        logout,
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
