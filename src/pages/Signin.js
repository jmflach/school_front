import React, { useContext } from "react";

import { Context } from "../context/authContext";

// import classes from "./Signin.module.css";

function Signin() {

  const { authenticated, signinHandler } = useContext(Context);

  console.log(authenticated);

  return <div>
    <button onClick={signinHandler}>Entrar</button>
  </div>;
}

export default Signin;
