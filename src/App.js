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
  return (
    <Router>
    <div className="home">
      <Sidebar setContentWidth={setContentWidth} />
      <Routes>
          <Route path="/*" element={<Content contentWidth={contentWidth} />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
