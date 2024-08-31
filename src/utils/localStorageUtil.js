export const getFavouriteFromStorage = function () {
  return JSON.parse(localStorage.getItem("favouriteMovie")) || [];
};
export const setFavouriteStorage = function (favMovie) {
  return localStorage.setItem("favouriteMovie", JSON.stringify(favMovie));
};
