import { React, useEffect, useState } from "react";
import { Header, Footer, Drawer } from "../../components/HomePage";
import { MovieGridView } from "../../components/MoviesPage";
import movieDB from "../../assets/movie-api/moviedata.json";
import "./styles.css";

const Movies = (props) => {
  const { filter } = props.location.state;
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (filter === "goat") {
      setMovieList(movieDB);
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
