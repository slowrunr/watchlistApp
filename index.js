const ITEMS_FROM_STORAGE = "stored-items";
const MARK_AS_WATCHED = "watched";
const STATUS_OUT_OF_DATA_CLASSNAME = "border-red";

const movieTitleInputNode = document.getElementById("movieInput");
const addMovieBtnNode = document.getElementById("addToWatchBtn");
const movieListNode = document.getElementById("movieList");
const checkboxNode = document.querySelector("checkbox");
const watchlistItemTitle = document.getElementById("watchlist-item-title");

let watchlist = [];

const addToWatchBtnHandler = () => {
  if (!movieTitleInputNode.value) {
    movieTitleInputNode.classList.add(STATUS_OUT_OF_DATA_CLASSNAME);
    return;
  }
  movieTitleInputNode.classList.remove(STATUS_OUT_OF_DATA_CLASSNAME);
  const watchlistItem = movieTitleInputNode.value;
  movieTitleInputNode.value = "";
  watchlist.push(watchlistItem);
  saveItemsInLocalStorage();
  console.log(watchlist);

  let watchlistHTML = "";
  watchlist.forEach((element) => {
    watchlistHTML += `<li id="watchlistItemWrapper" class="watchlist-item-wrapper">
      <div class="checkbox-wrapper">
      <button id="checkbox" class="checkbox" data-action="watched"></button>
      </div>
      <p id="watchlistItemTitle" class="watchlist-item-title">${element}</p>
      <div class="close-btn-wrapper">
        <button id="removeFromListBtn"
        class="remove-from-list-btn"
        data-action="remove"></button>
      </div>
    </li>`;
  });
  movieListNode.innerHTML = `<ul id="watchlistHTML">${watchlistHTML}</ul>`;
};

// `<div id="${movie.id}" class="${cssClass}">
//   <div class="checked__button-wrapper">
//      <button class="checked__button" data-action="done">
//         <img class="checked__button-img" src="images/unchecked.png" alt="checked button">
//      </button>
//       <p class="movie__name">${movie.text}</p>
//   </div>
//   <div class="delete__button-wrapper">
//       <button class="delete__button" data-action="delete">
//           <img class="delete__btn-img" src="images/delete-btn.png" alt="Delete button image">
//       </button>
//   </div>`;

const saveItemsInLocalStorage = () => {
  localStorage.setItem(ITEMS_FROM_STORAGE, JSON.stringify(watchlist));
};

const getItemsFromLocalStorage = () => {
  if (localStorage.getItem(ITEMS_FROM_STORAGE)) {
    movies = JSON.parse(localStorage.getItem(ITEMS_FROM_STORAGE));
  }
  return watchlist;
};
getItemsFromLocalStorage();

const markIfWatchedHandler = () => {
  checkbox.style.background = "#6532f8";
};

// const markItemAsWatched = (event) => {

// };

//   if (e.target.dataset.action !== "done") {
//     return;
//   }

//   const parentNode = e.target.closest(".movie__list-container");

//   const id = Number(parentNode.id);

//   const movie = watchList.find((movie) => movie.id === id);

//   movie.done = !movie.done;

//   parentNode.classList.toggle("movie__list-container-done");

//   saveItemsInLocalStorage();
// };

addMovieBtnNode.addEventListener("click", addToWatchBtnHandler);
movieListNode.addEventListener("click", (event) => {
  if (event.target.classList.contains("checkbox")) {
    markIfWatchedHandler(event.target);
  }
});
// movieListNode.addEventListener('click', removeFromListHandler);
