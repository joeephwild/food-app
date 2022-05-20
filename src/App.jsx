import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Food from "./Food"
import Footer from "./Footer"

import craft1 from "../craft1.jpg"
import craft2 from "../craft2.jpg"
import chicken from "../chicken.jpg"
import Burger from "../burger.jpg"
import herobg from "../hero.jpg"

function App() {
  return (
<>
  <Navbar />

      <Hero />
     <Food bgImg1={craft1} bgImg2={craft2} />
      <Food bgImg={chicken} />
      <Food bgImg={Burger}/>
      
    <Footer />
</>   
    
  );
}

export default App;