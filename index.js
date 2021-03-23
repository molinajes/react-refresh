let list = []

submit.addEventListener("click", () => {

  let newItem = document.createElement("li")
  let item = document.getElementById("input").value 

  newItem.textContent = item
  itemList.appendChild(newItem)

  list.push(item)
  console.log(list)

  return clearInput()
});


let clearInput = () => {
  input.value = "";
}


