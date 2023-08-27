const dropdownMenuNode = document.getElementById("dropdownMenu");

// функция отображения всех пунктов выпадающего меню
function show(a) {
  document.getElementById("categoryInput").value = a;
}

// функция вызова выпадающего меню
dropdownMenuNode.onclick = function () {
  dropdownMenuNode.classList.toggle("active");
};
