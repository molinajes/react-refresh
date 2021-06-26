'use strict';

class ReactTodoApp extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      item: "walk dog"
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    alert("you clicked submit")
  }

  render() {
    return (
      <div>
        <form>
          <label>
            <input type="text" />
          </label>
          <input onClick={this.handleClick} type="submit" value="add item"/>
        </form>
      <TodoList item={this.state.item} />
      </div>
    )
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.item}</li>
        </ul>
      </div>
    )
  }
}

let domContainer = document.querySelector('#reactTodoApp');
ReactDOM.render(<ReactTodoApp />, domContainer);

