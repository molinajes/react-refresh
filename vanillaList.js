
//create container for submit 
var submit = document.querySelector(".submit");

submit.addEventListener("click", function (event) {
  //conditional to check if input is empty
  if (inputText.value === "" || inputText.value === null) {
    event.preventDefault();
  } else {
    //create item container 
    var item = document.createElement("label");
    item.className = "item-container";

    //create item text
    var itemText = document.createElement("p");
    itemText.className = "item__text";

    //create input type for checkbox
    var inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";

    //create text input  
    var _inputText = document.querySelector(".add-item__input").value;

    //create remove button
    var remove = document.createElement("button");
    remove.innerHTML = "x";
    remove.className = "remove-button";

    //create span for custom checkbox
    var span = document.createElement("span");
    span.className = "custom-checkbox";

    //append inputText to item text
    itemText.appendChild(document.createTextNode(_inputText));

    //append checkbox input, item text, custom checkbox and remove button to item(order does matter)
    item.appendChild(inputCheckbox);
    item.appendChild(itemText);
    item.appendChild(remove);
    item.appendChild(span);

    //append item to list container 
    document.querySelector(".list-container").appendChild(item);

    //declare remove event listener
    remove.addEventListener("click", removeItem);
  }
  //clear input field - IIFE
  var clearInput = function () {
    inputText.value = "";
  }();
});

//updater function to remove item 
function removeItem() {
  var item = this.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);
}

//submit item with Enter keypress event
var inputText = document.querySelector(".add-item__input");
inputText.addEventListener("keypress", function onEvent(event) {
  if (event.key === "Enter") {
    document.querySelector(".submit").click();
  }
});