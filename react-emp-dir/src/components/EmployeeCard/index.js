import React from "react";
import "./style.css";

function EmployeeCard(props) {

  return (
    <tbody>
    <tr>
      <th scope="row"></th>
      <td>{props.name}</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    </tbody> 




    // <div className="container">
    //   <div className="card row d-flex  align-items-center">
    //     <div className = "col-6">
    //     <img src={props.image} className="card-img-top" alt={props.name}></img>
    //     <div className="card-body">
    //       <h5 className="card-title">Name: {props.name}</h5>
    //       <p className="card-text">Location: {props.location}</p>
    //       <p className="card-text">Contact: {props.phone}</p>
    //       </div>
    //     </div>
    //   </div>
    //   <br></br>
    //   </div>
  ); 
}

export default EmployeeCard;



// <table class="table table-dark">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Larry</td>
//       <td>the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>