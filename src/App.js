import React from "react";
import TodoItems from "./TodoItems";
import AddTodo from "./AddTodo";

class App extends React.Component {
  state = {
    todos: [
      {id: 1, content: "buy some milk"},
      {id: 2, content: "play mariokart"}
    ]
  }
  deleteTodo = (id) => {
    const updatedTodos = this.state.todos.filter(todo => {
      return id !== todo.id;
    })
    this.setState({
      todos: updatedTodos
    })
  }
  addTodo = (newState) => {
    newState.id = Math.random();
    const newTodoList = [...this.state.todos, newState]
    this.setState({
      todos: newTodoList
    })
  }
  render() { 
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <TodoItems todos={ this.state.todos } deleteTodo={ this.deleteTodo }/>
        <AddTodo addTodo={ this.addTodo }/>
      </div>
    );
  }
}

export default App;
