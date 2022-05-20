import React from "react"
import "./Footer.css"
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

function Footer () {
  return <div className="footer">
    <div className="container">
      <div className="cols">
        <h3>Explore Our Menu</h3>
        <p>menu</p>
         <p>Nutrition </p>
         <p>Ingredient</p>
         <p>Drink and Menu</p>
      </div>
      <div className="cols">
        <h3>Explore Our Menu</h3>
        <p>Get in touch</p>
         <p>Press</p>
         <p>Careers</p>
         <p>Get social</p>
      </div>
      <div className="cols">
        <h3>Get in touch</h3>
        <p>Get to Know us</p>
         <p>About us</p>
         <p>Franchising</p>
         <p>Foundation</p>
      </div>
      <div>
        <h3>Let's connect </h3>
        <div className="social">
          <FaFacebookSquare className="icon"/>
          <FaInstagramSquare className="icon"/>
          <FaTwitterSquare className="icon" />
        </div>
      </div>
    </div>
  </div>
}
export default Footer;