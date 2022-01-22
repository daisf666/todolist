import React, { Component } from 'react';
import "./index.css";

export default class Footer extends Component {

    handleCheckAll = (event) => {
        return this.props.checkAllTodo(event.target.checked);
    }

    handleClearAll = () => {
        return this.props.clearAllDone();
    }

    render() {
        const { todos } = this.props;
        const count = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={todos.length === count && todos.length ? true : false} onChange={this.handleCheckAll} />
                </label>
                <span>
                    <span>已完成{count}项</span> / 共{todos.length}项
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAll}>清除已完成任务</button>
            </div>
        );
    }
}
