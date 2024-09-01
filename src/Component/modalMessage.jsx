import Displayquestion  from "./question.jsx"
import { useState } from "react"

export default function Message({ pickCard, isCorrect, score, maxScore, message,explication, CheckGoodAnswer, type, response, DisplayMessage,correctAnswer,showExplication,handleNextQuestion }){


    if(type == "code"){
        return(
            <div className="codeMessageContent">
                <p>{message}</p>
            </div>
        )
    }
    else if( type== "message"){
        console.log("Le message");
        return(
            <div>
                <p>Bien joué! Vous obtenez un score de {score}/{maxScore} </p>
                <p>Prenez la carte {pickCard} </p>
            </div>
        )
    }

    else if( type == "questions"){
        return(
        <div> 
            
            {explication ?
            <div>
                 {isCorrect? <p>Bonne réponse</p> 
                 : 
                 <p>Mauvaise réponse</p>
                 }
                <p>{showExplication}</p>
                <button className="nextQuestion" onClick={handleNextQuestion}>Suivant</button>
            </div>
            : 
            <div>
                <p>{message} </p>
                <div className="answerContent">
                    {response.map((element, index) => <Displayquestion key={index} index={index} element={element} handleClick={CheckGoodAnswer}  /> )}
                </div>
            </div>
            }
        </div>
        )
    }
}