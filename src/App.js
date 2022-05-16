import './App.css';
// import "./Sidebar"
import { useState } from 'react';
import Sidebar from './Sidebar';
import Content from './Content';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [contentWidth, setContentWidth]= useState()
  const [style, setStyle]= useState({fontFamily: "IBM Plex Mono, monospace"})
  console.log(style);
  return (
    <Router>
    <div style={style} className="home">
      <Sidebar setStyle={setStyle} setContentWidth={setContentWidth} />
      <Routes>
          <Route path="/" element={<Content contentWidth={contentWidth} />} />
          <Route path="/Miscellaneous" element={<Content contentWidth={contentWidth} />} />
          <Route path="/Dark" element={<Content contentWidth={contentWidth} />} />
          <Route path="/Pun" element={<Content contentWidth={contentWidth} />} />
          <Route path="/Spooky" element={<Content contentWidth={contentWidth} />} />
          <Route path="/Christmas" element={<Content contentWidth={contentWidth} />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
