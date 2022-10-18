import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Layout from "./components/layout";
import Header from "./components/header";
import { About } from "./components/about";
import './App.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header heading='Random Password Generator' searchBar={true}/>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
          
    </div>
  );
}

export default App;
