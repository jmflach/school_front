import { Card } from "reactstrap";

import StudentForm from "./StudentForm";

import classes from "./AddNewStudent.module.css";

function AddNewStudent(props) {
  function addStudentHandler(student) {
    console.log(student);
    console.log("sentind post");
    fetch("http://localhost:8080/students/add", {
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        "Content-Type": "application/json",
      },
    });
    props.onCancel();
  }

  return (
    <div className={classes.container}>
      <Card>
        <h1>Adicionar novo estudante</h1>
        <StudentForm {...props} onSubmit={addStudentHandler} />
      </Card>
    </div>
  );
}

export default AddNewStudent;
