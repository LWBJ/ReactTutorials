import React from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"

let app = (<div>
    <p>Only one set of outer tags allowed!</p>
    <p>JSX across multiple lines must be enclosed in brackets!</p>
    <p className="highlight">For CSS, "class" is now "className"</p>
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg" height="500px"
      alt="Images must have self closing tags" 
    />
</div>)
 
ReactDOM.render(app, document.getElementById("app"))
