import { useState } from "react";

import Card from "../ui/Card";
import FullStudentItem from "./FullStudentItem";
import Backdrop from "../ui/Backdrop";

import classes from "./StudentItem.module.css";

function StudentItem(props) {
  
  const [showFullStudent, setShowFullStudent] = useState(false);
  
  function showStudentHandler() {
    setShowFullStudent(true);
  }

  function closeShowStudentHandler() {
    setShowFullStudent(false);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.container}>
          <div className={classes.image}>
            <img src={props.student.foto} alt={props.student.nome} />
          </div>
          <div className={classes.content}>
            <h2 align="left">
              {props.student.nome + " " + props.student.sobrenome}
            </h2>
            <h3 align="left">{props.student.email}</h3>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={showStudentHandler}>
              Ver
            </button>
          </div>
        </div>
      </Card>
      
      {showFullStudent? <FullStudentItem student={props.student} onClose={closeShowStudentHandler}/> : null}
      {showFullStudent? <Backdrop onClick={closeShowStudentHandler}/> : null}

    </li>
  );
}

export default StudentItem;
