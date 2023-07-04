import { useForm } from "react-hook-form";
import { useContext } from "react";

import { Context } from "../context/authContext";

import { useNavigate } from "react-router-dom";

import Card from "../components/ui/Card";

import classes from "./Signup.module.css";

function Signup(props) {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { signupHandler } = useContext(Context);

  const handleRegistration = (data) => {
    console.log(data);
    signupHandler(data);
    // props.onSubmit(data);
  };

  function signinHandler()
  {
    navigate("/signin");
  }

  return (
    <Card>
      <div className={classes.container}>
        <h2>Cadastro</h2>
        <form
          className={classes.form}
          onSubmit={handleSubmit(handleRegistration)}
        >
          <div className={classes.control}>
            <label htmlFor="nome">Nome</label>
            <input type="text" required id="nome" {...register("name")} />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" required id="email" {...register("email")} />
          </div>
          <div className={classes.control}>
            <label htmlFor="senha">Senha</label>
            <input type="password" required id="senha" {...register("password")} />
          </div>
          <div className={classes.buttons}>
            <div className={classes.actions}>
              <button type="button" onClick={signinHandler}>Voltar</button>
            </div>
            <div className={classes.actions}>
              <button>Cadastrar</button>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
}

export default Signup;
