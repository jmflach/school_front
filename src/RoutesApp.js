import { Routes, Route, Navigate } from "react-router-dom";

import { useContext } from "react";

import NavigationBar from "./components/layout/NavigationBar";
import Footer from "./components/layout/Footer";
import Students from "./pages/Students";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

import { Context } from "./context/authContext";

import classes from "./App.module.css";

function PrivatePage(props) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (authenticated) {
    return (
      <div className={classes.body}>
        <NavigationBar />
        {props.page}
        <Footer />
      </div>
    );
  } else {
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
