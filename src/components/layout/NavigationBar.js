import { Link } from "react-router-dom";

import classes from "./NavigationBar.module.css"

function NavigationBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Escola Criança Feliz</div>
      <nav>
        <ul>
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="students">Estudantes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
