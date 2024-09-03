import { NavLink } from "react-router-dom"

export default function ChooseAdventure ({link, name , title, isPublished}){
    if(isPublished){
        return(
        <NavLink to= {link} >
            <div  className="isPublishedContent">
                <div className={
                    isPublished==true? `adventure ${name}` : 
                    `adventure waitingPublished ${name} `} >
                    <h2> {title} </h2>
                </div>
            </div>
        </NavLink>
        )
    }
    else {
        return(
                <div  className="isPublishedContent">
                    <div className={
                        isPublished==true? `adventure ${name}` : 
                        `adventure waitingPublished ${name} `} >
                        <h2> {title} </h2>
                    </div>
                </div>
            )
        }
}
    