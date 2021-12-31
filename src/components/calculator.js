import React from "react";
import { Styledbutton } from "./button";
import { useState } from "react";
import { Buttonv1 } from "./button";

export const Calc = () => {

    const [arr,changer] = useState([])

const [count,change] = useState(5)

const pusher = () => {
    arr.push(count)
    changer([...arr])
}

const math = (type) => {
    if(type === '0') {
        change(5)
    }

    if(type === '*') {
        change(count * 5)
    }

    if(type === '/') {
        change(count / 5)
    }

    if(type === '+') {
        change(count + 5)
    }

    if(type === '-') {
        change(count - 5)
    }

}

    return (
        <div style={{marginLeft: '3vw'}}>
      <Buttonv1
      onck = {() => math('0')}
      color = 'black'
      backgroundColor = 'green'
      pardisplay = 'inline-flex'>
      0</Buttonv1>

      <Buttonv1
      onck = {() => math('*')}
      color = 'black'
      backgroundColor = 'red'
      pardisplay = 'inline-flex'>
      x</Buttonv1>

      <Buttonv1
      onck = {() => math('/')}
      color = 'black'
      backgroundColor = 'yellow'
      pardisplay = 'inline-flex'>
      /</Buttonv1>

      <Buttonv1
      onck = {() => math('+')}
      color = 'black'
      backgroundColor = 'blue'
      pardisplay = 'inline-flex'>
      +</Buttonv1>     

      <Buttonv1
      onck = {() => math('-')}
      color = 'black'
      backgroundColor = 'orange'
      pardisplay = 'inline-flex'>
      -</Buttonv1>  

      <div style={{display:'inline-block', fontSize: '6vw', marginLeft: '5vw'}}>{count}</div>
      <div>
        
      <Buttonv1
      onck = {() => pusher()}
      color = 'aqua'
      backgroundColor = 'orange'
      width = '24%'>
      save</Buttonv1>  
         
      </div>
      <div>{arr.map((item) =>(<div>{item}</div>))}</div>
        </div>
    )
}