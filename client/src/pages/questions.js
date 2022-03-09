import React, { useState, useEffect } from "react";
import { getAllQuestions } from "../services/questionsService";
// import "../style/questions.css";



const RenderQuestions = (user) => {
    const [questions, setQuestions] = useState(null);
    console.log(questions)
    useEffect(() => {
        // console.log("hello")
        async function getQuestions() {
            if (!questions) {
                const response = await getAllQuestions();
                console.log(response)
                setQuestions(response);
        }

    }
        getQuestions();
    }, []); 

    return (
          <>
           {/* <div>Welcome To Tech Wealth Assessment</div> */}
            {questions.map((question)=>{
                 return (question.question)
             })}
         </>
    )
  }
    export default RenderQuestions;
//     return ( <>
    
//             {/* <h1> Tech Wealth Risk Assessment </h1> */}
//                 {/* {questions.map((question) => {questions.question})} */}
//                     {/* {questions} */}

//                     {questions.map((question) => {
//                         return (question.question)
//                     })}

                
//                 {/* { 
//                 <form>
//                     questions.map((question) => {
//                     return (
//                         <div>
//                             <p>{question.question}</p>
//                             {questions.answers.map((answer, index) => {
//                                 const identifier = "question-" + question._id + "-answer-" + index;
//                                 return (
//                                     <div>
//                                         <input type="radio" id={identifier} name={identifier}/>
//                                         <label for={identifier}> {answer} </label>
//                                     </div>
//                                 )
//                             })}              
//                         </div> 
//                     )
//                 })
//             } */} 
//              {/* </form> */}
//         {/* </fieldset> */}
//        </>
//     )
// }


// export default RenderQuestions;

