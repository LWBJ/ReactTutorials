import React from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

let myVar = <p>Hello World but in a variable</p>
let myList = [
  <p>Hello World but in the first element of a list</p>, 
  <p>Hello World but in the second element of a list</p>
]
 
ReactDOM.render(myVar, document.getElementById("app"))
//ReactDOM.render(myList[1], document.getElementById("app"))
//ReactDOM.render(myList[1], document.getElementById("app"))