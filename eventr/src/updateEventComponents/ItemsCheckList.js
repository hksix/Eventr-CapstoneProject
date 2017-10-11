import React, {Component} from 'react'

import _ from 'lodash'

class NewTodo extends Component {
    create(event) {
        event.preventDefault();
        let text = this.refs.newTodoText.value;
        if (text) {
            this.props.createTask(text);
            this.refs.newTodoText.value = '';
        }
    }
    
    render() {
        return (
            <form onSubmit={this.create.bind(this)}>
                <label>Add more</label> <input type="text" ref="newTodoText"/> <button type="submit">+</button>
            </form>
        );
    }
}

class TodoList extends Component {
    render() {
        let items = [];
        let todos = _.sortBy(this.props.todos, 'done');
        
        for (let index in todos) {
            items.push(
                <Todo todo={todos[index]} key={index} toggle={this.props.toggle}/>
            );
        }
        
        return (
            <ul style={{listStyleType: "circle"}}>
                {items}
            </ul>
        );
    }
}

class Todo extends Component {
    done(event) {
        event.preventDefault();

        this.props.toggle(this.props.todo);
    }

    render() {
        let todo = this.props.todo;
        if (todo.done) {
            return (
                <li>
                    <del>{todo.text}</del> <a href="" onClick={this.done.bind(this)}>✓</a>
                    <small style={{color:'green'}}>Hamza</small>
                </li>
            );
        } else {
            return (
                <li>
                    {todo.text} <a href="" onClick={this.done.bind(this)}>✓</a>
                </li>
            );
        }
    }
}

export default class ItemsCheckList extends Component {
    constructor() {
        super();
        
        this.state = {
            todos: [
                {
                    text: 'Default Test value',
                    done: false
                },
                // {
                //     text: 'Done thing',
                //     done: true
                // },
                // {
                //     text: 'Other stuff',
                //     done: false
                // }
            ]
        };
    }
    
    createTask(text) {
        this.state.todos.push({
            text,
            done: false
        });
        
        this.setState({todos: this.state.todos});
    }
    
    toggleTask(todo) {
        let task = _.find(this.state.todos, todo);
        task.done = !task.done;
        this.setState({todos: this.state.todos});
    }
    
    render() {
        return (
            <div>
                <NewTodo createTask={this.createTask.bind(this)} />
                <TodoList todos={this.state.todos} toggle={this.toggleTask.bind(this)} />
            </div>
        );
    }
}