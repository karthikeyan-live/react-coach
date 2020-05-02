import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TextBox from "./TextBox";
import Button from "./Button";

function onClickValueParent(_val) {
  alert("Clicked from Parent" + _val);
}

const ButtonValue = "Button Click Constant";

function App() {

const [val1,setVal1] = React.useState([]);
const [values,setValues] = useState({'val1':'','val2':''});

  function onchage(event){
    values[event.target.name] = event.target.value;
    setValues({...values});

console.log("values", values);
  }

  const add = (msg)=>{
    console.log('add', msg);
  }

  return (
    <div className="App">
      <header className="App-header">

      Value 1 : <TextBox value={values.val1} type="text" name="val1" onChange={(e)=>onchage(e)}/>
      Value 2 : <TextBox value={values.val2} name="val2" type="text" onChange={(e)=>onchage(e)}/>
      Result :  <TextBox value="" type="text" />

      <Button value={'Add'} onClickEvent={()=>add(values.val1)}/>
      <Button value={'Add'} onClickEvent={()=>add('hi')}/>
      <Button value={'Add'} onClickEvent={()=>add('hi')}/>


        ---------------------------------

        <TextBox value="Surendar" type="text" />

        <Button value='with click event' onClickEvent={() => onClickValueParent('Test sending value')} />

        <Button value={ButtonValue} />
      </header>
    </div>
  );
}

export default App;
