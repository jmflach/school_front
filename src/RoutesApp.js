import { Routes, Route, Navigate } from "react-router-dom";

import { useContext } from "react";

import Students from "./pages/Students";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import { Context } from "./context/authContext";

function PrivatePage(props){
  const { authenticated } = useContext(Context);
  console.log("Routing");

  if (authenticated){
    return props.page;
  }
  else {
    return <Navigate to="/signin" replace />;
  }
}

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<PrivatePage page={<Home />} />} />
      <Route path="/students" element={<PrivatePage page={<Students />} />} />
    </Routes>
  );
}

export default RoutesApp;
