'use strict';

class ReactTodoApp extends React.Component {
  render() {
    const item = "walk dog"
    return (
      <div>
      App Component(parent)
       <TodoList item={"walk dog"} />
      </div>
     
    )
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div>
      Todo List Component(child)
        <ul>
          <li>{this.props.item}</li>
        </ul>
      </div>
    )
  }
}

let domContainer = document.querySelector('#reactTodoApp');
ReactDOM.render(<ReactTodoApp />, domContainer);

