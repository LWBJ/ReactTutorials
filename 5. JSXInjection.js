import React from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

//This code shows how JS code can be injected inside JSX. 
//It looks at direct injection, as well as how to use control flow.


//Set your favourite number
let favNum = 371

//External control flow to check if favNum is odd or even.
let numType
if (favNum%2 === 0) {
  numType = "even"
} else {
  numType = "odd"
}

let app = (<div>
    //This code shows how injection is done using curly braces
    <p>2 + 2 = 2 + 2</p>
    <p>2 + 2 = {2+2}</p>
    <p>My favourite number is {favNum}</p>
	
	//JSX with 2 approaches to control flow:
    <p>JSX with control flow outside: {favNum} is an {numType} number</p>
    <p>JSX with ternary operator: {favNum} is an {favNum%2 === 0 ? "even" : "odd"} number</p>
</div>)
 
ReactDOM.render(app, document.getElementById("app"))
