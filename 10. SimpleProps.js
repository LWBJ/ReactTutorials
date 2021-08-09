import React from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

function App(props) {
  let newFavColor = "blue"
  let newFavNum = 3
  
  return(
    <div>
      <h2>Old favourites</h2>
      <Display favColour="yellow" favNum={2} />
	  
      <h2>New favourites</h2>
      <Display favColour={newFavColor} favNum={newFavNum} />
    </div>
  )
}

function Display(props) {
  return (
    <div>
      <p>My favourite colour is {props.favColour}</p>
      <p>My favourite number is {props.favNum}, it is an {props.favNum%2===0?"even":"odd"} number</p>
    </div>
  )
}
 
ReactDOM.render(<App />, document.getElementById("app"))
