import React, { Component } from 'react';
import propTypes from 'prop-types';
import "./index.css";

export default class Item extends Component {

    static propTypes = {
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        done: propTypes.bool.isRequired
    }

    state = { mouse: false };

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag });
        }
    }

    handleDelete(id) {
        if (window.confirm("删除后无法恢复，您确定删除此项吗？")) {
            this.props.deleteTodoId(id);
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked);
        }
    }

    render() {
        const { mouse } = this.state;

        const { id, name, done } = this.props;
        return (
            <li style={{ backgroundColor: mouse ? "#ddd" : "white" }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span className={done ? "deleteLine" : ""}>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouse ? "block" : "none" }} onClick={() => { this.handleDelete(id) }}>删除</button>
            </li>
        );
    }
}
