import React from "react";

 function onchage(){
    console.log("child onchage");
 
  }

function TextBox(props) {
  return (
    <input type={props.type} id="fname" name={props.name || ''} value={props.value} onChange={props.onChange || onchage } />
  );
}
    
export default TextBox;
