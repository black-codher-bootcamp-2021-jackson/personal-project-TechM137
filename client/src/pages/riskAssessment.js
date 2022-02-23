import React, { useState, useEffect } from "react";
import "../style/riskAssessment.css";

// useState is used to pass props through components, I need a useState for the questions and answers to appear on 
// the riskAssessment page(2)


// function answers() => {
//  const [input, setInput] = useState([])
// }

// function handleChange(event) {
//  const {name, value} = event.target;

//  setInput(prevInput => {
//      return {
//          prevInput, 
//          [name]:value
//  }
//  })
//  
//  function handleClick(event) {
//         event.preventDefault();
//  console.log(input);
// }
// }
import { getAllQuestions } from "../services/questionsService";

const RenderQuestions = (user) => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        async function getQuestions() {
            if (questions.length === 0) {
                const response = await getAllQuestions();
                setQuestions(response)
        }
    }
        getQuestions();
    }, [questions]); 

    return (
        <form> 
            <fieldset>
            <legend> Tech Health Risk Assessment </legend>
                { console.log("here")}
                { 
                    questions.map((question) => {
                    return (
                        <div>
                            <p>{question.question}</p>
                            {questions.answers.map((answer, index) => {
                                const identifier = "question-" + question._id + "-answer-" + index;
                                return (
                                    <div>
                                        <input type="radio" id={identifier} name={identifier}/>
                                        <label for={identifier}> {answer} </label>
                                    </div>
                                )
                            })}              
                        </div> 
                    )
                })
            }
        </fieldset>
        </form>
    )
}


export default RenderQuestions;



//  return (
// <fieldset>
// <legend> Q1 Please select your age group </legend>
// <form>

//  <div>
//      <input type="radio" id="questions" onChange{handleChange} name="" value=[] */}>
//      <label for "questions">[]</label>
//  </div>

//  <div>
//      <input type="radio" id="questions" onChange{handleChange} name="" value=[]>
//      <label for="questions">[]</label>
//  </div>

//  <div>
//      <input type="radio" id="questions" onChange{handleChange} name="" value=[]>
//      <label for="questions">[]</label>
//  </div> 

//  <div>
//      <input type="radio" id="questions" onChange{handleChange} name="" value=[]>
//      <label for="questions">[]</label>
//  </div> 

//  <div>
//      <input type="radio" id="questions" onChange{handleChange} name="" value=[]>
//      <label for="questions">[]</label>
//  </div>

/* <div>
        <button type="submit">Submit</button>
    </div> */

// </form>
// </fieldset>


// const renderQuestions = (user) => {
//     return (
//       <li key={user._id}>
//         <h3>
//           {`${user.first_name} 
//           ${user.last_name}`}
//         </h3>
//         <p>{user.location}</p>
//       </li>
//     );
//   };

//   return (
//     <div>
//       <ul>
//         {profiles && profiles.length > 0 ? (
//           questions.map((question) => renderQuestions(question))
//         ) : (
//           <p>No profiles found</p>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default App;