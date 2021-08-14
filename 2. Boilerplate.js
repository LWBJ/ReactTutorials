//This code renders Hello World. 
//The function called is ReactDOM.render(), which has 2 arguments.
//The first argument is the item to render, in this case it is <p>Hello World</p>
//The second argument is where in the HTML document to render. In this case, it is the <div> with the id of "app"
ReactDOM.render(
  <p>Hello World</p>, 
  document.getElementById("app")
)