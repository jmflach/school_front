import { Card } from "reactstrap";

import StudentForm from "./StudentForm";

import classes from "./AddNewStudent.module.css";

function AddNewStudent(props) {

  async function addStudentHandler(student) {
    console.log(student);
    const token = localStorage.getItem('token');
    console.log("sending post");
    await fetch("http://localhost:8080/students/add", {
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token,
      },
    }).catch((error) => {
      console.log(error)
    });
    props.onCancel();
    props.reload();
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
