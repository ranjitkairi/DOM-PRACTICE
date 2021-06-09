// localStorage

// localStorage.setItem("todo", "feed the cat");
// localStorage.setItem("user", "Ed");
// localStorage.setItem("todo", "food myself");

// // session storage

// sessionStorage.setItem("todoList", "session feeding cat");

//GETTING STUFF BACK

// const user = localStorage.getItem("user");

// console.log(typeof user);

const todoList = {
  todo1: "feeding the cat",
  todo2: "feeding dmyself",
};

// const todoList = ["feed the cat", "wash", "listen to some classical music"];
localStorage.setItem("todos", JSON.stringify(todoList));

const retrieved = JSON.parse(localStorage.getItem("todos"));
console.log(retrieved);
