import { useState } from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Favourites from "./pages/favourite";
import "./App.css";
import { getFavouriteFromStorage } from "./utils/localStorageUtil";
// Import your components

function App() {
  const [movie, setMovie] = useState([]);
  const [favourite, setFavourite] = useState(getFavouriteFromStorage());
  console.log(favourite);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movie={movie}
              setMovie={setMovie}
              setFavourite={setFavourite}
              favourite={favourite}
            />
          }
        />
        <Route
          path="/favourite"
          element={
            <Favourites
              movie={movie}
              fav={favourite}
              setFavourite={setFavourite}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
