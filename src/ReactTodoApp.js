'use strict';

class ReactTodoApp extends React.Component {
  render() {
    return (
      <div>App Component</div>
    )
  }
}

let domContainer = document.querySelector('#reactTodoApp');
ReactDOM.render(<ReactTodoApp />, domContainer);

