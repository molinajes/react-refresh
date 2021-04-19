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

  //create li element
  let list = document.createElement("li")

  //append text node to label 
  label.appendChild(document.createTextNode(item))

  //append checkbox and label to li element
  list.appendChild(checkbox)
  list.appendChild(label)

  //append li to ul
  itemList.appendChild(list)  

  //add new item to array list
  todoList.todos.push(item)

  console.log(todoList)


  //clear input field
  clearInput()
})

let clearInput = () => {
  input.value = "";
}






