import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import authenticate from "../api/api";

const Context = createContext();

function AuthProvider(props) {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  async function signinHandler() {
    

    console.log("signing in");

    const data = await authenticate();

    console.log(data);

    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', JSON.stringify(data.token));

    console.log("going to home")
    
    setAuthenticated(true);
    navigate("/home");
  }

  return (
    <Context.Provider value={{ authenticated, signinHandler }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
