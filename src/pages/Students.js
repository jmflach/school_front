import { useState, useEffect } from "react";

import Layout from "../components/layout/Layout";
import StudentList from "../components/students/StudentList";
import AddNewStudent from "../components/students/AddNewStudent";
import Backdrop from "../components/ui/Backdrop";

import classes from "./Students.module.css";


function Students() {
  const [showAddNewStudent, setShowAddNewStudent] = useState(false);

  function showAddNewStudentHandler() {
    setShowAddNewStudent(true);
  }

  function closeAddNewStudentHandler() {
    setShowAddNewStudent(false);
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedStudents, setLoadedStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedStudents(data);
        console.log("loaded");
        console.log(data);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Layout>
        <div className={classes.container}>
          <h1>Lista de Estudantes</h1>
          <div className={classes.actions}>
            <button onClick={showAddNewStudentHandler}>Adicionar Novo</button>
          </div>
        </div>
        <StudentList students={loadedStudents} />
        {showAddNewStudent ? (
          <AddNewStudent onCancel={closeAddNewStudentHandler} />
        ) : null}
        {showAddNewStudent ? (
          <Backdrop onClick={closeAddNewStudentHandler} />
        ) : null}
      </Layout>
    );
  }
}

export default Students;
