'use strict';

class ReactTodoApp extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      value: "",
      //container for new task 
      tasks: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event){
    //condition for empty empty 
    if(!this.state.value) {
      return event.preventDefault()
    } 
    alert("this item was just added: " + this.state.value)
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

