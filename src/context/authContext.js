import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { authenticate, signup } from "../api/api";

const Context = createContext();

function AuthProvider(props) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function signinHandler(authData) {
    const data = await authenticate(authData);

    if (data.message === "User authenticated successfully") {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.access_token);
      setAuthenticated(true);
      navigate("/home");
    } else {
      alert("Email ou senha incorretos.");
    }
  }

  async function signupHandler(authData) {
    const data = await signup(authData);

    if (data.message === "User authenticated successfully") {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.access_token);
      setAuthenticated(true);
      alert("Cadastrado com sucesso. Por favor, faça o login.");
      navigate("/signin");
    } else {
      alert("Informações incorretas. Erro: " + JSON.stringify(data));
    }
  }

  function logoutHandler() {
    setAuthenticated(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/signin");
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Context.Provider
      value={{ authenticated, signinHandler, signupHandler, logoutHandler }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
