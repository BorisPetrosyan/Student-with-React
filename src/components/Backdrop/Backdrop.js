import React from "react";
import "./backDrop.css";

const Backdrop = (props) => (
  <div className="Backdrop" onClick={props.onClick} />
);

export default Backdrop;
