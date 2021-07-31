
//create container for submit 
const submit = document.querySelector(".submit")

submit.addEventListener("click", (event) => {
  //conditional to check if input is empty
  if(inputText.value === "" || inputText.value === null) {
    event.preventDefault()
  } else {
    //create item container 
    const item = document.createElement("label")
    item.className ="item-container"

    //create item text
    const itemText = document.createElement("p")
    itemText.className ="item__text"

    //create input type for checkbox
    const inputCheckbox = document.createElement("input")
    inputCheckbox.type = "checkbox"

    //create text input  
    const inputText = document.querySelector(".add-item__input").value

    //create remove button
    const remove = document.createElement("button")
    remove.innerHTML = "x"
    remove.className ="remove-button"

    //create span for custom checkbox
    const span = document.createElement("span")
    span.className ="custom-checkbox"

    //append inputText to item text
    itemText.appendChild(document.createTextNode(inputText)) 

    //append item text, checkbox input, remove button and span to item
    item.appendChild(itemText)
    item.appendChild(inputCheckbox)
    item.appendChild(remove)
    item.appendChild(span)

    //append item to list container 
    document.querySelector(".list-container").appendChild(item)

    //declare remove event listener
    remove.addEventListener("click", removeItem)  
  } 
  //clear input field - IIFE
  const clearInput = (() => {
    inputText.value = ""
  })()
})

//updater function to remove item 
function removeItem () {
  const item = this.parentNode  
  const parent = item.parentNode
  parent.removeChild(item)
}

//submit item with Enter keypress event
const inputText = document.querySelector(".add-item__input")
inputText.addEventListener("keypress", function onEvent(event) {
  if(event.key === "Enter") {
    document.querySelector(".submit").click()
  }
})











