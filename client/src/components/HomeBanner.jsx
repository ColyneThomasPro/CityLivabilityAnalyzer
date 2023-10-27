import React, { useState } from "react";
import "./../styles/HomeBanner.css";
import searchIcon from "./../assets/img/loupe.png";

function HomeBanner() {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (searchTerm) => {
    // api to fetch the search result
    console.log("search", searchTerm);
  };

  return (
    <header id="banner-container">
      <div className="mask-black-filter">
        <div className="polygon" />
        <h1 className="site-title">Ville Parfaite.fr</h1>
        <div className="searchbar">
          <input
            type="text"
            value={value}
            onChange={onChange}
            className="searchbar-input"
            placeholder="recherchez une ville..."
          />
          <button onClick={() => onSearch(value)} className="searchbar-btn">
            <img
              src={searchIcon}
              alt="search icon button"
              className="searchbar-btn-icon"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default HomeBanner;
