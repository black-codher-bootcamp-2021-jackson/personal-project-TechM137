    import React from "react";
    
    function handleClick() {
        window.location.href = "/questions";  
    }

    function Homepage() {
        return (
    <body>
    <div>
    <h1>Welcome To Tech Health</h1>
    <p> Tagline </p>
    {/* <form action="index.html" method="GET">
        <input type="text" email="Email" placeholder="Email">
            <button type="submit">
                Submit 
            </button>
        </input>
    </form> */}
    <div>
     <button onClick={handleClick} className="btn"> Risk Assessment </button>  
     </div>
    </div>
    </body>
        ) 
    }


export default Homepage;