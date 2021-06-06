import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
