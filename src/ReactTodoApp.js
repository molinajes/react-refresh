'use strict';

class ReactTodoApp extends React.Component {
  render() {
    const item = "walk dog"
    return (
      <div>
        <form>
          <label>
            <input type="text" />
          </label>
          <input type="submit" value="add item"/>
        </form>
      <TodoList item={"walk dog"} />
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

