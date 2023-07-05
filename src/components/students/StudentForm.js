import { useForm } from "react-hook-form";

import classes from "./StudentForm.module.css";

function StudentForm(props) {
  const { register, reset, handleSubmit } = useForm();
  const handleRegistration = (data) => {
    console.log(data);

    // foto_real is an array of files. This line gets only the first file.
    data['foto_real'] = data['foto_real'][0];

    console.log(data);

    props.onSubmit(data);
  };

  if (props.editing) {
    reset((formValues) => props.student);
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(handleRegistration)}>
      <div className={classes.control}>
        <label htmlFor="nome">Nome *</label>
        <input type="text" required id="nome" {...register("nome")} />
      </div>
      <div className={classes.control}>
        <label htmlFor="sobrenome">Sobrenome *</label>
        <input type="text" required id="sobrenome" {...register("sobrenome")} />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">E-mail *</label>
        <input type="email" required id="email" {...register("email")} />
      </div>
      <div className={classes.control}>
        <label htmlFor="telefone">Telefone *</label>
        <input type="text" required id="telefone" {...register("telefone")} />
      </div>
      <div className={classes.control}>
        <label htmlFor="endereço">Endereço *</label>
        <input type="text" required id="endereço" {...register("endereço")} />
      </div>
      <div className={classes.control}>
        <label htmlFor="nascimento">Data de Nascimento *</label>
        <input
          type="date"
          required
          id="nascimento"
          {...register("nascimento")}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="foto">Foto *</label>
        <input type="url" required id="foto" {...register("foto")} />
      </div>
      <div className={classes.control}>
        <label htmlFor="foto_real">Foto2 *</label>
        <input type="file" required id="foto_real" {...register("foto_real")} />
      </div>
      <div className={classes.buttons}>
        <div className={classes.actions}>
          <button className="btn" type="button" onClick={props.onCancel}>
            Cancelar
          </button>
        </div>
        <div className={classes.actions}>
          <button>Enviar</button>
        </div>
      </div>
    </form>
  );
}

export default StudentForm;
