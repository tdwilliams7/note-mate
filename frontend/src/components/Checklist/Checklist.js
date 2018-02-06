import React, { Component } from "react";

class Checklist extends Component {
  state = {
    todos: [],
    newTodo: "",
    id: 0
  };

  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  addTodoHandler = event => {
    event.preventDefault();
    const newTodo = this.state.newTodo;
    let todos = this.state.todos.slice(0);
    let id = this.state.id;
    todos = [...todos, { text: newTodo, completed: false, id: this.state.id }];
    this.setState({
      todos,
      newTodo: "",
      id: id++
    });
  };

  toggleCompleteHandler = id => {};

  render() {
    return (
      <div>
        <h1>Checklist Component</h1>
        <ul>
          {this.state.todos.map(todo => {
            return <li onClick={this.toggleCompleteHandler()}>{todo.text}</li>;
          })}
        </ul>
        <form onSubmit={this.addTodoHandler}>
          <input
            value={this.state.newTodo}
            name="newTodo"
            onChange={this.inputChangeHandler}
          />
          <button>add</button>
        </form>
      </div>
    );
  }
}

export default Checklist;
