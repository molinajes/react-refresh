let todoList = {
  todos: []
}


submit.addEventListener("click", () => {

  //create checkbox element 
  let checkbox = document.createElement("input")
  checkbox.type= "checkbox"
  checkbox.id = "complete"

  //create label element 
  let item = document.getElementById("input").value
  let label = document.createElement("label")
  label.htmlFor = "complete"

  //append text node to label 
  label.appendChild(document.createTextNode(item))

  //append checkbox and label to ul element
  itemList.appendChild(checkbox)
  itemList.appendChild(label)

  //add new item to array list
  todoList.todos.push(item)

  console.log(todoList)

  //clear input field
  clearInput()
})

let clearInput = () => {
  input.value = "";
}

// event handler for marking items complete
let listItem = document.querySelectorAll("li")

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("click", function() {
    this.classList.toggle("complete");
  });
}


