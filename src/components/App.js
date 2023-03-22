import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/App.css";
import Dashboard from "./Dashboard";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
