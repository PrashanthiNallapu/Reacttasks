import React, { Component } from "react";

class TodoComponent extends Component {
  state = {
    todos: ["apple", "banana", "orange"]
  }

  addTodoMethod = () => {
    const newState = [...this.state.todos, "Watermelon"];
    this.setState({
      todos: newState
    });
  }

  ClearAllTodos = () => {
    const newState = [];
    this.setState({
      todos: newState
    });
  }

  deleteSelectedTodo = (index) => {
    const filteredArray = this.state.todos.filter((item, i) => i !== index);
    this.setState({
      todos: filteredArray
    });
  }

  updateSelectedTodo = (index) => {
    let updatedArray = this.state.todos.map((eachFruit, i) => {
      if (i === index) {
        return "kiwi";
      } else {
        return eachFruit;
      }
    });
    this.setState({
      todos: updatedArray
    });
  }

  render() {
    return (
      <>
        <h2>TODO COMPONENT</h2>
        <button onClick={this.addTodoMethod}>Add todo</button>
        <button onClick={this.ClearAllTodos}>Clear all todo</button>

        {this.state.todos.map((eachTodo, index) => {
          return (
            <div key={index}>
              <h3>{index + 1} {eachTodo}</h3>
              <button onClick={() => this.deleteSelectedTodo(index)}>Delete Todos</button>
              <button onClick={() => this.updateSelectedTodo(index)}>Update Todos</button>
            </div>
          );
        })}
      </>
    );
  }
}

export default TodoComponent;

    



