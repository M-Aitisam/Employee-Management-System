import React, { createContext } from 'react';

// Context creation to pass data to all components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={"Aitisam"}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
