import { React, useState } from "react";
import { useSelector } from "react-redux";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import "./styles.css";

const GenreCarousel = (props) => {
  const { label, list, handleClick } = props;
  const { expand } = useSelector((state) => state.drawer);
  const [scrollLock, setScrollLock] = useState(true);

  const handleScrollLeft = () => {
    if (scrollLock) {
      setScrollLock(false);
      let carousel = document.querySelector(`#${label}-carousel`);
      let carouselItem = document.querySelector(".genre-carousel-item");
      carousel.scrollLeft -= carouselItem.clientWidth;
      let id = setTimeout(() => {
        setScrollLock(true);
      }, 500);
      return () => {
        clearTimeout(id);
      };
    }
  };
  const handleScrollRight = () => {
    if (scrollLock) {
      setScrollLock(false);
      let carousel = document.querySelector(`#${label}-carousel`);
      let carouselItem = document.querySelector(".genre-carousel-item");
      carousel.scrollLeft += carouselItem.clientWidth;
      let id = setTimeout(() => {
        setScrollLock(true);
      }, 500);
      return () => {
        clearTimeout(id);
      };
    }
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
    <>
      <div className="genre-header">{label}</div>
      <div
        className="genre-carousel-container"
        style={{
          width: expand
            ? "calc(100vw - (100vw - 510px)/4)"
            : "calc(100vw - 200px)",
        }}
      >
        <div className="genre-carousel-scroll" onClick={handleScrollLeft}>
          <ArrowLeft class="arrow-scroll-icon" fontSize="large" />
        </div>
        <div
          className="genre-carousel-scroll"
          onClick={handleScrollRight}
          style={{ right: 0 }}
          fontSize="large"
        >
          <ArrowRight class="arrow-scroll-icon" />
        </div>

        <div id={`${label}-carousel`} className="genre-carousel">
          {list.map((movie, _) => {
            return (
              <div
                className="genre-carousel-item"
                key={movie.id}
                onClick={() => {
                  handleClick(movie);
                }}
              >
                <img src={movie.backdrop_path} alt="" />
                <div className="genre-carousel-item-description">
                  <div>
                    <div className="genre-carousel-item-description-header">
                      {movie.title}
                      <div
                        className="genre-carousel-item-rating"
                        style={{ color: scaleColour(10 * movie.vote_average) }}
                      >
                        {movie.vote_average}/10
                      </div>
                    </div>
                    <div className="genre-carousel-item-genres">
                      {movie.genre_list.map((genre, index) => {
                        if (index == movie.genre_list.length - 1) {
                          return <>{genre}</>;
                        } else {
                          return <>{genre}, </>;
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GenreCarousel;
