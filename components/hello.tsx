"use client"

import { useState } from "react";


const Hello = () => {
  const [increment, setIncrement] = useState(0)
  function increase(){
    setIncrement(increment + 1)
    console.log("I am a client side component CSR")
  }
    console.log("I am a pre rendered server side component.")
  return (
    <>
    <div>
      Hello World! Nice to meet you
    </div>
    <button onClick={increase}>Click me</button>
    </>
  )
}

export default Hello
