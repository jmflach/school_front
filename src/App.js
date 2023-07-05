import RoutesApp from "./RoutesApp";
import Footer from "./components/layout/Footer";

import classes from "./App.module.css";

import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <div className={classes.body}>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </div>
  );
}

export default App;
