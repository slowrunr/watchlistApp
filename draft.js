// Восстанавливаем список фильмов при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  getItemsFromLocalStorage();
});
// Обработчик события клика на кнопку удаления фильма
// watchlistNode.addEventListener("click", (event) => {
//     if (event.target.classList.contains("js-movie-remove-btn")) {
//       const listItem = event.target.closest(".movie");
//       const movieIndex = Array.from(listItem.parentNode.children).indexOf(
//         listItem
//       );
//       movies.splice(movieIndex, 1);
//       saveItemsInLocalStorage();
//       renderWatchlist();
//     }
//   });

//   // Обработчик события клика на чекбокс
//   watchlistNode.addEventListener("click", (event) => {
//     if (event.target.classList.contains("movie-checkbox")) {
//       const watchlistItem = event.target.closest(".movie");
//       const movieIndex = Array.from(watchlistItem.parentNode.children).indexOf(
//         watchlistItem
//       );
//       movies[movieIndex].isChecked = !movies[movieIndex].isChecked;
//       saveItemsInLocalStorage();
//       renderWatchlist();
//     }
//   });
// функция сворачивания окна при нажатии за пределами меню
// dropdownMenuNode.addEventListener("click", (event) => {
//   const isClickOutsideContent = !event
//     .composedPath()
//     .includes(dropdownMenuNode);

//   if (isClickOutsideContent) {
//     dropdownMenuNode.classList.remove("active");
//   }
// });

// <!-- <li id="watchlist-item-wrapper" class="movie-title-wrapper">
//           <div class="checkbox-wrapper">
//             <button class="checkbox"></button>
//           </div>
//           <p id="movieTitle" class="movie-title">Остров проклятых</p>
//           <div class="close-btn-wrapper">
//             <img
//               id="removeFromListBtn"
//               class="remove-from-list-btn"
//               src="icons/close-block-icon.png"
//             />
//           </div>
//         </li>
//         <li id="watchlist-item-wrapper" class="movie-title-wrapper">
//           <div class="checkbox-wrapper">
//             <button class="checkbox"></button>
//           </div>
//           <p id="movieTitle" class="movie-title">Поймай меня, если сможешь</p>
//           <div class="close-btn-wrapper">
//             <img
//               id="removeFromListBtn"
//               class="remove-from-list-btn"
//               src="icons/close-block-icon.png"
//             />
//           </div>
//         </li> -->

// const setItemStatus = watchlist.forEach((element) => {
//   watchlistHTML += `<li id="watchlistItemWrapper" class="watchlist-item-wrapper">

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
// watchlistNode.innerHTML = `<ul id="watchlistHTML">${watchlistHTML}</ul>`;

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
