import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero/Hero";
// import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import Test from "./components/test/Test";
function App() {
  return (
    <Router>
      <Homepage />
      <About/>
      <Resume />
      <Projects />
      <Contact />
      {/* <Test />  */}
    </Router>
  );
}

export default App;
