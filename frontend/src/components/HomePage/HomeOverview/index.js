import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./styles.css";
import GenreCarousel from "./GenreCarousel";
import { CircularProgress } from "@material-ui/core";

const HomeOverview = () => {
  const [romanceList, setRomanceList] = useState([]);
  const [thrillerList, setThrillerList] = useState([]);
  const [cartoonList, setCartoonList] = useState([]);
  const [trendingList, setTrendingList] = useState([]);
  const [favouritesList, setFavouritesList] = useState([]);

  const [loading, setLoading] = useState(true);
  const { expand } = useSelector((state) => state.drawer);
  const history = useHistory();

  useEffect(() => {
    fetch("/genre/16")
      .then((response) => response.json())
      .then(({ results }) => {
        setCartoonList(results);
      });
    fetch("/genre/53")
      .then((response) => response.json())
      .then(({ results }) => {
        setThrillerList(results);
      });
    fetch("/genre/10749")
      .then((response) => response.json())
      .then(({ results }) => {
        setRomanceList(results);
      });
    fetch("/trending")
      .then((response) => response.json())
      .then(({ results }) => {
        setTrendingList(results);
      });
    fetch("/favourites")
      .then((response) => response.json())
      .then(({ results }) => {
        setFavouritesList(results);
      });

    let id = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, []);

  const handleClick = (movie) => {
    history.push({
      pathname: `/movie/${movie.original_title}`,
      state: {
        movieObj: movie,
      },
    });
  };

  return (
    <>
      {loading ? (
        <CircularProgress class="progress-icon" />
      ) : (
        <div
          className="home-overview-container"
          style={{
            transform: expand ? "translateX(300px)" : "translateX(-10px)",
          }}
        >
          <GenreCarousel
            label="trending"
            list={trendingList}
            handleClick={handleClick}
          />
          <GenreCarousel
            label="top rated"
            list={favouritesList}
            handleClick={handleClick}
          />
          <GenreCarousel
            label="cartoon"
            list={cartoonList}
            handleClick={handleClick}
          />
          <GenreCarousel
            label="thriller"
            list={thrillerList}
            handleClick={handleClick}
          />
          <GenreCarousel
            label="romance"
            list={romanceList}
            handleClick={handleClick}
          />
        </div>
      )}
    </>
  );
};

export default HomeOverview;
