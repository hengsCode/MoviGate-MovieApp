import { CircularProgress } from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { MovieGridView } from "../../components/MoviesPage";
import "./styles.css";

const Movies = (props) => {
  const { filter } = props.history.location.state;
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  let type = filter;
  if (type === "comingsoon") {
    type = "coming soon";
  } else if (type.includes("search/")) {
    type = `results for "${type.substring(7)}":`;
  }

  useEffect(async () => {
    setLoading(true);
    await fetch(`/${filter}`)
      .then((response) => response.json())
      .then(({ results }) => {
        setMovieList(results);
      });
    let id = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [filter]);

  return (
    <>
      <div className="movie-page-container">
        {loading ? (
          <CircularProgress class="progress-icon" />
        ) : (
          <MovieGridView movieList={movieList} type={type} />
        )}
      </div>
    </>
  );
};

export default Movies;
