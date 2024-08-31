import KeyboardKey from "./keyboard/keyboardKey.jsx"
import "./keyboard/keyboardKey.jsx"
import {useEffect, useState} from "react"
import { codeBody } from "../Data/Travel_Body/code.js"
import { tips } from "../Data/Travel_Body/tips.js"
import {questions} from "../Data/Travel_Body/questions.js"
import Message from "./modalMessage.jsx"

//Besoin de rajouter 
export default function Modale({setIsOpen, malus, type, setType}){
    const [number, setNumber] =useState("")
    const [message, setMessage]= useState("")
    const [isMessage, setIsMessage] = useState(false)
    const [indices, setindices] = useState([])
    const [NumberOfTips, setNumberOfTips] = useState(0)
    const [response, setResponse] = useState([])
    
    const [pickCard, setPickCard] = useState("")
    const [score, setScore] = useState(0)
    const [cardQuestion, setCardQuestion] = useState([])
    const [currentNumberQuestion, setCurrentNumberQuestion] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [explication, setExplication] = useState(false)
    const [showExplication, setShowExplication] = useState("")
    const [isCorrect, setIsCorrect] = useState(false)

    useEffect(()=>{
        if(cardQuestion.length>0){
            displayQuestion()
        }
    }, [cardQuestion])
    useEffect(()=>{
        if(currentNumberQuestion!==0){
            displayNextQuestion()
        }

    },[currentNumberQuestion])

    const Submit = () =>{

        if(type==="code"){
            let codeMatch =  0   
            codeBody.find((element)=>{
                if(element.code == number ){
                    codeMatch++
                    DisplayMessage(element.message)
                }
            })
            if(codeMatch === 0){
                DisplayMessage("Code incorrect, vous perdez 2 minutes")
                malus(120)
            }
        }

        else if(type === "questions"){
            let correctCard = 0

            questions.find(element=>{
                //Si la carte est correct, j'affiche la 1er question
                if(element.card == number){
                    correctCard++
                    setCardQuestion(element.questions)
                    displayQuestion()
                    setPickCard(element.gain)
                    console.log(element);
                }
            })
            if(correctCard==0){
                DisplayMessage("Cette carte n'existe pas");
            }
        }

        else if(type ==="tips"){
            let correctCard = 0
            tips.filter((element)=>{
                if(element.carte.toString().indexOf(number)!==-1){
                    console.log(element);
                    
                    correctCard++
                    DisplayTips(element, element.solution)
                }
            })
            if(correctCard==0){
                DisplayMessage("La carte n'a pas d'indice")
            }
        }

    } 

    const nextQuestion = ()=>{
        setShowExplication("")
        setCurrentNumberQuestion(currentNumberQuestion+1)
        setIsCorrect(false)
    }
    const displayNextQuestion=() =>{
        setExplication(false)
        displayQuestion()
    }
    const CheckGoodAnswer = (e) =>{
        let buttonclicked = e.target.id 
        if(buttonclicked==""){
            buttonclicked=e.target.parentElement.id
        }
        if(buttonclicked==correctAnswer){
            setExplication(true)
            setScore(score+1)
            setIsCorrect(true)
        }
        else{
            setExplication(true)
            setIsCorrect(false)
        }
    }
 
    const displayQuestion = ()=>{
        if(cardQuestion.length > 1){
            if(currentNumberQuestion== cardQuestion.length){
                setExplication(true)
                setType("message")
                console.log("ICI");
            }
            else{
                let question = cardQuestion[currentNumberQuestion]
                setResponse(question.responses)
                setCorrectAnswer(question.correctAnswer)
                setShowExplication(question.explication)
                DisplayMessage(cardQuestion[currentNumberQuestion][currentNumberQuestion+1])
            }
        }

       
    }
    const closeModal= ()=>{
        setIsOpen(false)
        setMessage("")
        setNumber("")
        setIsMessage(false)
        setType("")
        setScore(0)
        setExplication(false)
        setCurrentNumberQuestion(0)
        setCorrectAnswer("0")
        setCardQuestion("")
        setIsCorrect(false)
        }

    const DisplayTips =(indice) =>{
        console.log(indice);
        console.log(indice.indices);
        setindices(indice)
        setIsMessage(true)
    }
 
    const DisplayMessage = (message)=>{
        setMessage(message)
        setIsMessage(true)
    }  

    const checkKey = (key)=>{
        
        if(key == "C"){
            setNumber("")
        }
        else if(key == "V"){
            Submit()
        }
        else{
            if(number > 999){
                console.log("Pas plus de 4 chiffres");
            }
            else{
                setNumber(number+key)
            }
        }
        
    }

    const press = (e)=>{
        
            if(e.target.id == "" ){
                checkKey(e.target.parentElement.id)
            }
            else{
                checkKey(e.target.id)
            }
    }
    
 

    return(
        <div className="modalContent">
                <div className="buttonCloseContent">
                    <span className="close" onClick={closeModal} > X </span>
                </div>
                {
                    isMessage?
                    <div className="messageContent">
                        <Message pickCard={pickCard} isCorrect={isCorrect} score={score} maxScore={cardQuestion.length} explication={explication} CheckGoodAnswer={CheckGoodAnswer} type={type} handleNextQuestion={nextQuestion} message={message} response={response} DisplayMessage={DisplayMessage} correctAnswer={correctAnswer} showExplication={showExplication} />       
                    </div>
                     :
                    <div className="codeContent">
                        <div className="modalScreen">
                            <p>{number} </p>
                        </div>
                        <div className="keyboardContent">
                           <KeyboardKey number="1"  handletest={press}/>
                           <KeyboardKey number="2"  handletest={press}/>
                           <KeyboardKey number="3"  handletest={press}/>
                           <KeyboardKey number="4"  handletest={press}/>
                           <KeyboardKey number="5"  handletest={press}/>
                           <KeyboardKey number="6"  handletest={press}/>
                           <KeyboardKey number="7"  handletest={press}/>
                           <KeyboardKey number="8"  handletest={press}/>
                           <KeyboardKey number="9"  handletest={press}/>
                           <KeyboardKey number="C"  handletest={press}/>
                           <KeyboardKey number="0"  handletest={press}/>
                           <KeyboardKey number="V"  handletest={press}/>


                        </div>
                    </div>
                    
                }

        </div>

    
    )
}

{/* <div className="codeContent">
                        <div className="modalScreen">
                            <p>{number} </p>
                        </div>
                        <div className="keyboardContent">
                   <KeyboardKey number="1"  handletest={press}/>
                   <KeyboardKey number="2"  handletest={press}/>
                   <KeyboardKey number="3"  handletest={press}/>
                   <KeyboardKey number="4"  handletest={press}/>
                   <KeyboardKey number="5"  handletest={press}/>
                   <KeyboardKey number="6"  handletest={press}/>
                   <KeyboardKey number="7"  handletest={press}/>
                   <KeyboardKey number="8"  handletest={press}/>
                   <KeyboardKey number="9"  handletest={press}/>
                   <KeyboardKey number="C"  handletest={press}/>
                   <KeyboardKey number="0"  handletest={press}/>
                   <KeyboardKey number="V"  handletest={press}/>


                        </div>
</div> */}