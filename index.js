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
  watchlist.forEach((watchlistItem) => {
    const watchlistHTML = `<li id="watchlistItemWrapper" class="watchlist-item-wrapper" >
      <div class="checkbox-wrapper">
        <button class='status-checkbox' data-action="done"></button>
      </div>
      <span class='watchlist-item-title watchlist-item-title--done'>${watchlistItem.title}</span>
      <div class="close-btn-wrapper">
        <button id="removeFromListBtn"
        class="remove-from-list-btn"
        data-action="delete"></button>
       </div>
    </li>`;

    watchlistNode.insertAdjacentHTML("beforeend", watchlistHTML);
  });
};

getItemsFromLocalStorage();

//+ функция-обработчик для кнопки (add-2watch-btn) добавления названия контента в список просмотра
const addToWatchBtnHandler = () => {
  if (!titleInputNode.value) {
    titleInputNode.classList.add(STATUS_OUT_OF_DATA_CLASSNAME);
    return;
  }
  titleInputNode.classList.remove(STATUS_OUT_OF_DATA_CLASSNAME);
  const watchlistItemTitle = titleInputNode.value.trim();
  titleInputNode.value = "";
  titleInputNode.focus();
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

//
function removeItemFromList(e) {
  if (e.target.dataset.action === "delete") {
    const parentNode = e.target.closest("li");
    parentNode.remove();
  }
}

function markItemAsWatched(e) {
  if (e.target.dataset.action === "done") {
    const parentNode = e.target.closest("li");
    const itemStatus = parentNode.querySelector(".status-checkbox");
    const watchlistItemTitle = parentNode.querySelector(
      ".watchlist-item-title"
    );
    parentNode.classList.add("shaded");
    itemStatus.classList.add("watched");
    watchlistItemTitle.classList.add("crossed-out");
  }
}

addMovieBtnNode.addEventListener("click", addToWatchBtnHandler);
watchlistNode.addEventListener("click", removeItemFromList);
watchlistNode.addEventListener("click", markItemAsWatched);
// movieListNode.addEventListener('click', removeFromListHandler);
