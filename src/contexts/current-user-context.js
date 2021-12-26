import React, { createContext, useContext, useState } from 'react';

export const CredentialsContext = createContext(null);

export const useCredentialsContext = () => {
  return useContext(CredentialsContext);
}

export const CredentialsContextProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <CredentialsContext.Provider value={{
      username,
      password,
      setUsername,
      setPassword
    }}>
      {children}
    </CredentialsContext.Provider>
  )
}

