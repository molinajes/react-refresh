'use strict';
class ReactTodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //container for new task 
      input: "", 
      tasks: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  handleSubmit(event){  
    event.preventDefault()
    //condition for empty empty 
    if(!this.state.input) {
      return;
    } 
    //declare object to store 
    const newTask = {
      input: this.state.input,
      id: 1 + Math.random()
    };
    //request update to current tasks state
    this.setState(state => ({
        tasks: state.tasks.concat(newTask),
        input: ""
    }));
  }

  //updater function to remove task 
  handleRemove(props){
    //create new task list 
    const newTasksList = this.state.tasks
    //remove selected item from new task list
    newTasksList.splice(props, 1)
    //update state for tasks 
    this.setState({ tasks: newTasksList });
  }

  render() {
    return (
      <div>
        <h1>React Todo</h1>
        <form onSubmit={this.handleSubmit} className="add-item">
        <input type="text" value={ this.state.input} onChange={this.handleChange} className="add-item__input" placeholder="new item" />
        <button type="submit" className="submit">add item</button>
        </form>
        <TodoList tasks={this.state.tasks} handleRemove={this.handleRemove}/>
      </div>
    );  
  }
}
class TodoList extends React.Component {
  render() {
    return (
      <div className="list-container">
        {this.props.tasks.map((task) => (
          <label keys={task.id} className="item-container">
            <input type="checkbox" />
            <p className="item__text">{task.input}</p>
            <button onClick={this.props.handleRemove} className="remove-button">x</button>
            <span className="custom-checkbox" />
          </label>
        ))}
      </div>
    );
  }
}

let domContainer = document.querySelector('#reactTodoApp');
ReactDOM.render(<ReactTodoApp />, domContainer);

