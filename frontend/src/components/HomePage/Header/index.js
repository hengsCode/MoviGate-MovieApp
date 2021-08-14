import { param } from "jquery";
import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const Header = () => {
  const [scrollY, setScrollY] = useState(document.documentElement.scrollTop);
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const history = useHistory();
  useEffect(() => {
    window.addEventListener("scroll", () =>
      setScrollY(document.documentElement.scrollTop)
    );
    const searchBar = document.querySelector(".home-header-search");
    searchBar.addEventListener("focus", () => setSearching(true));
    searchBar.addEventListener("blur", () => setSearching(false));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`/search/${search}`).then((response) =>
      response
        .json()
        .then(({ results }) =>
          history.push({ pathname: "/goats", state: { movieObj: results } })
        )
    );
  };

  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      <div class="home-header-logo" onClick={handleClick}>
        <text class="home-header-logo-text">MovieApp</text>
        <img
          class="home-header-logo-img"
          src="https://icon-library.com/images/movies-icon-png/movies-icon-png-8.jpg"
          alt=""
        />
      </div>
      <div
        class="home-header-container"
        style={{
          opacity: scrollY === 0 || searching ? 1 : 0.5,
        }}
      >
        <div class="home-header-search-container">
          <input
            type="text"
            class="home-header-search"
            placeholder="Search by keyword..."
            value={search}
            onChange={handleChange}
          />
          <img
            class="home-header-search-icon"
            onClick={handleSubmit}
            src="https://image.flaticon.com/icons/png/512/622/622669.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Header;
