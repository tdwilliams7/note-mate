import React, { Component } from "react";

class Checklist extends Component {
  state = {
    todos: [],
    newTodo: ""
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
    let id = this.state.todos.length;
    todos = [...todos, { text: newTodo, completed: false, id }];

    this.setState({
      todos,
      newTodo: ""
    });
  };

  toggleCompleteHandler = id => {
    let todos = this.state.todos.slice(0);
    let newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });
    todos = newTodos;
    this.setState({
      todos,
      ...this.state
    });
  };

  render() {
    return (
      <div>
        <h1>Checklist Component</h1>
        <ul>
          {this.state.todos.map(todo => {
            return (
              <li
                key={todo.id}
                onClick={() => this.toggleCompleteHandler(todo.id)}
              >
                {todo.text}
              </li>
            );
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
