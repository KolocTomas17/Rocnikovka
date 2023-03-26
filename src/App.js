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
import Product from "./product/Product";
import Product2 from "./product/Product2";
import Product3 from "./product/Product3";
import Product4 from "./product/Product4";
import Product5 from "./product/Product5";
import Product6 from "./product/Product6";





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
      <Route path="/Product/1" element={<Product />} />
      <Route path="/Product/2" element={<Product2 />} />
      <Route path="/Product/3" element={<Product3 />} />
      <Route path="/Product/4" element={<Product4 />} />
      <Route path="/Product/5" element={<Product5 />} />
      <Route path="/Product/6" element={<Product6 />} />
      <Route path="/Product/7" element={<Product />} />
      <Route path="/Product/8" element={<Product />} />
      <Route path="/Product/9" element={<Product />} />
  </Routes>


    
    </>

  );
}


export default App;
