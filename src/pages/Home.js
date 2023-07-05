import logo from "../img/home.jpg";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.image}>
      <img src={logo} alt="home" />
    </div>
  );
}

export default Home;
