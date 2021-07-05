'use strict';

class ReactTodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //container for new task 
      input: "", 
      tasks: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleChange(event) {
    this.setState({input: event.target.value})
  }

  handleSubmit(event){  
    event.preventDefault()
    //condition for empty empty 
    if(!this.state.input) {
      return
    } 
    //declare object to store 
    const newTask = {
      input: this.state.input,
      id: 1 + Math.random()
    }
    //request update to current tasks state
    this.setState(state => ({
        tasks: state.tasks.concat(newTask),
        input: ""
    }))
  }

  //updater function to remove task 
  handleRemove(){
    alert("remove button clicked")
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input onChange={this.handleChange} type="text" value={this.state.input} placeholder="new item" />
          </label>
          <input type="submit" value="add item"/>
        </form>
        <TodoList tasks={this.state.tasks} handleRemove={this.handleRemove}/>
      </div>
    )
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
         {this.props.tasks.map((task) => (
            <li key={task.id}>
              <input type="checkbox" />
              <label className="complete">{task.input}</label>
              <button onClick={this.props.handleRemove}>x</button>
            </li>
         ))}
        </ul>
       
      </div>
    )
  }
}

let domContainer = document.querySelector('#reactTodoApp');
ReactDOM.render(<ReactTodoApp />, domContainer);

