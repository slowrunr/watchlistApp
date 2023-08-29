const STATUS_OUT_OF_DATA_CLASSNAME = "border-red";

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
  watchList.push(watchListItem);
  console.log(watchList);
  movieTitleInputNode.value = "";
};

addMovieBtnNode.addEventListener("click", addMovieHandler);
