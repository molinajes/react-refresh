"use strict"
class ReactList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Nothing to see here"
    }
    this.handledClicked = this.handledClicked.bind(this)
  }

  handledClicked() {
    this.setState((prevState) => ({
      message: "Welcome to the club"
    }))
  }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={this.handledClicked}>Don't Click</button>
      </div>
    )
  }
}

const domContainer = document.querySelector('#react_itemList');
ReactDOM.render(<ReactList />, domContainer);



