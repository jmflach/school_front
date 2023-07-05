import React, { createContext } from "react";

import useAuth from "./hooks/useAuth";

const Context = createContext();

function AuthProvider(props) {
  const {
    loading,
    authenticated,
    signinHandler,
    signupHandler,
    logoutHandler,
  } = useAuth();

  return (
    <Context.Provider
      value={{
        loading,
        authenticated,
        signinHandler,
        signupHandler,
        logoutHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
