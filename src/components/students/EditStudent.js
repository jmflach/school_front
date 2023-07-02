import { Card } from "reactstrap";

import StudentForm from "./StudentForm";

import classes from "./EditStudent.module.css";


function EditStudent(props) {
  return (
    <div className={classes.container}>
      <Card>
        <h1>Editar estudante</h1>
        <StudentForm editing='true' student={props.student}/>
      </Card>
    </div>
  );
}

export default EditStudent;