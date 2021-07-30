
//create container for submit 
const submit = document.querySelector(".submit")

submit.addEventListener("click", (event) => {
  //conditional to check if input is empty
  if(input.value === "" || input.value === null) {
    event.preventDefault()
  } else {
    //create item container 
    const item = document.createElement("div")
    item.className ="item"

    //create item text
    const itemText = document.createElement("p")
    itemText.className ="item-text"

    //create text input  
    const input = document.querySelector(".add-item__input").value

    //create remove button
    const remove = document.createElement("button")
    remove.innerHTML = "x"
    remove.className ="remove-button"

    //append text input to item text
    itemText.appendChild(document.createTextNode(input)) 

    //append item text and remove button to item
    item.appendChild(itemText)
    item.appendChild(remove)

    //append item to list container 
    document.querySelector(".list").appendChild(item)

    //declare remove event listener
    remove.addEventListener("click", removeItem)  
  } 
  //clear input field - IIFE
  const clearInput = (() => {
    console.log("clear input")
    input.value = ""
  })()
})

//updater function to remove item 
function removeItem () {
  const item = this.parentNode  
  const parent = item.parentNode
  parent.removeChild(item)
}

//submit item with Enter keypress event
const input = document.querySelector(".add-item__input")
input.addEventListener("keypress", function onEvent(event) {
  if(event.key === "Enter") {
    document.querySelector(".submit").click()
  }
})











