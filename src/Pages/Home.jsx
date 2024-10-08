import "../Style/Home/home.css"
import ChooseAdventure from "../Component/chooseAdventure"

export default function HomePage (){
    const adventures = require("../Data/Adventure/adventure.json")

    /// Mettre en place le système d'indice
    // Rajouter dans les indésirables des icones le path 


    return(
        <div className="homeContent">
            <h1>Quelle aventure allons-nous vivre ?</h1>
            <div className="adventureContent">
                {
                    adventures.map((adventure, index)=>(
                        <ChooseAdventure key={index} link={adventure.link} name={adventure.name} title ={adventure.title} isPublished={adventure.isPublished} />
                    ))
                }
            </div>
        </div>
    )

}