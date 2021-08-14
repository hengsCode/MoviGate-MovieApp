import { React } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./styles.css";

const MovieGridView = (props) => {
  const { movieList, type } = props;
  const { expand } = useSelector((state) => state.drawer);
  const history = useHistory();

  const handleClick = (movie) => {
    history.push({
      pathname: `/movie/${movie.original_title}`,
      state: { movieObj: movie },
    });
  };

  const scaleColour = (value) => {
    var r,
      g,
      b = 0;
    if (value < 50) {
      r = 255;
      g = Math.round(5.1 * value);
    } else {
      g = 255;
      r = Math.round(510 - 5.1 * value);
    }
    var h = r * 0x10000 + g * 0x100 + b * 0x1;
    return "#" + ("000000" + h.toString(16)).slice(-6);
  };

  return (
    <div
      className="movie-grid-container"
      style={{ transform: expand ? "translateX(50px)" : "translateX(-100px)" }}
    >
      <div className="movie-grid-header">{type}</div>
      <div className="movie-grid-content">
        {movieList.map((movie, index) => {
          return (
            <div className="movie-grid-item-container" key={index}>
              <div
                className="movie-grid-item"
                onClick={() => {
                  handleClick(movie);
                }}
              >
                <img
                  className="movie-grid-poster"
                  src={movie.poster_path}
                  alt=""
                />
                <div className="movie-grid-overview-container">
                  <div className="movie-grid-overview">{movie.overview}</div>
                </div>
              </div>
              <div className="movie-grid-title">
                {movie.title}{" "}
                <div style={{ color: scaleColour(10 * movie.vote_average) }}>
                  <img
                    className="movie-grid-star"
                    src="https://image.flaticon.com/icons/png/512/1828/1828884.png"
                    alt=""
                  />{" "}
                  {movie.vote_average}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieGridView;
