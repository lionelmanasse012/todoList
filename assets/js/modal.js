const modalBtn = document.querySelector(".new-task-btn");
const modal = document.querySelector(".modal");

modalBtn.addEventListener("click", () => {
  modal.classList.add("modal-actived");
});

modal.addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    modal.classList.remove("modal-actived");
  } else {
    return;
  }
});
