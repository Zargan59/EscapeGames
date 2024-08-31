
export default function KeyboardKey({number, handletest}){
    return(
        <div className="keyboardKey" id={number} onClick={handletest} >
            <p>{number} </p>
        </div>
    )
}