import MovieCard from "../components/movieCard";
import { Link } from "react-router-dom";

export default function Favourites({ fav, setFavourite }) {
  let favourites = fav;
  return (
    <>
      <h1 className="home-btn">
        <Link to="/">Home</Link>
      </h1>

      <div className="container">
        {favourites.length > 0 ? (
          favourites.map(function (mv) {
            return (
              <MovieCard
                key={mv.id}
                movieData={mv}
                favourite={fav}
                setFavourite={setFavourite}
              />
            );
          })
        ) : (
          <div>There is no favourite Movies</div>
        )}
      </div>
    </>
  );
}
