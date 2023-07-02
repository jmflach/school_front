import { useRef } from "react";

import classes from "./StudentForm.module.css";

function StudentForm() {
  const nomeInputRef = useRef();
  const sobrenomeInputRef = useRef();
  const emailInputRef = useRef();
  const telefoneInputRef = useRef();
  const endInputRef = useRef();
  const nascInputRef = useRef();
  const fotoInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredNome = nomeInputRef.current.value;
    const enteredSobrenome = sobrenomeInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredTelefone = telefoneInputRef.current.value;
    const enteredEnd = endInputRef.current.value;
    const enteredNasc = nascInputRef.current.value;
    const enteredFoto = fotoInputRef.current.value;


    const studentData ={
        nome: enteredNome,
        sobrenome: enteredSobrenome,
        email: enteredEmail,
        telefone: enteredTelefone,
        endereço: enteredEnd,
        nascimento: enteredNasc,
        foto: enteredFoto
    };

    console.log(studentData);

  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="nome">Nome</label>
        <input type="text" required id="nome" ref={nomeInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor="sobrenome">Sobrenome</label>
        <input type="text" required id="sobrenome" ref={sobrenomeInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">E-mail</label>
        <input type="email" required id="email" ref={emailInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="telefone">Telefone</label>
        <input type="text" required id="telefone" ref={telefoneInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="endereço">Endereço</label>
        <input type="text" required id="endereço" ref={endInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="nascimento">Data de Nascimento</label>
        <input type="date" required id="nascimento" ref={nascInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="foto">Foto</label>
        <input type="url" required id="foto" ref={fotoInputRef} />
      </div>
      <div className={classes.actions}>
        <button>Adicionar</button>
      </div>
    </form>
  );
}

export default StudentForm;
