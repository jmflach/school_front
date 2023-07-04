import { Routes, Route } from "react-router-dom";

import Students from "./pages/Students";
import Home from "./pages/Home";
import NavigationBar from "./components/layout/NavigationBar";
import Footer from "./components/layout/Footer";

import classes from "./App.module.css";

function App() {
  return (
    <body className={classes.body}>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
      </Routes>

      <Footer />
    </body>
  );
}

export default App;
