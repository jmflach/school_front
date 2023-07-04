import { useForm } from "react-hook-form";

import Card from "../components/ui/Card";

import classes from "./Signin.module.css";

function Signin(props) {
  const { register, reset, handleSubmit } = useForm();
  const handleRegistration = (data) => {
    console.log(data);
    // props.onSubmit(data);
  };

  if (props.editing) {
    reset((formValues) => props.student);
  }

  return (
    <Card>
      <div className={classes.container}>
      <h2>Login</h2>
      <form className={classes.form} onSubmit={handleSubmit(handleRegistration)}>
      <div className={classes.control}>
        <label htmlFor="email">E-mail</label>
        <input type="email" required id="email" {...register("email")} />
      </div>
      <div className={classes.control}>
        <label htmlFor="senha">Senha</label>
        <input type="password" required id="senha" {...register("senha")} />
      </div>
      <div className={classes.buttons}>
        <div className={classes.actions}>
          <button>Enviar</button>
        </div>
      </div>
    </form>
      </div>
    </Card>
  );
}

export default Signin;
