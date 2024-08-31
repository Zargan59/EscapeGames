import { useState } from "react"
import allIndices from "../indice"
import { faLightbulb, faBookOpen, faLockOpen  } from "@fortawesome/free-solid-svg-icons"
import { faPause, faPlay, faSkullCrossbones, faClipboardQuestion } from "@fortawesome/free-solid-svg-icons"
import Modale from "./modal"
import MainButton from "./button"

export default function Indice({handlePause, pause ,malus}){

    const [isOpen, setIsOpen] = useState(false)
    const [hintIsRequired, setIsHintRequired]= useState(false)
    const [type, setType] = useState("")

    const OpenModal = (e)=>{
        if(!pause){
            let button = e.target.id
            if(!button){
                button = e.target.parentElement.parentElement.id
            }
            setIsOpen(true)
            setType(button)
        }
        
    }
    
    const closeHintModal = ()=>{
        setIsHintRequired(false)
    }



    return(
        <div className="ButtonDisposition" >
            <div className="StartContent">
                <MainButton functionclick={handlePause} icon={faPlay} pause={pause} chrono={faPause} description="start" />
            </div>

            <div className="mainButtonDisplay">
                {/* <MainButton functionclick={OpenModal} icon={faLightbulb} description="Indice" type="tips" /> */}
                <MainButton functionclick={malus} icon={faSkullCrossbones}  description="Pénalité" />
                <MainButton functionclick={OpenModal} icon={faLockOpen}  description="Code" type="code" />
                <MainButton functionclick={OpenModal} icon={faClipboardQuestion}  description="Questions" type="questions" />
            </div>
            <div className={isOpen?"background":"background hidde"}>
                <Modale setIsOpen={setIsOpen} malus={malus} type = {type} setType={setType}/>
            </div>
            <div className={hintIsRequired ? "background" : "backgound hidde"}>
                <div className="modalContent hintContent" >
                    <span className="close" onClick={closeHintModal} >X</span>
                </div>
            </div>
        </div>

    )
}