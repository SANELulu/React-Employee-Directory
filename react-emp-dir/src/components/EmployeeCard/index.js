import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="container">
      <div className="card row d-flex  align-items-center">
        <div className = "col-6">
        <img src={props.image} className="card-img-top" alt={props.name}></img>
        <div className="card-body">
          <h5 className="card-title">Name: {props.name}</h5>
          <p className="card-text">Location: {props.location}</p>
          <p className="card-text">Contact: {props.phone}</p>
          </div>
        </div>
      </div>
      <br></br>
      </div>
  ); 
}

export default EmployeeCard;
