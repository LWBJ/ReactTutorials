import React from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

let favNum = 371
let numType
if (favNum%2 === 0) {
  numType = "even"
} else {
  numType = "odd"
}

let app = (<div>
    <p>2 + 2 = 2 + 2</p>
    <p>2 + 2 = {2+2}</p>
    <p>My favourite number is {favNum}</p>
    <p>JSX with control flow outside: {favNum} is an {numType} number</p>
    <p>JSX with ternary operator: {favNum} is an {favNum%2 === 0 ? "even" : "odd"} number</p>
</div>)
 
ReactDOM.render(app, document.getElementById("app"))
