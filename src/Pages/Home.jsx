import "../Style/Home/home.css"
import ChooseAdventure from "../Component/chooseAdventure"

export default function HomePage (){

    /// son du bouton de buzzer
    /// Devient Impossible de cliquer sur les boutons si le chrono est sur pause
    /// Version mobile 
    /// Mettre en place le système de question
    /// Mettre en place le système d'indice
    /// Modifier les buttons pour les icones


    return(
        <div className="homeContent">
            <h1>Quelle aventure allons-nous vivre ?</h1>
            <div className="adventureContent">
                <ChooseAdventure link="/Voyage-au-centre-du-corps" name=" adventure body" title='Voyage au centre du corps humain' />
                <div className="adventure alice">
                    <h2>Alice et le gras</h2>
                </div>
            </div>
        </div>
    )

}