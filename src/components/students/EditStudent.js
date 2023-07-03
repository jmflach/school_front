import { Card } from "reactstrap";

import StudentForm from "./StudentForm";

import classes from "./EditStudent.module.css";


function EditStudent(props) {
  function editStudentHandler(student) {
    console.log(student);
    console.log("sentind post");
    console.log("http://localhost:8080/student/update/" + student["id"]);
    fetch("http://localhost:8080/student/update/" + student["id"], {
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
        <h1>Editar estudante</h1>
        <StudentForm editing='true' student={props.student} onSubmit={editStudentHandler} {...props}/>
      </Card>
    </div>
  );
}

export default EditStudent;