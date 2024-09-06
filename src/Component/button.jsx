import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function MainButton({functionclick,icon,chrono,pause, description, type }){
    if(!chrono){
        return(
            <div className="mainButtonContent ">
                <button onClick={functionclick} id={type} className="button buttonShadow"><FontAwesomeIcon icon={icon} className="iconButton" /> </button>
                <h3 >{description} </h3>
            </div>
        )
    }

    else{
        return(
            <div className="mainButtonContent">
                <div className="StartButtonWrapper buttonShadow" >
                    <button onClick={functionclick} className="button startMainButton" >{pause ?<FontAwesomeIcon icon={icon} className="iconButton leftAlign iconStart" /> :<FontAwesomeIcon icon={chrono} className="iconButton iconStart " />} </button>
                </div>
                <h3 className="startMainDescription" >{pause?"Start":"Pause" } </h3>
            </div>
        )
    }

}