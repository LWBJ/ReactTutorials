import React from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

function App(props) {
  return(
    <div>
      <Header />
      <p>Hello World!</p>
      <Footer />
    </div>
  )
}

function Header(props) {
  return (
    <div>
      <h1>My App</h1>
      <p>This is the header!</p>
      <br />
    </div>
  )
}

function Footer(props) {
  return(
    <div>
      <br />
      <p>This is the footer!</p>
      <p>Thanks for visiting!</p>
    </div>
  )
}
 
ReactDOM.render(<App />, document.getElementById("app"))
