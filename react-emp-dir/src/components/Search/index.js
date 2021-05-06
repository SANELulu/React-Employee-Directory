import React from "react";
// import "./style.css";

function SearchBar(props) {

    function searchInput(event) {
        event.preventDefault();
        console.log('The button was clicked.');
      }

    return (
        <div>
            <form class="">
                <input type="text" id="search" placeholder="Search.."></input>
                <button type="button" onClick={searchInput} class="btn btn-primary">Search</button>
            </form>
        </div>
    )
}


export default SearchBar;
