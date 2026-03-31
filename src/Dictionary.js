import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function Search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}`);
  }

  function changeKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input
          className="form-search-bar"
          type="search"
          placeholder="Enter a word.."
          onChange={changeKeyword}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark color-white ms-2 mb-1 rounded-0"
        />
      </form>
    </div>
  );
}
