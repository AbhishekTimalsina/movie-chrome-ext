import { useState, useEffect } from "react";
import { API_KEY, BASE_URL } from "../utils/apiUrl";
import { Link } from "react-router-dom";

export default function SearchBar({ setMovie }) {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    searchMovie(searchInput);
  }, []);

  const searchMovie = async (title) => {
    let url = `${BASE_URL}/3/search/movie?query=${title}&api_key=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    setMovie(data.results);
  };

  function inputHandler(e) {
    setSearchInput(e.target.value);
  }

  function hitKey(e) {
    if (e.keyCode != 13) return;
    searchMovie(searchInput);
  }

  return (
    <div className="search-bar">
      <div className="search">
        <input
          id="search-input"
          className="search-input"
          placeholder="Search movies"
          type="search"
          value={searchInput}
          onChange={inputHandler}
          onKeyDown={hitKey}
        />
      </div>
      <div>
        <Link to="/favourite">Favourites</Link>
      </div>
    </div>
  );
}
