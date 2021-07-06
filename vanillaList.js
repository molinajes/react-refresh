submit.addEventListener("click", (event) => {
  //conditional to check if input is empty
  if(input.value === "" || input.value === null) {
    event.preventDefault()
  } else {

    //create li element
    const list = document.createElement("li")

    //create item element 
    const item = document.getElementById("input").value

    //create label element with complete class
    const label = document.createElement("label")
    label.className = "complete"

    //create input element wih type checkbox 
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    //create remove button
    const remove = document.createElement("button")
    remove.type = "button"
    remove.innerHTML = "x"

    //declare remove event listener
    remove.addEventListener("click", removeItem)

    //append text node to label 
    label.appendChild(document.createTextNode(item))

    //append checkbox, label and remove to li element
    list.appendChild(checkbox)
    list.appendChild(label)
    list.appendChild(remove)

    //append li to ul
    itemList.appendChild(list)

    //clear input field
    clearInput()
  } 
})

const clearInput = () => {
  input.value = ""
}

//updater function to remove li item 
function removeItem () {
  const item = this.parentNode  
  const parent = item.parentNode
  parent.removeChild(item)
}

//submit item with Enter keypress event
const item = document.getElementById("input")
item.addEventListener("keypress", function onEvent(event) {
  if(event.key === "Enter") {
    document.getElementById("submit").click()
  }
})











