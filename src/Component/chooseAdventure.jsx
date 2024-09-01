import { NavLink } from "react-router-dom"

export default function ChooseAdventure ({link, name , title}){
    return(
    <NavLink to= {link} >
        <div className={name} >
            <h2> {title} </h2>
        </div>
    </NavLink>
    )
    
}