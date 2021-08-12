import { React, useEffect, useState } from "react";
import { Header, Footer, Drawer } from "../../components/HomePage";
import { MovieGridView } from "../../components/MoviesPage";
import "./styles.css";

const Movies = (props) => {
  const { filter, movieObj } = props.location.state;
  console.log(movieObj);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (filter === "goat") {
      fetch("/goats")
        .then((response) => response.json())
        .then(({ results }) => {
          setMovieList(results);
        });
    }
  }, []);

  return (
    <>
      <Header />
      <Drawer />
      <div class="movie-page-container">
        <MovieGridView movieList={movieList} />
      </div>
      <Footer />
    </>
  );
};

export default Movies;
