const TITLES_FROM_STORAGE = "saved-items";
const MARK_AS_WATCHED = "watched";
const STATUS_OUT_OF_DATA_CLASSNAME = "border-red";

const titleInputNode = document.getElementById("titleInput");
const addMovieBtnNode = document.getElementById("addToWatchBtn");
const watchlistNode = document.getElementById("watchlist");
const checkboxNode = document.querySelector("checkbox");
const watchlistItemTitle = document.getElementById("watchlist-item-title");

let watchlist = [];

const getItemsFromLocalStorage = () => {
  if (localStorage.getItem(TITLES_FROM_STORAGE)) {
    movies = JSON.parse(localStorage.getItem(TITLES_FROM_STORAGE));
  }
  renderWatchlist();
};

const renderWatchlist = () => {
  watchlistNode.innerHTML = '';

  watchlist.forEach((element) => {
}
//+ функция-обработчик для кнопки (add-2watch-btn) добавления названия контента в список просмотра
const addToWatchBtnHandler = () => {
  if (!titleInputNode.value) {
    titleInputNode.classList.add(STATUS_OUT_OF_DATA_CLASSNAME);
    return;
  }
  titleInputNode.classList.remove(STATUS_OUT_OF_DATA_CLASSNAME);
  const watchlistItem = titleInputNode.value;
  titleInputNode.value = "";
  watchlist.push(watchlistItem);
  saveItemsInLocalStorage();
  console.log(watchlist);

  let watchlistHTML = "";

  watchlist.forEach((watchlistItem) => {
    const listItemHTML = `
      <li class='movie ${watchlistItem.isChecked ? "checked" : ""}'>
        <div class='movie-inner'>
          <input class='movie-checkbox' id='checkbox' type='checkbox' ${watchlistItem.isChecked ? "checked" : ""} />
          <label class='movie-name' for='checkbox'>${watchlistItem.title}</label>
        </div>
        <div class='movie-inner-btn'>
          <button class='js-movie-remove-btn movie-remove-btn'></button>
        </div>
      </li>
    `;

    watchlistNode.insertAdjacentHTML('beforeend', listItemHTML);
    });
  };
    
    
//     const itemStatus =
//       watchlistItem.strike - out ? "status status-watched" : "status";

//     watchlistHTML += `<li id="watchlistItemWrapper" class="watchlist-item-wrapper">
//       <div class="checkbox-wrapper">
//       <button id="checkbox" class="checkbox" data-action="watched"></button>
//       </div>
//       <p id="watchlistItemTitle" class="watchlist-item-title">${element}</p>
//       <div class="close-btn-wrapper">
//         <button id="removeFromListBtn"
//         class="remove-from-list-btn"
//         data-action="remove"></button>
//       </div>
//     </li>`;
//   });
//   movieListNode.innerHTML = `<ul id="watchlistHTML">${watchlistHTML}</ul>`;
// };

//   const addToWatchlist = (watchlistItem) => {
    
//     const setItemStatus = `<li id="watchlistItemWrapper" class="watchlist-item-wrapper">
//         <div id="${watchlistItem.id}" class="${itemStatus}"> 
//         <div class="checkbox-wrapper">
//           <button id="status" 
//           class="status" 
//           data-action="strike-out">
//           </button>
//         </div>
//         <p id="watchlistItemTitle" class="watchlist-item-title">${element}</p>
//         <div class="close-btn-wrapper">
//           <button id="removeFromListBtn"
//           class="remove-from-list-btn"
//           data-action="delete">
//           </button>
//         </div>
//         </div>
//         </li>`;
//     return setItemStatus;
//     = watchlist.forEach((element) => {
      //   watchlistHTML += `<li id="watchlistItemWrapper" class="watchlist-item-wrapper">
  };
  // watchlistNode.innerHTML = `<ul id="watchlistHTML">${watchlistHTML}</ul>`;
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
  localStorage.setItem(TITLES_FROM_STORAGE, JSON.stringify(watchlist));
};



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
watchlistNode.addEventListener("click", (event) => {
  if (event.target.classList.contains("checkbox")) {
    markIfWatchedHandler(event.target);
  }
});
// movieListNode.addEventListener('click', removeFromListHandler);
