"use strict";

var e = React.createElement;

function ReactList() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      React.createElement("input", { placeholder: "new item" }),
      React.createElement(
        "button",
        null,
        "add item"
      )
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          "item 1"
        )
      )
    )
  );
}

var domContainer = document.querySelector('#react_itemList');
ReactDOM.render(e(ReactList), domContainer);