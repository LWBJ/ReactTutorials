//This code shows how to implement state in React using hooks
//This app shows a count and a button. On pressing the button, the count increases. For now we work on the first half of the functionality

//<App /> has count as a state variable, keeping track of the current count. It passes this data as a prop to <Display />
function App(props) {
  //This is the destructuring syntax. The argument of useState is 0, hence the initial value of count is 0
  let [count, setCount] = React.useState(0)
  
  return (
    <div>
	  {/*The value of the state is passed to <Display /> as a prop.*/}
      <Display count={count}/>
    </div>
  )
}

//<Display /> receives data as a prop and displays it as text.
function Display(props) {
  return(
    <div>
      <h2>This is the count:</h2>
      <h1>{props.count}</h1>
    </div>
  )
}
 
ReactDOM.render(<App />, document.getElementById("app"))
