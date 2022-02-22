import React from "react";
import {Link} from "react-router-dom";
// import "./navBar.css"


 function NavBar() {
     return (
     <nav className="navBar">
                 <Link className= "link" to="/"> Homepage </Link>
                 <Link className= "link"to="/About"> About </Link>
                 <Link className= "link" to="/Resources"> Resources </Link>
             </nav>
            )    
         }


      /* <button onClick={() => props.button> Risk Assessment </button> */

      export default NavBar;