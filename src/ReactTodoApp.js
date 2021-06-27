'use strict';

class ReactTodoApp extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      value: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event){
    alert("this item was just added: " + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input onChange={this.handleChange} type="text" value={this.state.value} />
          </label>
          <input type="submit" value="add item"/>
        </form>
      <TodoList value={this.state.value} />
      </div>
    )
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.value}</li>
        </ul>
      </div>
    )
  }
}

let domContainer = document.querySelector('#reactTodoApp');
ReactDOM.render(<ReactTodoApp />, domContainer);

