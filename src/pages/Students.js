import { useState } from "react";

import Layout from "../components/layout/Layout";
import StudentList from "../components/students/StudentList";
import AddNewStudent from "../components/students/AddNewStudent";
import Backdrop from "../components/ui/Backdrop";

import classes from "./Students.module.css";

const DUMMY_DATA = [
  {
    id: "1",
    nome: "João Marcos",
    sobrenome: "Flach",
    email: "joaoflach@gmail.com",
    telefone: "46991083848",
    endereço: "Rua Pai do Afonso, 100",
    nascimento: "18/09/1993",
    foto: "https://img.freepik.com/fotos-gratis/vista-frontal-sorriso-menino-vestindo-camiseta-amarela_23-2148356653.jpg?w=740&t=st=1688262219~exp=1688262819~hmac=95832ba01abeb0bc3f3885e84a2c47bae8e5921c468b6b476f3a0d5268efb041",
  },
  {
    id: "2",
    nome: "Izabela Garcia",
    sobrenome: "Padilha",
    email: "izabelagarcia@gmail.com",
    telefone: "46991083847",
    endereço: "Rua Pai do Afonso, 100",
    nascimento: "15/09/1990",
    foto: "https://img.freepik.com/fotos-gratis/retrato-de-uma-jovem-adoravel-posando-em-um-top-fofo_23-2148972074.jpg?w=740&t=st=1688262221~exp=1688262821~hmac=8dbebfc3711f3851b05f2e9cea1c9668cb0b74e8f6a2de7157ad3c4f319aab04",
  },
  {
    id: "3",
    nome: "Maria Cecília",
    sobrenome: "Paes",
    email: "mariacecilia@gmail.com",
    telefone: "46999256534",
    endereço: "Rua Pedro de Alcântara, 50",
    nascimento: "16/01/1998",
    foto: "https://img.freepik.com/fotos-gratis/garota-sorridente-de-vista-frontal-dentro-de-casa_23-2149485356.jpg?w=740&t=st=1688262228~exp=1688262828~hmac=c451540ea2b5c4de7c6d48efc213f34049dab05bc6cc97251c09ad2fd731b678",
  },
  {
    id: "4",
    nome: "Brenda",
    sobrenome: "Belo",
    email: "brendabelo@gmail.com",
    telefone: "46999256254",
    endereço: "Km 18",
    nascimento: "16/01/2023",
    foto: "https://img.freepik.com/fotos-gratis/retrato-menina-em-fundo-azul_23-2148356689.jpg?t=st=1688264862~exp=1688265462~hmac=0040bcda8e1f58fb3828a15c943441643a1686b0c6e40e688e92dd3a3c1ea1ca",
  },
];

function Students() {

  const [showAddNewStudent, setShowAddNewStudent] = useState(false);
  
  function showAddNewStudentHandler() {
    setShowAddNewStudent(true);
  }

  function closeAddNewStudentHandler() {
    setShowAddNewStudent(false);
  }
  return (
    <Layout>
      <div className={classes.container}>
        <h1>Lista de Estudantes</h1>
        <div className={classes.actions}>
          <button onClick={showAddNewStudentHandler}>Adicionar Novo</button>
        </div>
      </div>
      <StudentList students={DUMMY_DATA} />
      {showAddNewStudent? <AddNewStudent onClose={closeAddNewStudentHandler}/> : null}
      {showAddNewStudent? <Backdrop onClick={closeAddNewStudentHandler}/> : null}
    </Layout>
  );
}

export default Students;
