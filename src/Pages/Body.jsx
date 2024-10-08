import "../Style/Body/body.css";
import Chrono from "../Component/chrono";
import Button from "../Component/indice";
import { useState, useEffect, useRef } from "react";
import "../Data/Travel_Body/code"
import { questions } from "../Data/Travel_Body/questions";
import { code } from "../Data/Travel_Body/code";
import BuzzerSound from "../Sound/Buzzer.mp3"



export default function BodyAdventure() {

  let initialTime = 15
  let hurryUpTime = 5

  const [time, setTime] = useState(initialTime*60)
  const [pause, setPause] = useState(true)
  const [isRed, setIsRed] = useState(false)
  const audioRef = useRef(null)


//   const negatifTime = ()=>{
//     setIsRed(true)
//     let timer = setInterval(() => {
//         setTime(time=> time+1)
        
//     }, 1000);
//     return()=> clearInterval(timer)
// }

  const malus = (amount)=>{
    if(amount !== "number" ){
      amount = 60
    }
    if(!pause){
        setTime(prevTime => Math.max(prevTime - amount))
        setIsRed(true)
        setTimeout(()=>{
          setIsRed(false)

        },1500)
        audioRef.current.play()

    }
  }
  const handlePause = ()=>{
    setPause(!pause)
  }

  const formatTime = (seconds)=>{
    const minutes = Math.floor(seconds /60)
    let remainSecondes = seconds % 60
    if(remainSecondes === 0){
        remainSecondes = "00"
    }
    // if(minutes===0 && remainSecondes === "00" ){
    //     negatifTime()
    // }
    return(
        `${minutes} : ${remainSecondes}`
    )
}
 useEffect(()=>{
   if(time<0){
    console.log("Fin du jeu");
    setTime(0)
    setPause(true)
   }
 },[time])

  useEffect(()=>{
    let timer = null
    if(!pause){
        timer = setInterval(() => {
        setTime(time => time - 1)
        }, 1000);
    }
        return() => clearInterval (timer)
    }, [pause])


  return (
    <div className="mainContent bodyContent">

      <div className="appliContent ">
        <Chrono time={time} formatTime={formatTime} isRed={isRed} hurryUp={hurryUpTime*60} />
        <audio ref={audioRef} src={BuzzerSound} ></audio>
        <Button handlePause = {handlePause} pause={pause} malus={malus} dataCode={code} dataQuestion={questions} />
      </div>
    </div>
  );
}


