import React from "react";
import { Styledbutton } from "./button";
import { useState } from "react";

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
      <Styledbutton 
      onck = {() => math('0')}
      display = {'inline-flex'} 
      pardisplay = {'inline-flex'} 
      radius = {'0.3vw'} 
      font = {'9vw'} 
      margin = {'1vw 0vw 3vw 3vw'} 
      height = '10vw'
      width = '10vw' 
      backgroundColor = {'green'} 
      color = {'black'}
      lh = {'0vw'}>
      0
      </Styledbutton>
      <Styledbutton 
      onck = {() => math('*')}
      display = {'inline-flex'} 
      pardisplay = {'inline-flex'} 
      radius = {'0.3vw'} 
      font = {'9vw'} 
      margin = {'1vw 0vw 3vw 3vw'} 
      height = {'10vw'} 
      width = {'10vw'} 
      backgroundColor = {'red'} 
      color = {'black'}
      lh = {'0vw'}>
      x
      </Styledbutton>
      <Styledbutton 
      onck = {() => math('/')}
      display = {'inline-flex'} 
      pardisplay = {'inline-flex'} 
      radius = {'0.3vw'} 
      font = {'9vw'} 
      margin = {'1vw 0vw 3vw 3vw'} 
      height = {'10vw'} 
      width = {'10vw'} 
      backgroundColor = {'yellow'} 
      color = {'black'}
      lh = {'0vw'}>
      /
      </Styledbutton>
      <Styledbutton 
      onck = {() => math('+')}
      display = {'inline-flex'} 
      pardisplay = {'inline-flex'} 
      radius = {'0.3vw'} 
      font = {'9vw'} 
      margin = {'1vw 0vw 3vw 3vw'} 
      height = {'10vw'} 
      width = {'10vw'} 
      backgroundColor = {'blue'} 
      color = {'black'}
      lh = {'0vw'}>
      +
      </Styledbutton>
      <Styledbutton 
      onck = {() => math('-')}
      display = {'inline-flex'} 
      pardisplay = {'inline-flex'} 
      radius = {'0.3vw'} 
      font = {'9vw'} 
      margin = {'1vw 0vw 3vw 3vw'} 
      height = {'10vw'} 
      width = {'10vw'} 
      backgroundColor = {'orange'} 
      color = {'black'}
      lh = {'0vw'}>
      -
      </Styledbutton>

      <div style={{display:'inline-block', fontSize: '6vw', marginLeft: '5vw'}}>{count}</div>
      <div>
      <Styledbutton 
      onck = {() => pusher()}
      display = {'inline-flex'} 
      pardisplay = {'inline-flex'} 
      radius = {'0.3vw'} 
      font = {'3vw'} 
      margin = {'1vw 0vw 3vw 3vw'} 
      height = {'7vw'} 
      width = {'23vw'} 
      backgroundColor = {'orange'} 
      color = {'black'}
      lh = {'0vw'}>
      save
      </Styledbutton>
      </div>
      <div>{arr.map((item) =>(<div>{item}</div>))}</div>
        </div>
    )
}