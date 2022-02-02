import React from "react";
import("./InputOption.css");

function InputOption({ Icon, color, title }) {
  return (
    <div className="inputOption">
      <Icon style={{ color }} />
      <p>{title}</p>
    </div>
  );
}

export default InputOption;
