import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(term);
    //TODO: Make sure we call
    // callback from parent component
  };
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <label>Video Search</label>
        <input type="text" value={term} onChange={onInputChange} />
      </form>
    </div>
  );
};

export default SearchBar;
