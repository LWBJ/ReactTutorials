import React, { useState } from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

function App(props) {
  let [red, setRed] = useState(66)
  let [green, setGreen] = useState(33)
  let [blue, setBlue] = useState(99)
 
  function handleClick() {
    setRed(Math.floor(Math.random() * 256))
    setGreen(Math.floor(Math.random() * 256))
    setBlue(Math.floor(Math.random() * 256))
  }
  
  return (
    <div>
      <h1>Random Color App</h1>
      <Display r={red} g={green} b={blue} />
      <Updater onClick={()=>handleClick()}/>
    </div>
  )
}

function Display(props) {
  let rgbText = "rgb("+props.r+", " + props.g+", " + props.b+")" 
  let styleObject = {
    backgroundColor: rgbText,
    height: "5em",
    width: "50%",
  }
  
  return (
    <div>
      <div style={styleObject}>
      </div>
      
      <div>
        <p>The current color is: {rgbText}</p>
      </div>
    </div>
  )
}

function Updater(props) {
  return (
    <div>
      <button onClick={props.onClick}>Re-Roll!</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
