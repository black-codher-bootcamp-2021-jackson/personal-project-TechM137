    import React from "react";
    
    function handleClick() {
        window.location.href = "/questions";  
    }

    function Homepage() {
        return (
    <div>
    <h1>Welcome To Tech Health</h1>
    <p> Tagline </p>
     <button onClick={handleClick} className="btn"> Risk Assessment </button>  
    </div>
        ) 
    }


export default Homepage;