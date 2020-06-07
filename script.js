var todoList = [];
function addTodo(frm) {
  var todo = frm.txtTodo;
  if (todo.value != "") {
    todoList.push({ title: todo.value, status: 1 });
    // alert("Todo item has been added");
    todo.value = "";
    todo.focus();
    displayTodoItems();
  } else {
    alert("Todo item should not be blank");
    return false;
  }
  return false;
}

function todoAction(no, action) {
  if (no != null) {
    todoList[no].status = action;
  }
  displayTodoItems();
}

function todoDelete(no) {
  if (no != null && no >= 0) {
    todoList.splice(no, 1);
    displayTodoItems();
  }
}

function displayTodoItems() {
  var contStart = "<ul>";
  var listItems = "";
  var contEnd = "</ul>";
  if (todoList.length > 0) {
    for (i = 0; i < todoList.length; i++) {
      var setStatus = todoList[i].status == 0 ? 1 : 0;
      var setClass = todoList[i].status == 0 ? "done" : "pending";
      listItems +=
        "<li class='" +
        setClass +
        "'><span class='title'>" +
        todoList[i].title +
        "</span>";
      listItems += "<span class='action'>";
      listItems +=
        "<a href='javascript:void(0);' onclick='todoAction(" +
        i +
        "," +
        setStatus +
        ");'>";
      listItems += todoList[i].status == "0" ? "Mark Pending" : "Mark Done";
      listItems += "</a>";

      listItems +=
        "&nbsp;<a href='javascript:void(0);' onclick='todoDelete(" + i + ");'>";
      listItems += "x";
      listItems += "</a>";

      listItems += "</span>";
      listItems += "</li>";
    }
  } else {
    listItems += "<li>Hurray! no pending stuff to do, go drink some wine.</li>";
  }
  document.getElementById("todoList").innerHTML =
    contStart + listItems + contEnd;
}
