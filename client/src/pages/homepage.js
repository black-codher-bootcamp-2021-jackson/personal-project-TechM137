    import React from "react";
    
    function handleClick() {
        window.location.href = "/questions";  
    }

    // type FormValues = {
    //     Email = string;
    // }
    
    // let render = 0;

    // export default function App() {
        // const { register, handleSubmit } = useForm<FormValues>();
        // renderCount++;

    
    // const onSubmit = (e) => {
    //     e.preventDefault();
    // }


    // var form = doc.getElementById('form')

    // form.addEventListener('submit', function(event) {
    //     event.preventDefault()
    
    // })

    // var Email=doc.getElementById('Email').value

    // console.log(Email);

    function Homepage() {
        return (
    <body>
    <div>
    <h1>Welcome To Tech Wealth</h1>
    <p className="tagline"> Tech Wealth here to support your Online Health  </p>
    {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" id="email" placeholder="Email" required>
            <input type="submit" value="email"> 
            </input>
        </input>
    </form>   */}
    <div>
     <button onClick={handleClick} className="btn"> Risk Assessment </button>  
     </div>
    </div>
    </body>
        ) 
    }


export default Homepage;