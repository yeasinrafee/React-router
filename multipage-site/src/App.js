import "./App.css";
import {BrowserRouter, Route, Routes, NavLink, Navigate} from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Articles } from "./pages/Articles";

function App() {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <h1>My Articles</h1>
        <NavLink end to="/">Home</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/About">About</NavLink>
      </nav>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/articles/:id" element={<Articles/>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
