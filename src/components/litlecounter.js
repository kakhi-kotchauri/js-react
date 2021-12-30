import react from "react"
import { useState } from "react"
import { Styledbutton } from "./button"
import '../styles.css'



export function Counter(props) {

  const {...rest} = props

const [counter,change] = useState(0)
const plus = (props) => {
  if (counter > 0) {
    if(props === '-') {
      change(counter - 1)
    }  
  }
  if(props === '+') {
    change(counter + 1)
  }
}



    return(
      <div>
    <div className="par123" style={{ width: '15%', display:'flex', flexDirection: 'column', marginBottom: '7vw',  marginLeft: '3vw', marginTop: '6vw'}}>

       <Styledbutton 
      onck = {() => plus('+')}
      display = {'block'} 
      pardisplay = {'inline-flex'} 
      radius = {'0.3vw'} 
      font = {'8vw'} 
      margin = {'0vw 0vw 1vw 0vw'} 
      height = {'9vw'} 
      width = {'70%'} 
      backgroundColor = {'yellow'} 
      color = {'red'}>
      +
      </Styledbutton>

      <Styledbutton 
      onck = {() => plus('-')}
      display = {'block'} 
      pardisplay = {'inline-flex'} 
      radius = {'0.3vw'} 
      font = {'8vw'} 
      margin = {'0vw 0vw 1vw 0vw'} 
      height = {'9vw'} 
      width = {'70%'} 
      backgroundColor = {'yellow'} 
      color = {'red'}>
      -
      </Styledbutton>

      <div className="ssd" style={{  display:'inline-block', textAlign: 'center', fontSize: '3vw',  marginBottom: '1vw'}}>{counter}</div>
      </div>
    </div>
    )
}

