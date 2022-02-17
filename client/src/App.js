import React, { useState, useEffect } from "react";

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
      <li key={user._id}>
        <h3>
          {`${user.first_name} 
          ${user.last_name}`}
        </h3>
        <p>{user.location}</p>
      </li>
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


// import { getAllQuestions } from "./services/QuestionsService.js";

// As soon as the component renders we need to make an api to request to get those questions, 
//if we get those questions we need to store those questions in state

// function App() {
//   const [questions, setQuestions] = useState([]);

//use effect takes two argumants a function and an array 
//(its always an array but the array can be empty and when empty it means once its run it will never run again) that needs to happen

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

