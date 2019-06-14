import React from "react";
import "./style.css";

function PartsSpecCard(props) {
  return (
    <div className="card">
      <div className="card-img-top">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h4 className="card-title">{props.specialty}</h4>
        <p className="card-text">Contact: {props.contact}</p> 
      </div>
    </div>
  );
}

export default PartsSpecCard;
