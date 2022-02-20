import React, { useState, useEffect } from "react";
import "./App.css";
// import homepage, from "src/pages/homepage"

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";

function App() {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

    getProfiles();
  }, [profiles]);



  const renderProfile = (user) => {
    return (
      <div> 
      <header>Welcome To Tech Health</header>
      <h1 key={user._id}>
      <p>
        {`${user.first_name} 
        ${user.last_name}`}
      </p>
      <p>{user.location}</p>
    </h1>   
    </div>
    );
  };

  return (
    <div>
      <ul>
        {profiles && profiles.length > 0 ? (
          profiles.map((profile) => renderProfile(profile))
        ) : (
          <p>No profiles found</p>
        )}
      </ul>
    </div>
  );
}

export default App;

// const renderQuestions = (user) => {
//   return (
// <p> Q1 What is your age demographic? </p>

// <div>
// <input type="radio" id="question" name="drone" value="huey" */}
//         checked>
// <label for="huey">Huey</label>
// </div>

// <div>
// <input type="radio" id="dewey" name="drone" value="dewey">
// <label for="dewey">Dewey</label>
// </div>

// <div>
// <input type="radio" id="louie" name="drone" value="louie">
// <label for="louie">Louie</label>
// </div> */}



// import { getAllQuestions } from "./services/QuestionsService.js";

// As soon as the component renders we need to make an api to request to get those questions, 
//if we get those questions we need to store those questions in state

// function App() {
//   const [questions, setQuestions] = useState([]);

// use effect takes two argumants a function and an array 
// (its always an array but the array can be empty and when empty it means once its run it will never run again) that needs to happen

//   useEffect(() => {
//     async function getQuestions() {
//       if (!questions) {
//         const response = await getAllQuestions();
//         setQuestions(response)
//       }
//     }

//     getQuestions();
//   }, [questions]);

// }

// export default App;