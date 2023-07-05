import { useForm } from "react-hook-form";

import { useContext } from "react";

import { Context } from "../context/authContext";

import { useNavigate } from "react-router-dom";

import Card from "../components/ui/Card";

import classes from "./Signin.module.css";

function Signin(props) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { signinHandler } = useContext(Context);

  const handleRegistration = (data) => {
    signinHandler(data);
  };

  function signUpHandler() {
    navigate("/signup");
  }

  return (
    <Card>
      <div className={classes.container}>
        <h2>Login</h2>
        <form
          className={classes.form}
          onSubmit={handleSubmit(handleRegistration)}
        >
          <div className={classes.control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" required id="email" {...register("email")} />
          </div>
          <div className={classes.control}>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              required
              id="senha"
              {...register("password")}
            />
          </div>
          <div className={classes.buttons}>
            <div className={classes.actions}>
              <button type="button" onClick={signUpHandler}>
                Cadastrar
              </button>
            </div>
            <div className={classes.actions}>
              <button>Entrar</button>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default Signin;
