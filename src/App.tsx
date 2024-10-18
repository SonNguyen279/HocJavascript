import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.css'
import Preloader from './components/Preloader'
import { useEffect, useState } from 'react';
import NavBar from './components/Navbar';
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
      </div>
    </Router>
  )
}

export default App
