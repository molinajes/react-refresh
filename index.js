let itemInput = document.getElementById("itemInput")
const submitItem = document.getElementById("submitItem")
let itemList = document.getElementById("itemList")

submitItem.addEventListener('click', () => {
  itemList.textContent = itemInput.value;
});


