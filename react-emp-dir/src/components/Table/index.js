import React, { useState, useEffect } from "react";
import Row from "../Row";
// import "./style.css";
function Table({ data }) {
  return (
    <table className="table m-5">
      <thead>
        <tr>
          <th scope="col">FIRST NAME</th>
          <th scope="col">LAST NAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">USERNAME</th>
        </tr>
      </thead>
      {data.map((row) => (
        <Row
          key={Math.random().toString(36).substr(2, 9)}
          name={row.name.first}
          lastName={row.name.last}
          email={row.email}
          username={row.login.username}
        />
      ))}
    </table>
  );
}

export default Table;
