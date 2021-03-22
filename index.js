//function for binding submit button to event listener 
submitItem.addEventListener('click', () => {
  //container for creating list item 
  let item = document.createElement("li")
  //assign the input value to list value 
  item.textContent = itemInput.value
  //add item(node) to parent(ul) node 
  itemList.appendChild(item)
  //clear input 
  return clearInput()
});

//function for clearing input 
let clearInput = () => {
  itemInput.value = "";
}


