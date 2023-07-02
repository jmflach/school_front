import Card from "../ui/Card";

import classes from "./FullStudentItem.module.css";

function FullStudentItem(props) {
  return (
    <Card>
      <div className={classes.container}>
        <div className={classes.grid}>
          <div className={classes.image}>
            <img src={props.student.foto} alt={props.student.nome} />
          </div>
          <div className={classes.content}>
            <h2 align="left">
              {props.student.nome + " " + props.student.sobrenome}
            </h2>
            <h3 align="left">E-mail: {props.student.email}</h3>
            <h3 align="left">Telefone: {props.student.telefone}</h3>
            <h3 align="left">Endereço: {props.student.endereço}</h3>
            <h3 align="left">Data de Nascimento: {props.student.nascimento}</h3>
          </div>
          <button className={classes.close} onClick={props.onClose}>+</button>
        </div>
        <div className={classes.gridbutton}>
          <div className={classes.actions}>
            <button className="btn" onClick={props.onClose}>
              Excluir
            </button>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={props.editStudent}>
              Editar
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default FullStudentItem;
