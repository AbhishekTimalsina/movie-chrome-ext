import MovieCard from "../components/movieCard";
import SearchBar from "../components/searchBar";

function Home({ movie, setMovie, setFavourite, favourite }) {
  return (
    <>
      <SearchBar setMovie={setMovie} />
      <div className="container">
        {movie.length > 0 ? (
          movie.map(function (mv) {
            return (
              <MovieCard
                movie={movie}
                key={mv.id}
                movieData={mv}
                favourite={favourite}
                setFavourite={setFavourite}
              />
            );
          })
        ) : (
          <div>Search for movie</div>
        )}
      </div>
    </>
  );
}

export default Home;
