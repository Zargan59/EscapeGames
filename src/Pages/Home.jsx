import "../Style/Home/home.css"
import ChooseAdventure from "../Component/chooseAdventure"

export default function HomePage (){
    const adventures = require("../Data/Adventure/adventure.json")

    /// son du bouton de buzzer
    /// Mettre en place le système d'indice
    // Rajouter dans les indésirables des icones le path 
    // Pour les questions agrandir l'encadrer en fonction du volume du texte
    // Mieux voir le bonne réponse/Mauvaise réponse
    //


    return(
        <div className="homeContent">
            <h1>Quelle aventure allons-nous vivre ?</h1>
            <div className="adventureContent">
                {
                    adventures.map((adventure, index)=>(
                        <ChooseAdventure key={index} link={adventure.link} name={adventure.name} title ={adventure.title} isPublished={adventure.isPublished} />
                    ))
                }
            {/* <ChooseAdventure link="/Voyage-au-centre-du-corps" name=" adventure body" title='Voyage au centre du corps humain' />
            <ChooseAdventure link="/Alice" name=" adventure alice" title='Alice et le gras' /> */}
            </div>
        </div>
    )

}