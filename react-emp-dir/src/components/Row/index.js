import React, { useState, useEffect } from "react";

function Row(props) {
  return (
    <tbody>
      <tr>
        <td scope="row">{props.name}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.username}</td>
      </tr>
    </tbody>
  );
}

export default Row;
