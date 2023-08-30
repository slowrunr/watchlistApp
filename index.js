const STATUS_OUT_OF_DATA_CLASSNAME = "border-red";
ITEMS_FROM_STORAGE = "stored-items";

const movieTitleInputNode = document.getElementById("movieInput");
const addMovieBtnNode = document.getElementById("addMovieBtn");
const movieListNode = document.getElementById("movieList");

let watchList = [];

const addMovieHandler = () => {
  if (!movieTitleInputNode.value) {
    // movieTitleInputNode.classlist.add("border-red");
    return;
  }
  //   movieTitleInputNode.classlist.remove(STATUS_OUT_OF_DATA_CLASSNAME);
  const watchListItem = movieTitleInputNode.value;
  movieTitleInputNode.value = "";
  watchList.push(watchListItem);
  // saveItemsInLocalStorage();
  console.log(watchList);

  let watchListHTML = "";
  watchList.forEach((element) => {
    watchListHTML += `<li id="movieTitleWrapper" class="movie-title-wrapper">
      <div class="checkbox-wrapper">
      <button class="checkbox"></button>
      </div>
      <p id="movieTitle" class="movie-title">${element}</p>
      <div class="close-btn-wrapper">
      <img
      id="removeFromListBtn"
      class="remove-from-list-btn"
      src="icons/close-block-icon.png"
      />
      </div>
    </li>`;
  });
  movieListNode.innerHTML = `<ol>${watchListHTML}</ol>`;
};

// function saveItemsInLocalStorage() {
//   const storedMoviesTitles = watchListItem;
//   localStorage.setItem(ITEMS_FROM_STORAGE, storedMoviesTitles);
//   console.log(expensesToString);
// }

addMovieBtnNode.addEventListener("click", addMovieHandler);
