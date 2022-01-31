const form = document.querySelector("form");
const todosInput = document.querySelector("input#todoInput");
const LoginBtn = document.querySelector(".LoginBtn");
const Addtodolist = document.querySelector(".Addtodolist");
const todosWrapper = document.querySelector("ul.todos-wrapper");


LoginBtn.onclick = function () {
  alert("Login Successfully.")
  LoginBtn.textContent = "Log-out"
};

