"use strict"
class ReactList extends React.Component {
  render() {
    return (
      <div>Test</div>
    )
  }
}

let domContainer = document.querySelector('#react_itemList');
ReactDOM.render(<ReactList />, domContainer);



