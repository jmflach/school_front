import { Link } from "react-router-dom";

import { useContext } from "react";

import classes from "./NavigationBar.module.css";

import { Context } from "../../context/authContext";

function NavigationBar() {
  const { logoutHandler } = useContext(Context);  

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Escola Criança Feliz</div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/students">Estudantes</Link>
          </li>
          <li>
            <div className={classes.actions}>
              <button onClick={logoutHandler}>Sair</button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
