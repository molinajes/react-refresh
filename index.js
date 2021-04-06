let list = []

submit.addEventListener("click", () => {

  let newItem = document.createElement("li")
  let item = document.getElementById("input").value 

  newItem.textContent = item
  itemList.appendChild(newItem)

  list.push(item)
  console.log(list)


  return clearInput()
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


