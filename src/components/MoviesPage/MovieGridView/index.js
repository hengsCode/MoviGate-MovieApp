import { React } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

const MovieGridView = (props) => {
  const { movieList } = props;
  const history = useHistory();

  const handleClick = (movie) => {
    history.push({
      pathname: `/movie/${movie.original_title}`,
      state: { movieObj: movie },
    });
  };

  return (
    <div class="movie-grid-container">
      {movieList.map((movie, _) => {
        return (
          <div class="movie-grid-item-container">
            <div
              class="movie-grid-item"
              onClick={() => {
                handleClick(movie);
              }}
            >
              <img class="movie-grid-poster" src={movie.poster_path} alt="" />
              <div class="movie-grid-overview-container">
                <text class="movie-grid-overview">{movie.overview}</text>
              </div>
            </div>
            <text class="movie-grid-title">
              {movie.title}{" "}
              <img
                class="movie-grid-star"
                src="https://image.flaticon.com/icons/png/512/1828/1828884.png"
                alt=""
              />{" "}
              ({movie.vote_average})
            </text>
          </div>
        );
      })}
    </div>
  );
};

export default MovieGridView;
