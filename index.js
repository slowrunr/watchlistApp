const CROSSED_OUT_TITLE = "crossed-out";
const ITEM_STATUS_WATCHED = "watched";
const SHADED_ITEM_WRAPPER = "shaded";
const STATUS_OUT_OF_DATA_CLASSNAME = "border-red";

const titleInputNode = document.getElementById("titleInput");
const addMovieBtnNode = document.getElementById("addToWatchBtn");
const watchlistNode = document.getElementById("watchlist");

let watchlist = [];

if (localStorage.getItem("watchlist")) {
  watchlist = JSON.parse(localStorage.getItem("watchlist"));
  //console.log(watchlist);
  watchlist.forEach((watchlistItem) => renderWatchlistItem(watchlistItem));
}

function addToWatchBtnHandler() {
  if (!titleInputNode.value) {
    titleInputNode.classList.add(STATUS_OUT_OF_DATA_CLASSNAME);
    return;
  }

  const watchlistItemTitle = titleInputNode.value.trim();

  const watchlistItem = {
    id: Date.now(),
    text: watchlistItemTitle,
    itemWrapperStyle: false,
    checkboxStyle: false,
    watchlistTitleStyle: false,
  };

  renderWatchlistItem(watchlistItem);

  watchlist.push(watchlistItem);

  saveItemsToLocalStorage();

  titleInputNode.value = "";

  titleInputNode.focus();
}

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
  //console.log(index);
  watchlist.splice(index, 1);

  saveItemsToLocalStorage();

  parentNode.remove();
}

function markItemAsWatched(e) {
  if (e.target.dataset.action !== "done") return;
  const parentNode = e.target.closest("li");
  const watchlistItemId = Number(parentNode.id);
  const watchlistItem = watchlist.find(
    (watchlistItem) => watchlistItemId === watchlistItem.id
  );

  console.log(watchlistItem);

  watchlistItem.itemWrapperStyle = !watchlistItem.itemWrapperStyle;
  watchlistItem.checkboxStyle = !watchlistItem.checkboxStyle;
  watchlistItem.watchlistTitleStyle = !watchlistItem.watchlistTitleStyle;

  saveItemsToLocalStorage();

  const itemStatus = parentNode.querySelector(".status-checkbox");
  const watchlistItemTitle = parentNode.querySelector(".watchlist-item-title");
  parentNode.classList.toggle(SHADED_ITEM_WRAPPER);
  itemStatus.classList.toggle(ITEM_STATUS_WATCHED);
  watchlistItemTitle.classList.toggle(CROSSED_OUT_TITLE);
}

function getItemsFromLocalStorage() {
  if (localStorage.getItem(TITLES_FROM_STORAGE)) {
    movies = JSON.parse(localStorage.getItem(TITLES_FROM_STORAGE));
  }
  renderWatchlistItem();
}

function saveItemsToLocalStorage() {
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
}

function renderWatchlistItem(watchlistItem) {
  const itemWrapperStyle = watchlistItem.itemWrapperStyle
    ? "watchlist-item-wrapper shaded"
    : "watchlist-item-wrapper";

  const checkboxStyle = watchlistItem.checkboxStyle
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
}

function removeBorderRed(e) {
  titleInputNode.classList.remove(STATUS_OUT_OF_DATA_CLASSNAME);
}

addMovieBtnNode.addEventListener("click", addToWatchBtnHandler);
titleInputNode.addEventListener("keydown", removeBorderRed);
watchlistNode.addEventListener("click", removeItemFromList);
watchlistNode.addEventListener("click", markItemAsWatched);
