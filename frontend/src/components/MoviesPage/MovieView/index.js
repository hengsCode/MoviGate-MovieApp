import { React } from "react";
import "./styles.css";

const MovieView = (props) => {
  const { movieObj } = props.history.location.state;

  const handleClick = async () => {
    await fetch(`/trailer/${movieObj.id}`)
      .then((response) => response.json())
      .then(({ trailer }) => window.open(trailer));
  };

  return (
    <>
      <div className="movie-view-container">
        <div className="movie-view-content">
          <div className="movie-view-main">
            <div className="movie-view-poster-container">
              <img
                className="movie-view-poster"
                src={movieObj.poster_path}
                alt=""
              />
              <div className="movie-view-trailer-label" onClick={handleClick}>
                View Trailer
              </div>
            </div>
            <div className="movie-view-information">
              <div className="movie-view-title">{movieObj.title}</div>
              <div className="movie-view-info-header">Score:</div>
              <div className="movie-view-info-content">
                {movieObj.vote_average} / 10
              </div>
              <div className="movie-view-info-header">Genres:</div>
              <div>
                {movieObj.genre_list.map((genre, index) => {
                  return <div className="movie-view-info-content">{genre}</div>;
                })}
              </div>
              <div className="movie-view-info-header">Summary:</div>
              <div className="movie-view-info-content">{movieObj.overview}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieView;
