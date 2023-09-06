const TITLES_FROM_STORAGE = "saved-items";
const CROSSED_OUT_TITLE = "crossed-out";
const ITEM_STATUS_WATCHED = "watched";
const SHADED_ITEM_WRAPPER = "shaded";
const STATUS_OUT_OF_DATA_CLASSNAME = "border-red";

const titleInputNode = document.getElementById("titleInput");
const addMovieBtnNode = document.getElementById("addToWatchBtn");
const watchlistNode = document.getElementById("watchlist");

let watchlist = [];

function addToWatchBtnHandler() {
  if (!titleInputNode.value) {
    titleInputNode.classList.add(STATUS_OUT_OF_DATA_CLASSNAME);
    return;
  }
  titleInputNode.classList.remove(STATUS_OUT_OF_DATA_CLASSNAME);

  const watchlistItemTitle = titleInputNode.value.trim();

  const watchlistItem = {
    id: Date.now(),
    text: watchlistItemTitle,
    itemWrapperStyle: false,
    checkboxStyle: false,
    watchlistTitleStyle: false,
  };

  const itemWrapperStyle = watchlistItem.itemWrapperStyle
    ? "watchlist-item-wrapper shaded"
    : "watchlist-item-wrapper";

  const checkboxStyle = watchlistItem.checkboxStyleStyle
    ? "status-checkbox watched"
    : "status-checkbox";

  const watchlistTitleStyle = watchlistItem.watchlistTitleStyle
    ? "watchlist-item-title crossed-out"
    : "watchlist-item-title";

  const watchlistHTML = `<li id="${watchlistItem.id}" class="${itemWrapperStyle}" >
    <div class="checkbox-wrapper">
      <button class='${checkboxStyle}' data-action="done"></button>
    </div>
    <span class='${watchlistTitleStyle}'>${watchlistItem.text}</span>
    <div class="close-btn-wrapper">
      <button id="removeFromListBtn"
      class="remove-from-list-btn"
      data-action="delete"></button>
     </div>
  </li>`;

  watchlistNode.insertAdjacentHTML("beforeend", watchlistHTML);

  watchlist.push(watchlistItem);

  console.log(watchlist);

  saveItemsInLocalStorage();

  titleInputNode.value = "";

  titleInputNode.focus();
}

// function renderWatchlistItem(watchlistItem) {

// }

function removeItemFromList(e) {
  if (e.target.dataset.action !== "delete") return;
  const parentNode = e.target.closest("li");
  const watchlistItemId = Number(parentNode.id);
  const index = watchlist.findIndex(
    (watchlistItem) => watchlistItem.id === watchlistItemId
  );

  // - deleting Items via array filtering
  // watchlist = watchlist.filter(
  //   (watchlistItem) => watchlistItem.id !== watchlistItemId
  // );
  console.log(index);
  watchlist.splice(index, 1);
  parentNode.remove();
}

function markItemAsWatched(e) {
  if (e.target.dataset.action !== "done") return;
  const parentNode = e.target.closest("li");
  const itemStatus = parentNode.querySelector(".status-checkbox");
  const watchlistItemTitle = parentNode.querySelector(".watchlist-item-title");
  parentNode.classList.toggle(SHADED_ITEM_WRAPPER);
  itemStatus.classList.toggle(ITEM_STATUS_WATCHED);
  watchlistItemTitle.classList.toggle(CROSSED_OUT_TITLE);
}

addMovieBtnNode.addEventListener("click", addToWatchBtnHandler);
watchlistNode.addEventListener("click", removeItemFromList);
watchlistNode.addEventListener("click", markItemAsWatched);

function getItemsFromLocalStorage() {
  if (localStorage.getItem(TITLES_FROM_STORAGE)) {
    movies = JSON.parse(localStorage.getItem(TITLES_FROM_STORAGE));
  }
  renderWatchlistItem();
}

function saveItemsInLocalStorage() {
  localStorage.setItem(TITLES_FROM_STORAGE, JSON.stringify(watchlist));
}
