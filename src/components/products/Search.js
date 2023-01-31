import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(keyword);
    if (keyword.trim && keyword) {
      navigate("/search/" + keyword);
    } else {
      navigate("/");
    }
  };
  return (
    <form onSubmit={handleSearch}>
      <div className="input-group">
        <input
          type="text"
          id="search_field"
          className="form-control"
          value={keyword}
          onChange={({ target }) => setKeyword(target.value)}
          placeholder="Enter Product Name ..."
        />
        <div className="input-group-append">
          <button type="submit" id="search_btn" className="btn">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Search;
