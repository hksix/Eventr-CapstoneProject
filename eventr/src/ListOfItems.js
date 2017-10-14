import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/clear';

// import axios from 'axios';
// import { ROOT_URL } from './App.js';


// Component Structure
// --------------------
// Container
// --> Form
// --> List
// ----> item



class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			description: ''
		};
	}	
	render() {
        const FloatingButtonAdd = () => (
            <div>
                <FloatingActionButton mini={true}>
                    <ContentAdd onClick={this.handleNewitemAddition} />
                </FloatingActionButton>
            </div>
        );
		return (
			// ref should be passed a callback
			// with underlying dom element as its
            // argument to get its reference
            // id="blank" is there to comunicate with the TextField box. This is needed but its a hidden element cause I suck at coding
			<div>
				<TextField
					hintText="Type in items needed..."
					value={this.state.value}
					onChange={this._handleChange}
				/>
				<TextField
					hintText="Description"
					description={this.state.description}
					onChange={this._handleDescriptionChange}
				/>
				<FloatingButtonAdd  />
				<br />
				<div id="blank" style={{display:'none' }}>
					<input 
						ref={node => {
							this.input = node;
						}}
					value={this.state.value}
					onChange={this._handleChange}/>
				</div>
			</div>
		);
	}
	
	_handleChange = (event) => {
		this.setState({
			value: event.target.value
		});
	}
	_handleDescriptionChange = (event) => {
		this.setState({
			description: event.target.description
		});
	}
	
	_handleNewitemAddition = () => {
        // console.log(this.input.value);
		if(this.input.value !== '') {
			this.props._addItemToEvent(this.input.value);
			this.setState({
				value: '',
				description: ''
			});
			
			this.input.placeholder = "Add Items here...";
		}
	}
}



//Renders within ItemList component
//lists all items for event added so far
const ListAllItemsForEvent = ({items, remove}) => {
	let allitems = [];
	
	if(items.length > 0) {
		allitems = items.map(item => {
			// passing item function below and remove method reference
			return (<CreatingItemForEvent item={item} remove={remove} key={item.id} />);
			//return (<p>{item.value}</p>);
		});
	} else {
		allitems.push(<h3>No items added!</h3>);	
	}
	
	return (
		<div>
			<span> Items: </span>
			{allitems}
		</div>
	);
};

// Renders within ItemList component
// returns item typed in PLUS a remove button for later use
const CreatingItemForEvent = ({item, remove}) => {
	const FloatingButtonRemove = () => (
		<div>
			<FloatingActionButton mini={true} secondary={true}>
				<ContentRemove onClick={()=> {
					console.log("removing item")
					remove(item.id)}} 
				/>
			</FloatingActionButton>
		</div>
		);
	// single item 
	return (
		<div>
			{item.value}
			<FloatingButtonRemove/>
		</div>
	);
};



class ItemList extends Component {
	constructor(props) {
		super(props);
		this.state={
			id: '',
			value:'',
		}
		const introData = [
			{
				id: -3, 
				value: "This is where your stuff will go"
			},
		];

		const localData = localStorage.items && JSON.parse(localStorage.items);
		this.state = { 
			data: localData || introData
		};
		
	}
	componentDidMount() {
		// localStorage.clear();
		localStorage.removeItem('count');
		if (typeof(Storage) !== "undefined") {
			if(!localStorage.items) {
				localStorage.items = JSON.stringify(this.state.data);
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
				<Form additem={this._addItemToEvent} />
				<ListAllItemsForEvent items={this.state.data} remove={this._removeItemFromEvent} />
			</div>
		);
	}

	//**************************** EVENT HANDLERS FOR ITEM LIST COMPONENT *************************************** */
	// Handler to update localStorage
	_updateLocalStorage = () => {
		if (typeof(Storage) !== "undefined")
			localStorage.items = JSON.stringify(this.state.data);
	}
	// Handler to add item to event list when making event
	_addItemToEvent = (val) => {
		let id;
		// if localStorage is available then increase localStorage count
		// else use global window object's id variable
		if (typeof(Storage) !== "undefined") {
			id = Number(localStorage.count);
			localStorage.count = Number(localStorage.count) + 1;
		} else {
			id = window.id++;
		}
		
		const item = { 
			value: val, 
			id: id,
		};
	
		this.state.data.push(item);
		this.setState({
				data: this.state.data
			}, () => {
			this._updateLocalStorage();
		});
	}
	// Handler of event to remove item
	_removeItemFromEvent = (id) => {
		// filter out the item that has to be removed
		const list = this.state.data.filter(item => {
			if (item.id !== id)
				return item;
		});
		this.setState({
			data: list
		}, () => {
			this._updateLocalStorage();
		});
	}
	



	
	
}
export default ItemList;