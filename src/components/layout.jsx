import React from "react";
import Passwordlengthinput from "./passwordlengthinput";
import Generatepasswordbtn from "./generatepasswordbtn";
import Showgeneratedpassword from "./showgeneratedpassword";
import "../App.css";


const Layout = () => {
    
  return (
    <div className="container">
        <Passwordlengthinput/>
        <Generatepasswordbtn/>
        <Showgeneratedpassword/>
        
    </div>
  )
}

export default Layout
