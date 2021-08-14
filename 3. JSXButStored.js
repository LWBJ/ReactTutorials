//This code stores Hello World to a variable or in a list, then renders it using the variable or list.
let myVar = <p>Hello World but in a variable</p>
let myList = [
  <p>Hello World but in the first element of a list</p>, 
  <p>Hello World but in the second element of a list</p>
]
 
ReactDOM.render(myVar, document.getElementById("app"))
//ReactDOM.render(myList[1], document.getElementById("app"))
//ReactDOM.render(myList[1], document.getElementById("app"))