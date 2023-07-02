import StudentItem from "./StudentItem";
import classes from "./StudentList.module.css";

function StudentList(props) {
  return <ul className={classes.list}>
    {props.students.map(student => <StudentItem key={student.id} student={student}/>)}
  </ul>;
}

export default StudentList;
