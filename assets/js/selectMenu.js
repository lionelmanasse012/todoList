const menu = document.querySelector(".select-task-container");
const menuOption = document.getElementById("selectOption");
const menuItems = document.querySelectorAll(".select-item");
const selectBlock = document.querySelector(".select-block");

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", (e) => {
    selectValue.textContent = e.target.textContent;
  });
});

menu.addEventListener("click", () => {
  menuOption.classList.toggle("menu-clicked");
  selectBlock.classList.toggle("select-block-clicked");
  arrowUp.classList.toggle("arrow-on");
  arrowDown.classList.toggle("arrow-off");
});
