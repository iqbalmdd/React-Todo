import React, { useState } from 'react'


export default function Hooks() {

const [count, setCount] = useState(0)
const [input, setInput] = useState("")

const handleClick = () => {
    setCount(count + 1)
}
const handleInput = (event) => {
    setInput(event.target.value)
}


  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={handleClick}>Add Task</button>
    <input type="text" onChange={handleInput} />
    <h1>you type: {input}</h1>
    </>
  )
}
