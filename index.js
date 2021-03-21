// let itemInput = document.getElementById("itemInput")
// const submitItem = document.getElementById("submitItem")
// let itemList = document.getElementById("itemList")


submitItem.addEventListener('click', () => {
  let item = document.createElement("li")
  item.textContent = itemInput.value
  itemList.appendChild(item)
});


