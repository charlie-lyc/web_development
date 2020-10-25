import React from "react";
import ReactDOM from "react-dom";

/* JSX Attribute: OK -VS- HTML Global Attribute: Some Warnings */
/* JSX Attribute Names are followed by Covention of JS, not HTML ex) 'camelCase' */
/* Self Closing Tag without "/" is forgiven in HTML, but it is NOT available in JSX */
/* Images from "https://picsum.photos" */
const url = "https://picsum.photos/300";

ReactDOM.render(
  <div>
    /* <h1 class="heading">My Favourite Foods</h1> */
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Random Image
    </h1>
    <img src={url} alt="random image" />
    <img src={url + "?grayscale"} alt="random gray scale image" />
  </div>,
  document.getElementById("root")
);
