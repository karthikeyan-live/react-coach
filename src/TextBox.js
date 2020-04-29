import React from "react";

function TextBox(props) {
  return (
    <input type={props.anotherType} id="fname" name="fname" value={props.myValue} />
  );
}
    
export default TextBox;
