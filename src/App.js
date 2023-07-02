import { Routes, Route } from "react-router-dom";

import Students from "./pages/Students";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<Students />} />
    </Routes>
  );
}

export default App;
