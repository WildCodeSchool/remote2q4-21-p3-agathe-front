import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
// import { useCookies } from "react-cookie";
import PropTypes from 'prop-types';

const UserContext = createContext(null);

const BASE_URL = process.env.REACT_APP_URL_SERVER;

const UserProvider = ({ children }) => {
  // const [cookie, setCookie, removeCookie] = useCookies(['']);
  const [user, setUser] = useState(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  );

  useEffect(() => {
    // console.log(`cookie: ${cookie}`)
    // console.table(cookie)
    // console.log(`cookie.user_token: ${cookie.user_token}`)

    // console.table(cookie)
    if (user) {
      // console.log('setUser localstorage')
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      axios
        .get(`${BASE_URL}/api/auth/logout`)
        .then(response => localStorage.removeItem('user'))
        .catch(error => {
          console.log('error logout')
          console.log(error)
        })
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUser = () => useContext(UserContext);

export default UserProvider;
