import React from "react";

// W3 Reference
// <button type="button">Click Me!</button>

function onClickValueChild() {
  debugger;
  alert("Clicked from Child");
}

function Button(props) {

    React.useState()
  return (
    <>
      <input
        type="button"
        value={props.myvalue}
        onClick={props.onClickEvent || onClickValueChild}
      />
    </>
  );
}
export default Button;
