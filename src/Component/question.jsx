export default function Displayquestion({index, element,handleClick}){
  

   return(
          <div onClick={handleClick} id={index+1} className="answer" key={index+4}>
              <p key={index}> {index +1}. {element} </p>
          </div>
      )
}
