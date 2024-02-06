import React from "react"
import ReactDOM from "react-dom"

const page = (
    <div>
        <img src="./react-logo.png" alt="React logo" width="40px"></img>
        <h1> Fun Facts about React </h1>
        <ul>
            <li>Was first released in 2013 </li>
            <li>Was originally created by John Walke</li>
            <li>Has over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Pwoers thousands of enterprise apps (including mobile apps) </li>
        </ul>
    </div>
)

ReactDOM.render(page, document.querySelector("#root"))
/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.




Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

