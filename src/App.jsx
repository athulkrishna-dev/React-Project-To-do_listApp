import { Navbar } from "./Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { TodoApp } from "./TodoApp";

function App() {
  return (
    <>
      
      < Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<TodoApp />} />

      </Routes>
    </>
  );
}

export default App;
