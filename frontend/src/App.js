import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./screens/HomePage"; 

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar will appear on every screen */}
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
