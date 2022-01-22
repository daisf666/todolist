// 创建外壳组件App
import React, { Component } from "react";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";
// 引入APP样式
import "./App.css";


// 暴露App组件，其他js才能引用
export default class App extends Component {

  state = {
    todos: [{ id: 1, name: "学习", done: false },
    { id: 2, name: "睡觉", done: false },
    { id: 3, name: "打球", done: true }]
  };

  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  }

  deleteTodoId = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    })
    this.setState({ todos: newTodos });
  }

  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    })
    const doneTodos = [];
    const notDoneTodos = [];
    for (let i = 0; i < newTodos.length; i++) {
      if (newTodos[i].done) {
        doneTodos.push(newTodos[i]);
      } else {
        notDoneTodos.push(newTodos[i]);
      }
    }
    this.setState({ todos: [...notDoneTodos, ...doneTodos] });
  }

  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    })
    this.setState({ todos: newTodos });
  }

  clearAllDone = () => {
    if (window.confirm("此操作不可恢复，您确定删除所有已完成的任务吗？")) {
      const { todos } = this.state;
      const newTodos = todos.filter((todoObj) => {
        return !todoObj.done;
      })
      this.setState({ todos: newTodos });
    }
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} deleteTodoId={this.deleteTodoId} updateTodo={this.updateTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}