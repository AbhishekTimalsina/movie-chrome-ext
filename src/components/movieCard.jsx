import React, { useEffect, useState } from "react";
import { setFavouriteStorage } from "../utils/localStorageUtil";

const MovieCard = function ({ movieData, setFavourite, favourite }) {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    let isFavMovie = favourite.some((mv) => {
      return mv.id === movieData.id;
    });
    if (isFavMovie) {
      setIsFavourite(true);
    }
  }, []);

  function handleAddToFavourite() {
    let newMovieData = {
      ...movieData,
      favourite: !isFavourite,
    };
    let newFavouriteMovies = [...favourite, newMovieData];
    let alreadyAddedToFavourite = favourite.some((mv) => {
      return mv.id === movieData.id;
    });
    if (alreadyAddedToFavourite) {
      newFavouriteMovies = favourite.filter((mv) => {
        return mv.id !== movieData.id;
      });
    }
    setFavourite(newFavouriteMovies);
    setFavouriteStorage(newFavouriteMovies);
    setIsFavourite(!isFavourite);
  }
  console.log(movieData);
  return (
    <div className="card">
      <div>
        <img
          className="movie-img"
          src={
            movieData.poster_path
              ? `https://image.tmdb.org/t/p/original/${movieData.poster_path}`
              : "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
          }
        />
      </div>
      <h3>{movieData.title}</h3>
      <div className="favourite-btn_wrapper">
        <p className="favourite-btn" onClick={handleAddToFavourite}>
          {!isFavourite ? "Add to favourite" : "Remove from favourite"}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
