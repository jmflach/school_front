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

  const [reloadList, setReloadList] = useState(false);

  function reloadHandler() {
    setReloadList(!reloadList);
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedStudents, setLoadedStudents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/students", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedStudents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [reloadList]);

  if (isLoading) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className={classes.container}>
          <h1>Lista de Estudantes</h1>
          <div className={classes.actions}>
            <button onClick={showAddNewStudentHandler}>Adicionar Novo</button>
          </div>
        </div>
        <StudentList students={loadedStudents} reload={reloadHandler} />
        {showAddNewStudent ? (
          <AddNewStudent
            onCancel={closeAddNewStudentHandler}
            reload={reloadHandler}
          />
        ) : null}
        {showAddNewStudent ? (
          <Backdrop onClick={closeAddNewStudentHandler} />
        ) : null}
      </Layout>
    );
  }
}

export default Students;
