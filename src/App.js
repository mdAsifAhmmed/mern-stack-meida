import { Routes, Route } from "react-router-dom";
import Login from "./components/loginInfo/Indexs";
import Hero from "./components/pages/Hero";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Hero />} />
      </Routes>
    </>
  );
};

export default App;
