import react from "react";
import {useState} from 'react'


export const Smt = (info) => {
  const [text, changetext] = useState('first text')
  const {test,someting1,...rest} = info
  console.log(test)
  console.log(someting1)
  console.log(rest)
  const changer = () => {
    changetext('changed text')
  }
   return(
     <div>
       <h3 style={{color: 'aqua', backgroundColor: 'red'}}>this is a functional component</h3>
       <button onClick={changer}>change text</button>
       <h1>{text}</h1>
       </div>
   )
}
