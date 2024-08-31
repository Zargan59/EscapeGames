import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"
import {faHome } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"


export default function Chrono({time, formatTime, isRed, hurryUp}){
const navigate = useNavigate()
const [isHurry, setIsHurry] = useState(false)
    
    useEffect(()=>{
        if(time == hurryUp){
            setIsHurry(true)
        }
       else if(isHurry == true ){
            if(time>hurryUp){
                setIsHurry(false)
            }
        }
    },[time])

    const handleHome = () =>{
        navigate("/")
    }

return(
    <div className="headerContent">
        <FontAwesomeIcon className="homeIcon fa-icon-shadow " icon={faHome} onClick={handleHome} />
        <div className="chronoContent ">
            <h2 style={{color: isRed? 'red' : ''}} className= {isHurry? "timerContent timesUp" :"timerContent" } >{formatTime(time)} </h2>
        </div>
    </div>
)


}