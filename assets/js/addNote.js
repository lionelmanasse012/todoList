const modalForm = document.querySelector(".modal-form");
const inputNote = document.getElementById("input-note");

const createElement = (type, properties = {}) => {
  const element = document.createElement(type);
  Object.assign(element, properties);
  return element;
};

const createNote = (noteName, id) => {
  const inputId = crypto.randomUUID();

  const taskItem = createElement("li", { id: id, className: "task-item" });
  const taskLabel = createElement("div", { className: "task-label" });
  const inputCheckbox = createElement("input", {
    id: inputId,
    type: "checkbox",
  });
  const labelCheckbox = createElement("label", {
    className: "checkbox",
  });
  labelCheckbox.setAttribute("for", inputId);
  const icon = createElement("i", {
    className: "fa-solid fa-check task-check",
  });
  labelCheckbox.appendChild(icon);
  const labeltaskName = createElement("label", {
    className: "task-name",
    textContent: noteName,
  });
  labeltaskName.setAttribute("for", inputId);

  taskLabel.append(inputCheckbox, labelCheckbox, labeltaskName);

  const taskUpdate = createElement("div", { className: "task-update" });
  const taskEdit = createElement("span", {
    className: "material-symbols-outlined task-edit",
    textContent: "edit",
  });
  const taskDelete = createElement("span", {
    className: "material-symbols-outlined task-delete",
    textContent: "delete",
  });
  taskUpdate.append(taskEdit, taskDelete);
  taskItem.append(taskLabel, taskUpdate);

  tasks.appendChild(taskItem);
};

modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskId = crypto.randomUUID();

  createNote(inputNote.value, taskId);
});
