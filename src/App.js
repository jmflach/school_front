import NavigationBar from "./components/layout/NavigationBar";
import Footer from "./components/layout/Footer";
import RoutesApp from "./RoutesApp";

import classes from "./App.module.css";

import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <div className={classes.body}>
      <AuthProvider>
        <NavigationBar />
        <RoutesApp />
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
