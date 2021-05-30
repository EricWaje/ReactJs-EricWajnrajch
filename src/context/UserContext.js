import React, { useState, useEffect } from 'react';
import { getFirebase } from '../firebase';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const fire = getFirebase();

  useEffect(() => {
    fire.auth().onAuthStateChanged((currentUser) => {
      setCurrentUser(currentUser);
    });

    console.log(currentUser);
    // eslint-disable-next-line
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

//export default UserProvider;
