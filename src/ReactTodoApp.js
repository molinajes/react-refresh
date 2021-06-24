'use strict';

class ReactTodoApp extends React.Component {
  render() {
    return (
      <div>
      App Component
       <TodoList />
      </div>
     
    )
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div>Todo List Component</div>
    )
  }
}

let domContainer = document.querySelector('#reactTodoApp');
ReactDOM.render(<ReactTodoApp />, domContainer);

