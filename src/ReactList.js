"use strict"

const e  = React.createElement;

function ReactList() {
    return (
      <div>
        <div>
          <input placeholder="new item" />
          <button>add item</button>
        </div>
        <div>
          <ul>
            <li>item 1</li>
          </ul>
        </div>
      </div>
    )
  }

const domContainer = document.querySelector('#react_itemList');
ReactDOM.render(e(ReactList), domContainer);



