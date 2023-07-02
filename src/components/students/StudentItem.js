import Card from "../ui/Card";

import classes from "./StudentItem.module.css";

function StudentItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.container}>
          <div className={classes.image}>
            <img src={props.student.foto} alt={props.student.nome} />
          </div>
          <div className={classes.content}>
            <h2 align="left">{props.student.nome + " " + props.student.sobrenome}</h2>
            <h3 align="left">{props.student.email}</h3>
          </div>
          <div className={classes.actions}>
            <button>Ver</button>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default StudentItem;
