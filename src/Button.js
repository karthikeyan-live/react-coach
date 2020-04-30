import React from "react";

// W3 Reference
// <button type="button">Click Me!</button>


function Button(props) {

const [name, setName]  = React.useState('Pushpanathan');

function onClickValueChild() {
  console.log(setName);
  setName('Maniraj');
}

  return (
    <>
      <input
        type="button"
        value={name}
        onClick={props.onClickEvent || onClickValueChild}
      />
    </>
  );
}
export default Button;
