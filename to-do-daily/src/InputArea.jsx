import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    
    <form onSubmit={(e)=>{e.preventDefault()}}  className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button type="submit"
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </form>
  );
}

export default InputArea;
