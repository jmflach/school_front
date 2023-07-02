import { useForm } from "react-hook-form";

import classes from "./StudentForm.module.css";

function StudentForm(props) {
  const { register, reset, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log(data);

  if (props.editing) {
    console.log("editing");
    const defaultValues = {
      nome: "teste",
      sobrenome: "testão",
    };
    console.log(defaultValues);
    console.log(props.student);
    const st = props.student;
    reset((formValues) => st);
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(handleRegistration)}>
      <div className={classes.control}>
        <label htmlFor="nome">Nome</label>
        <input type="text" required id="nome" {...register("nome")} />
      </div>
      <div className={classes.control}>
        <label htmlFor="sobrenome">Sobrenome</label>
        <input type="text" required id="sobrenome" {...register("sobrenome")} />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">E-mail</label>
        <input type="email" required id="email" {...register("email")} />
      </div>
      <div className={classes.control}>
        <label htmlFor="telefone">Telefone</label>
        <input type="text" required id="telefone" {...register("telefone")} />
      </div>
      <div className={classes.control}>
        <label htmlFor="endereço">Endereço</label>
        <input type="text" required id="endereço" {...register("endereço")} />
      </div>
      <div className={classes.control}>
        <label htmlFor="nascimento">Data de Nascimento</label>
        <input
          type="date"
          required
          id="nascimento"
          {...register("nascimento")}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="foto">Foto</label>
        <input type="url" required id="foto" {...register("foto")} />
      </div>
      <div className={classes.actions}>
        <button>Adicionar</button>
      </div>
    </form>
  );
}

export default StudentForm;
