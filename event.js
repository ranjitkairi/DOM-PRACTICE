// Event-JS

const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector(".name-input");

const items = todoList.children;

//Click, Scrooll, Reaizing the browser

// Attach a event listener
button.addEventListener("click", function (e) {
  e.preventDefault();
  //create element
  const newItem = document.createElement("li");
  //adding class
  newItem.classList.add("item");
  //adding the text
  newItem.innerText = nameInput.value;
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
  //Delete the value from the input
  nameInput.value = "";
  //create the element and attaching the listener
  newItem.addEventListener("click", deleteItem);
});

// for (item of items) {
//   item.addEventListener("click", deleteItem);
// }

// console.log deleteItem**

// function deleteItem() {
//   console.log("delete");
// }

// page deleteItem**

function deleteItem(e) {
  e.stopPropagation();
  e.target.remove();
}

todoList.addEventListener("click", function () {
  console.log("THE UL EXECUTES");
  todoList.classList.toggle("fade");
});

// button.addEventListener("keydown", function (event) {
//   if (event.keyCode === 81) {
//     mainTitle.classList.toggle("spectacular");
//   }
// });
