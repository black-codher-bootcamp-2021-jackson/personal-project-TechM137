import React from "react";
import { Link,BrowserRouter } from "react-router-dom"; 
import "./App.css";

 function navBar() {
     return (
     <nav className="navBar">
                 <Link className= "link" to="/"> Homepage </Link>
                 <Link className= "link"to="/"> About </Link>
                 <Link className= "link" to="/"> Resources </Link>
             </nav>
            )    
         }


      {/* <button onClick={() => props.button> Risk Assessment </button> */}

      export default navBar;