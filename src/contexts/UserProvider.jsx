import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext(null);
const BASE_URL = process.env.REACT_APP_URL_SERVER;

const UserProvider = ({ children }) => {
    const [data, setData] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)
    const [localUser, setLocalUser] = useLocalStorage('user', null)
    const navigate = useNavigate()
    
    React.useEffect(()=>{
        axios
            .get(`${BASE_URL}/api/users/${localUser}`, { withCredentials: true, mode: "cors" })
            .then((response) => set(response.data))
            .catch(err => set(null))
    },[])

    const login = async ({email, password}) => {
        try {
            let url = `${process.env.REACT_APP_URL_SERVER}/api/auth/login`
            let result = await axios.post(url, { email, password }, { withCredentials: true, mode: 'cors' })
            set(result.data)
            navigate(-1)
        } catch (error) {
          console.log(`Error during login :${error}`);
        }
    }

    const logout = async () => {
        try {
            let url = `${process.env.REACT_APP_URL_SERVER}/api/auth/logout`
            await axios.get(url, null, { withCredentials: true, mode: 'cors' })
        } catch (error) {
            console.log(`Error during logout :${error}`);
        } finally {
            set(null)
            navigate('/')
        }
    }
    
    const set = (userData) => {
        setData(userData)
        if (!userData) {
            setIsAdmin(false)
            setLocalUser(null)
        } else {
            setIsAdmin(userData.is_admin)
            setLocalUser(userData.id)
        }
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
