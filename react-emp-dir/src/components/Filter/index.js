import React, { useState, useEffect } from "react";
// import "./style.css";
function Filter({ data }) {
  const employeeFilter = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <form class="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          name="filter"
          placeholder="Search Employees..."
          aria-label="Search"
          onChange={employeeFilter}
        ></input>
      </form>
    </nav>
  );
}

export default Filter;
