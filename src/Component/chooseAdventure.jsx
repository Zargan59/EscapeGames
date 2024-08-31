import { NavLink } from "react-router-dom"

console.log("ICI");
export default function ChooseAdventure ({link, name , title}){
    return(
    <NavLink to= {link} >
        <div className={name} >
            <h2> {title} </h2>
        </div>
    </NavLink>
    )
    
}