const TITLES_FROM_STORAGE = "saved-items";
const MARK_AS_WATCHED = "watched";
const STATUS_OUT_OF_DATA_CLASSNAME = "border-red";

const titleInputNode = document.getElementById("titleInput");
const addMovieBtnNode = document.getElementById("addToWatchBtn");
const watchlistNode = document.getElementById("watchlist");
// const checkboxNode = document.querySelector("checkbox");
// const watchlistItemTitle = document.getElementById("watchlist-item-title");

// создаем массив для списка для просмотра (далее - список)
let watchlist = [];

const getItemsFromLocalStorage = () => {
  if (localStorage.getItem(TITLES_FROM_STORAGE)) {
    movies = JSON.parse(localStorage.getItem(TITLES_FROM_STORAGE));
  }
  renderWatchlist();
};

const saveItemsInLocalStorage = () => {
  localStorage.setItem(TITLES_FROM_STORAGE, JSON.stringify(watchlist));
};

//+ функция вывода списка на странице
const renderWatchlist = () => {
  watchlistNode.innerHTML = "";

  watchlist.forEach((watchlistItem) => {
    const watchlistHTML = `<li id="watchlistItemWrapper" class="watchlist-item-wrapper" ${
      watchlistItem.isWatched ? "watched" : ""
    }'>
      <div class="checkbox-wrapper">
        <button id="checkbox" class="checkbox" ${
          watchlistItem.isWatched ? "watched" : ""
        }></button>
      </div>
      <p id="watchlistItemTitle" class="watchlist-item-title">${
        watchlistItem.title
      }
      </p>
      <div class="close-btn-wrapper">
        <button id="removeFromListBtn"
        class="remove-from-list-btn"
        data-action="remove"></button>
       </div>
      </li>;`;

    watchlistNode.insertAdjacentHTML("beforeend", watchlistHTML);
  });
};

//+ функция-обработчик для кнопки (add-2watch-btn) добавления названия контента в список просмотра
const addToWatchBtnHandler = () => {
  if (!titleInputNode.value) {
    titleInputNode.classList.add(STATUS_OUT_OF_DATA_CLASSNAME);
    return;
  }
  titleInputNode.classList.remove(STATUS_OUT_OF_DATA_CLASSNAME);
  const watchlistItemTitle = titleInputNode.value.trim();
  titleInputNode.value = "";
  const watchlistItem = {
    title: watchlistItemTitle,
    isWatched: false,
  };
  watchlist.push(watchlistItem);
  saveItemsInLocalStorage();
  console.log(watchlist);
  renderWatchlist();
};

// Обработчик события клика на кнопку удаления фильма
watchlistNode.addEventListener("click", (event) => {
  if (event.target.classList.contains("js-movie-remove-btn")) {
    const listItem = event.target.closest(".movie");
    const movieIndex = Array.from(listItem.parentNode.children).indexOf(
      listItem
    );
    movies.splice(movieIndex, 1);
    saveItemsInLocalStorage();
    renderWatchlist();
  }
});

// Обработчик события клика на чекбокс
watchlistNode.addEventListener("click", (event) => {
  if (event.target.classList.contains("movie-checkbox")) {
    const watchlistItem = event.target.closest(".movie");
    const movieIndex = Array.from(watchlistItem.parentNode.children).indexOf(
      watchlistItem
    );
    movies[movieIndex].isChecked = !movies[movieIndex].isChecked;
    saveItemsInLocalStorage();
    renderWatchlist();
  }
});

// Восстанавливаем список фильмов при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  getItemsFromLocalStorage();
});

const markIfWatchedHandler = () => {
  checkbox.style.background = "#6532f8";
};

addMovieBtnNode.addEventListener("click", addToWatchBtnHandler);
watchlistNode.addEventListener("click", (event) => {
  if (event.target.classList.contains("checkbox")) {
    markIfWatchedHandler(event.target);
  }
});
// movieListNode.addEventListener('click', removeFromListHandler);
