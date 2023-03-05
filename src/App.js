import React from 'react';


import Logreg from "./login/Logreg";
import Onas from "./content/Onas"
import Domu from "./Nav";
import Finanovani from './content/Financovani';
import Koupit from './side/Side';
import Kariera from './content/Kariera';
import { Route, Routes } from "react-router-dom";
import "./login/Logreg.css";
import Napis from './content/Napis';





function App() {
 

  return (
    <>
    <Routes>
      <Route exact index element ={<Domu />} />
      <Route path="/Financovani" element={<Finanovani />} />
      <Route path="/Prihlaseni" element={<Logreg />} /> 
      <Route path="/Onas" element={<Onas />} />
      <Route path="/Koupit" element={<Koupit />} />
      <Route path="/Kariera" element={<Kariera />} />
      <Route path="/NapisteNam" element={<Napis />} />
  </Routes>


    
    </>

  );
}


export default App;
