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
    history.push({
      pathname: `/search/${search}`,
      state: { filter: `search/${search}` },
    });
  };

  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      <div
        className="home-header-container"
        style={{
          opacity: scrollY === 0 || searching ? 1 : 0.5,
        }}
      >
        <div className="home-header-logo" onClick={handleClick}>
          <div className="home-header-logo-text">MovieApp</div>
          <img
            className="home-header-logo-img"
            src="https://icon-library.com/images/movies-icon-png/movies-icon-png-8.jpg"
            alt=""
          />
        </div>
        <div className="home-header-search-container">
          <input
            type="text"
            className="home-header-search"
            placeholder="search a movie..."
            value={search}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <img
            className="home-header-search-icon"
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
