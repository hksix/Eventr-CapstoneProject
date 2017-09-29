import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
// Component Structure
// --------------------
// Container
// --> Form
// --> List
// ----> Todo

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleNewTodoAddition = this.handleNewTodoAddition.bind(this);
	}
	
	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}
	
	handleNewTodoAddition() {
        // console.log(this.input.value);
		if(this.input.value !== '') {
			this.props.addTodo(this.input.value);
			this.setState({
				value: ''
			});
			this.input.placeholder = "Add Items here...";
		}
	}
	
	render() {
		return (
			// ref should be passed a callback
			// with underlying dom element as its
            // argument to get its reference
            // id="blank" is there to comunicate with the TextField box. This is needed but its a hidden element cause I suck at coding
            <div>
                <TextField
                    hintText="Type in items needed..."
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <br />
			    <div id="blank" style={{display:'none' }}>
			    	<input 
			    		ref={node => {
			    			this.input = node;
			    		}}
			    		value={this.state.value}
			    		onChange={this.handleChange}/>
                </div>
			    <button 
			        onClick={this.handleNewTodoAddition}>	
			        +
			    </button>	
            </div>
		);
	}
}

const Todo = ({todo, remove}) => {
	// single todo 
	return (
		<p>
			{todo.value}
			<span 
				className="removeBtn"
				onClick={()=> {
				    remove(todo.id)
				}}>
				x
			</span>
		</p>
	);
};

const List = ({todos, remove}) => {
	let allTodos = [];
	
	if(todos.length > 0) {
		allTodos = todos.map(todo => {
			// passing todo and remove method reference
			return (<Todo todo={todo} remove={remove} />);
			//return (<p>{todo.value}</p>);
		});
	} else {
		allTodos.push(<h3>No items added!</h3>);	
	}
	
	return (
		<div>
			<p> Items: </p>
			{allTodos}
		</div>
	);
};


class ItemList extends Component {
	constructor(props) {
		super(props);		
		const localData = localStorage.todos && JSON.parse(localStorage.todos);
		this.state = { 
			data: localData
		};
		// binding methods
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}
	// Handler to update localStorage
	updateLocalStorage() {
		if (typeof(Storage) !== "undefined")
			localStorage.todos = JSON.stringify(this.state.data);
	}
	// Handler to add todo
	addTodo(val) {
		let id;
		// if localStorage is available then increase localStorage count
		// else use global window object's id variable
		if (typeof(Storage) !== "undefined") {
			id = Number(localStorage.count);
			localStorage.count = Number(localStorage.count) + 1;
		} else {
			id = window.id++;
		}
		
		const todo = { 
			value: val, 
			id: id 
		};
		
		this.state.data.push(todo);
		// update state
		this.setState({
			data: this.state.data
		}, () => {
			// update localStorage
			this.updateLocalStorage();
		});
	}
	// Handler to remove todo
	removeTodo(id) {
		// filter out the todo that has to be removed
		const list = this.state.data.filter(todo => {
			if (todo.id !== id)
				return todo;
		});
		// update state
		this.setState({
			data: list
		}, () => {
			// update localStorage
			this.updateLocalStorage();
		});
	}
	
	componentDidMount() {
		localStorage.clear();
		if (typeof(Storage) !== "undefined") {
			if(!localStorage.todos) {
				localStorage.todos = JSON.stringify(this.state.data);
			}
			if(!localStorage.count) {
				localStorage.count = 0;
			}

		} else {
			window.id = 0;
		}
	}
	
	render() {
		return (
			<div id="container">
				<Form addTodo={this.addTodo} />
				<List todos={this.state.data} remove={this.removeTodo} />
			</div>
		);
	}
}
export default ItemList;
