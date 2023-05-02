import React from "react";
import "./Type.scss";
import TypeCard from "../TypeCard/TypeCard";

const Type = () => {
  return (
    <div className="Type">
      <div className="left">
        <div className="left-container">
          <div className="firstline">SELECT YOUR</div>
          <div className="firstline">LIVING PREFERENCE</div>
        </div>
      </div>
      <div className="right">
        <div className="line">
            <TypeCard type='BUILDER FLOOR'/>
            <TypeCard type='SOCIETY'/>
        </div>
        <div className="line two">
            <TypeCard type='BUILDER FLOOR'/>
            <TypeCard type='SOCIETY'/>
        </div>
      </div>
    </div>
  );
};

export default Type;
