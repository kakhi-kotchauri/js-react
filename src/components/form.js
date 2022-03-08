import react from "react";
import { useState } from "react";

 export const Form1 = () => {

    const [firstnamevalue,setf] = useState('')
    const [lastnamevalue,setl] = useState('')


    const changefirstname = (event) => {
        if(event.target.value ) {
        setf(event.target.value)
        console.log( typeof event.target.value)
        }
    }

    const changelastname = (event) => {
        if(event.target.value.trim() ) {
            setl(event.target.value)
            }
    }

    const [values, r] = useState('')
    
    const log = () => {
        r(`${firstnamevalue} ${lastnamevalue}`)
    }


    return (
        <div>
        <form>
         <input type="text" placeholder="firstname" name="firstname" onChange={changefirstname}  />
         <input type="text" placeholder="lastname" name="lastname" onChange={changelastname} />
         </form>
         <button onClick={log}>ss</button>
         <div>{values}</div>
         </div>
    )
}