import React, { useState } from "react";
import "./DropDown.css"

function DropDown({ children,openDrop, setOpenDrop}) {
  return (
    openDrop && (
      <div className="DropDown">
        <div onClick={() => setOpenDrop(false)} className="ClickToExit" />
        {children}
      </div>
    )
  );
}

export default DropDown;
