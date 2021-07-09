import React, { useEffect, useRef } from "react";
import "./Editor.css";

function Editor({ setInput, placeHolder, input }) {
   
  const inputBox = useRef(null);
  useEffect(()=>{
    if(input){
      inputBox.current.textContent = input;
      inputBox.current.classList.remove("input_blank")
    }
  },[])

  useEffect(()=>{
    if(input===""){
      inputBox.current.textContent = "";
      inputBox.current.classList.add("input_blank")
    } 
  },[input])

  //The editable div placeholder controller
  const handleEditor = (e) => {
    setInput(e.target.textContent);
    if (e.target.textContent === "") e.target.classList.add("input_blank");
    else e.target.classList.remove("input_blank");
  };

  return (
    <div className="Editor">
      <div
        ref={inputBox}
        onInput={handleEditor}
        className="input input_blank"
        contentEditable="true"
        aria-placeholder={placeHolder}
      />
    </div>
  );
}

export default Editor;
