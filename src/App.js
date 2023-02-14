import React from 'react';


import Logreg from "./login/Logreg";
import Onas from "./content/Onas"
import Domu from "./Nav";
import Finanovani from './content/Financovani';
import Koupit from './side/Side';
import { Route, Routes } from "react-router-dom";
import "./login/Logreg.css";





function App() {
 

  return (
    <>
    <Routes>
      <Route exact index element ={<Domu />} />
      <Route path="/financovani" element={<Finanovani />} />
      <Route path="/prihlaseni" element={<Logreg />} /> 
      <Route path="/Onas" element={<Onas />} />
      <Route path="/Koupit" element={<Koupit />} />
  </Routes>


    
    </>

  );
}


export default App;
