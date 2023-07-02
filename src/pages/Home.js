import logo from "../img/home.jpg";
import classes from "./Home.module.css";

function Home() {
  //   const imagestyle = {
  //     width: "100vw",
  //   };

  return (
    <div className={classes.image}>
      <img src={logo} alt="home" />
    </div>
  );
}

export default Home;
