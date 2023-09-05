const TITLES_FROM_STORAGE = "saved-items";
const MARK_AS_WATCHED = "checked";
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
      watchlistItem.isChecked ? "checked" : ""
    }'>
      <div class="checkbox-wrapper">
        <input class='status-checkbox' id='checkbox' type='checkbox' ${
          watchlistItem.isChecked ? "checked" : ""
        } />
      </div>
      <label class='watchlist-item-title' for='checkbox'>${
        watchlistItem.title
      }</label>
      <div class="close-btn-wrapper">
        <button id="removeFromListBtn"
        class="remove-from-list-btn"
        data-action="remove"></button>
       </div>
      </li>`;

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
    checked: false,
  };
  watchlist.push(watchlistItem);
  saveItemsInLocalStorage();
  console.log(watchlist);
  renderWatchlist();
};

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
