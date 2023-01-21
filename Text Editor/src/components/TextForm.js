import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const changeUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");

  };

  const changeLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");

  };

  const clearText = () =>{
    setText('');
    props.showAlert("Text Cleared", "success");
  };

  const camelCase = () =>{
    let newText = text.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join('');
    setText(newText);
    props.showAlert("Converted to CamelCase", "success");
  };

  const copyText = () =>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
    document.getSelection().removeAllRanges();
  };


  const removeExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");

  };

  //convert to title case
  const titleCase = () =>{
    let newText = text.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    setText(newText);
    props.showAlert("Converted to Title Case", "success");
  };


  return (
    <>
      <div className="container" style={{color:props.mode==='light' ? '#042743':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea 
            style={{backgroundColor:props.mode==='dark' ? 'grey':'white'}}
            className={`form-control z-depth-1 ${props.mode==='dark' ? 'text-white':'text-dark'}`}
            id="exampleFormControlTextarea6"
            rows="8"
            value={text}
            onChange={handleChange}
            placeholder="Write something here..."
          ></textarea>
        </div>

        <button onClick={changeUpperCase} className="btn btn-primary mx-2 my-2">
          Convert to upper case
        </button>

        <button onClick={changeLowerCase} className="btn btn-primary mx-2 my-2">
          Convert to Lower case
        </button>

        <button onClick={clearText} className="btn btn-primary mx-2 my-2">
          Clear Text
        </button>

        <button onClick={copyText} className="btn btn-primary mx-2 my-2">
          Copy Text
        </button>

        <button onClick={removeExtraSpaces} className="btn btn-primary mx-2 my-2">
          Remove Extra Spaces
        </button>

        <button onClick={camelCase} className="btn btn-primary mx-2 my-2">
          Camel Case
        </button>

        <button onClick={titleCase} className="btn btn-primary mx-2 my-2">
          Convert Into Title Case
        </button>

      </div>
      <div className="container my-4" style={{color:props.mode==='light' ? '#042743':'white'}}>
        <h2>Your Text Summary</h2>
        <h6>{text.split(" ").length -1} words and {text.length} characters</h6>
        <p>Reading time {0.008*text.split(" ").length} Minute</p>
        <h2>Preview</h2>
        <div className="container">
        <p>{text}</p>
        </div> 
      </div>
    </>
  );
}

export default TextForm;
