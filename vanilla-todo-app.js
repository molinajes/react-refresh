
var submit = document.querySelector(".submit");

submit.addEventListener("click", function (event) {
  if (inputText.value === "" || inputText.value === null) {
    event.preventDefault();
  } else {
    var item = document.createElement("label");
    item.className = "item-container";

    var itemText = document.createElement("p");
    itemText.className = "item__text";

    var inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";

    var _inputText = document.querySelector(".add-item__input").value;

    var remove = document.createElement("button");
    remove.innerHTML = "x";
    remove.className = "remove-button";

    var span = document.createElement("span");
    span.className = "custom-checkbox";

    itemText.appendChild(document.createTextNode(_inputText));

    item.appendChild(inputCheckbox);
    item.appendChild(itemText);
    item.appendChild(remove);
    item.appendChild(span);

    document.querySelector(".list-container").appendChild(item);

    remove.addEventListener("click", removeItem);
  }

  var clearInput = function () {
    inputText.value = "";
  }();
});

function removeItem() {
  var item = this.parentNode;
  var parent = item.parentNode;
  parent.removeChild(item);
}

var inputText = document.querySelector(".add-item__input");
inputText.addEventListener("keypress", function onEvent(event) {
  if (event.key === "Enter") {
    document.querySelector(".submit").click();
  }
});