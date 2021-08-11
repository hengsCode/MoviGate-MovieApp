import { React } from "react";
import { Header, Drawer } from "../../HomePage";
import { genres } from "../../../assets/movie-api/genres.json";
import "./styles.css";

const MovieView = (props) => {
  const { movieObj } = props.history.location.state;
  return (
    <>
      <Header />
      <Drawer />
      <div class="movie-view-container">
        <div class="movie-view-content">
          <div class="movie-view-main">
            <img class="movie-view-poster" src={movieObj.poster_path} alt="" />
            <div class="movie-view-information">
              <text class="movie-view-title">{movieObj.title}</text>
              <text class="movie-view-info-header">Score:</text>
              <text class="movie-view-info-content">
                {movieObj.vote_average} / 10
              </text>
              <text class="movie-view-info-header">Genres:</text>
              <div>
                {movieObj.genre_ids.map((genreID, index) => {
                  let genreObj = genres.find((e) => e.id === genreID);
                  if (index === movieObj.genre_ids.length - 1) {
                    return (
                      <text class="movie-view-info-content">
                        {genreObj.name}
                      </text>
                    );
                  } else {
                    return (
                      <text class="movie-view-info-content">
                        {genreObj.name},{" "}
                      </text>
                    );
                  }
                })}
              </div>
              <text class="movie-view-info-header">Summary:</text>
              <text class="movie-view-info-content">{movieObj.overview}</text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieView;
