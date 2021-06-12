"use strict"

const e  = React.createElement;

class AddItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clicked: false } 
  }
  render() {
    if(this.state.clicked) {
      return "You clicked add."
    } 
    // return e(
    //   "button",
    //   { onClick: () => this.setState({clicked: true }) }, 
    //     "Add Item"
    // )
    return (
      <button onClick={() => this.setState({ clicked: true })}>
        Add Item
      </button>
    )
  }
}

const domContainer = document.querySelector('#addItem');
ReactDOM.render(e(AddItem), domContainer);
