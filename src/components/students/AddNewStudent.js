import { Card } from "reactstrap";

import StudentForm from "./StudentForm";

import classes from "./AddNewStudent.module.css";

function AddNewStudent(props) {
  return (
    <div className={classes.container}>
      <Card>
        <h1>Adicionar novo estudante</h1>
        <StudentForm {...props} />
      </Card>
    </div>
  );
}

export default AddNewStudent;
