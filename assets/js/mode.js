const modeBtn = document.querySelector(".mode-btn");
const lightMode = document.querySelector(".mode-light");
const darkMode = document.querySelector(".mode-dark");
const lightIcon = document.querySelector(".light-empty-icon");
const darkIcon = document.querySelector(".dark-empty-icon");
const body = document.querySelector("body");
const searchContainer = document.querySelector(".search-container");
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-icon");

modeBtn.addEventListener("click", () => {
  lightMode.classList.toggle("light-mode");
  darkMode.classList.toggle("dark-mode");
  lightIcon.classList.toggle("dark-empty-icon");
  darkIcon.classList.toggle("dark-empty-icon");
  body.classList.toggle("body-dark");
  searchContainer.classList.toggle("search-container-dark");
  searchInput.classList.toggle("search-input-dark");
  searchIcon.classList.toggle("search-icon-dark");
});
