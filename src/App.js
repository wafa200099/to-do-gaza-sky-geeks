import About from "./pages/About";
import { Routes, Route, Link } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import ToDo from "./pages/ToDo";
import ToDoHeader from "./components/ToDoHeader";
const App = () => {
  return (
    <div>
      <nav style={{ marginLeft: 600 }}>
        <Link style={{ marginLeft: 30 }} to="/">
          Portfolio
        </Link>
        <Link style={{ marginLeft: 30 }} to="/About">
          About
        </Link>

        <Link style={{ marginLeft: 30 }} to="/todo">
          to do
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="todo" element={<ToDo />} />
      </Routes>
    </div>
  );
};
export default App;
