import "../Style/Home/home.css"
import ChooseAdventure from "../Component/chooseAdventure"

export default function HomePage (){
    const adventures = require("../Data/Adventure/adventure.json")
    console.log(adventures);
    console.log("LA");
    /// son du bouton de buzzer
    /// Mettre en place le système d'indice
    //Bug sur les questions, si je commence une questions, que je fermes et que je met une carte qui existe pas, ca affiche les questions
    return(
        <div className="homeContent">
            <h1>Quelle aventure allons-nous vivre ?</h1>
            <div className="adventureContent">
            <ChooseAdventure link="/Voyage-au-centre-du-corps" name=" adventure body" title='Voyage au centre du corps humain' />
            <ChooseAdventure link="/Alice" name=" adventure alice" title='Alice et le gras' />
            </div>
        </div>
    )

}