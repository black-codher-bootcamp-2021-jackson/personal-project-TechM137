import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./components/navbar"



function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={() => (
          <>
            <homepage /> 
            {/* <navBar/> */}
          </>
        )}
      />

      {/* <Route
        exact
        path="/about"
        render={() => (
          <>
            <Header />
            <About />
          </>
        )}
      /> */}

      {/* <Route
        exact
        path="/basket"
        render={() => (
          <>
            <Header />
            <Basket />
          </>
        )}
      /> */}
    </BrowserRouter>
  );
}
export default App;





{/* // SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllQuestions } from "./services/questionsService";

// As soon as the component renders we need to make an api to request to get those questions, 
if we get those questions we need to store those questions in state 

   // const [questions, setQuestions] = useState([]);

// use effect takes two argumants a function and an array 
// (its always an array but the array can be empty and when empty it means once its run it will never run again) that needs to happen

  // useEffect(() => { 

   
     async function getQuestions() {  */}


  {/* //    if (!questions) {
  //       const response = await getAllQuestions();
  //       setQuestions(response)
  //     }
  //   }

  //   getQuestions();
  // }, [questions]);

// } */}







{/* 
// function App() {
//   const [profiles, setProfiles] = useState(null);

//   useEffect(() => {
//     async function getProfiles() {
//       if (!profiles) {
//         const response = await getAllProfiles();
//         setProfiles(response);
//       }
//     }

//     getProfiles();
//   }, [profiles]);



//   const renderProfile = (user) => {
//     return (
//       <div className="container"> 
//       <h1>Welcome To Tech Health</h1>
//       <h2 key={user._id}>
//       <p>
//         {`${user.first_name} 
//         ${user.last_name}`}
//       </p>
//       <p>{user.location}</p>
//     </h2>   
//     </div>
//     );
//   };

//   return (
//     <div>
//       <ul>
//         {profiles && profiles.length > 0 ? (
//           profiles.map((profile) => renderProfile(profile))
//         ) : (
//           <p>No profiles found</p>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default App; */}