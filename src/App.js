import './App.css';
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
  const [font, setFont]= useState({fontFamily: "'IBM Plex Mono', monospace"})
  return (
    <Router>
    <div style={font} className="home">
      <Sidebar setContentWidth={setContentWidth} />
      <Routes>
          <Route path="/*" element={<Content setFont={setFont} contentWidth={contentWidth} />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
