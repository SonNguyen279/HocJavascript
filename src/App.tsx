import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import './App.css';

import Preloader from './components/Preloader'
import { useEffect, useState } from 'react';
import NavBar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
// import Home from "./components/Home/Home";
// import ScrollToTop from "./components/ScrollToTop";


function App() {
  const [load, upadateLoad] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
