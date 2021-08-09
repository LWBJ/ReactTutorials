import React from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

function handleClick() {
  alert("Hello!")
}

//A function that echoes different things depending on its arguments
function echo(volume) {
  if (volume === "loud") {
    alert("LOUD!")
  } else if (volume === "soft") {
    alert("shh...")
  }
}

let app = (<div>
    <p>Button</p>
    <button onClick={handleClick}>Press Me!</button>
    
    <p>Button but with an inline function</p>
    <button onClick={() => alert("This alert brought to you by the inline function")}>Press Me Too!</button>
    
    <p>Buttons but using function inside an inline function</p>
    <button onClick={() => echo("loud")}>
      Loud
    </button>
    
    <button onClick={() => echo("soft")}>
      Soft
    </button>
</div>)
 
ReactDOM.render(app, document.getElementById("app"))
