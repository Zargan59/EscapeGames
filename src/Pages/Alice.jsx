import "../Style/Alice/alice.css";
import "../Style/main.css"
import Chrono from "../Component/chrono";
import Button from "../Component/indice";
import { useState, useEffect } from "react";

export default function AliceAdventure() {

  let initialTime = 60
  let hurryUpTime = 10
  const [time, setTime] = useState(initialTime*60)
  const [pause, setPause] = useState(true)
  const [isRed, setIsRed] = useState(false)

  const malus = (amount)=>{
    if(amount !== "number" ){
      amount = 60
    }
    if(!pause){
        setTime(prevTime => Math.max(prevTime - amount))
        setIsRed(true)
        setTimeout(()=>{
            setIsRed(false)
        },200)
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



    //Button => Envoyer le script pour le code et pour les questions
  return (
    <div className="mainContent aliceContent">

      <div className="appliContent">
        <Chrono time={time} formatTime={formatTime} isRed={isRed} hurryUp={hurryUpTime*60} />
        <Button handlePause = {handlePause} pause={pause} malus={malus} />
      </div>
    </div>
  );
}
