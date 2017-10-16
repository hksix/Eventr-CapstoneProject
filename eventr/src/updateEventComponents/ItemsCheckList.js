import React, {Component} from 'react'

import _ from 'lodash'
import axios from 'axios';
import { ROOT_URL } from '../App.js'

class NewItem extends Component {
    createNewItemForEvent = (event) => {
        event.preventDefault();
        let text = this.refs.NewItemText.value;
        let description = this.refs.NewItemDescription.value;
        let quantity = this.refs.NewItemQuantity.value;
        if (text) {
            this.props.createItem(text, quantity, description);
            this.refs.NewItemText.value = '';
            this.refs.NewItemDescription.value = '';
            this.refs.NewItemQuantity.value = '';
        } 
    }
    // ability to add more items to event from welcome page
    render() {
        return (
            <form onSubmit={this.createNewItemForEvent}>
                <label>Add more</label> 
                <input type="text" ref="NewItemText" placeholder="Item"/> 
                <input type="text" ref="NewItemDescription" placeholder="Description"/>
                <input type="text" ref="NewItemQuantity" placeholder="Qty" style={{width: 30}}/>
                <button type="submit">+</button>
            </form>
        );
    }
}

// passes props to item Class to render list of items to DOM
class ItemList extends Component {


    itemsToBeRendered = (items) => {
        let itemList = []
        console.log(items)
        if(items.length > 0){
            itemList = items.map((item, index) => {
                console.log(item.ownerid)
                if(item.ownderid === null){
                    return (
                    <div>
                        <a 
                        href="" 
                        key={item.index} 
                        value={item.ownerid}
                        onClick={this.props.toggle(this.value)}>
                        <span> {item.quantity} </span>
                        <span> {item.itemname} </span>
                        <span> {item.description} </span>
                         ✓ </a>
                    </div>)
                } else {
                    return (
                        <div>
                        <a href=""
                            key={item.index} 
                            value={item.ownerid}
                            onClick={this.props.toggle}>
                        <del> {item.quantity} </del>
                        <del> {item.itemname} </del>
                        <del> {item.description} </del> ✓ </a>
                        <small style={{color:'green'}}>{item.ownerid}</small>
                    </div>)
                }})
        } else {
            itemList.push(<li>No items added to event</li>)
        }
        return(
            <ul>
                {itemList}
            </ul>
        )
        
    }
    
    render() {
        console.log(this.props.items)
        return (
            <div>
                {this.itemsToBeRendered(this.props.items)}
            </div>
        );
    }
}


// this componente gets rendered to DOM
// passes createItem function as prop to NewItem Class so users can add additional items to event
// passes toggleTask function as prop to ItemList
export default class ItemsCheckList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            eventid: '',
        }
    }
    // receives list of items for event as props from Welcome.js
    componentWillReceiveProps = (nextProps) => {
        this.setState({
            items: nextProps.items,
            eventid: nextProps.eventid
        })
    }
    
    // passed to NewItem class above
    createItem = (text, quantity, description) => {
        console.log("trying to create item")
        let addedItem = []
        addedItem.push({
            itemname: text,
            quantity: quantity,
            description: text,
            ownerid: null
        })
        console.log(addedItem)
        this.props.handleClick(addedItem)
    }

    // update item in db
    //server.putt('/api/v1/event_inventory/:eventid', addItemToInventory);
    saveItemToEventDB = (itemname, quantity, description, ownerid) => {
        console.log(itemname, quantity, description, ownerid)
        if(ownerid === null){
            axios.put(`${ROOT_URL}/event_inventory/${this.props.eventid}`, {
                itemname: itemname,
                quantity: quantity,
                ownerid: ownerid,
                description: description
            })
        } else {
            axios.put(`${ROOT_URL}/event_inventory/${this.props.eventid}`, {
                itemname: itemname,
                quantity: quantity,
                ownerid: null,
                description: description
            })
        }
    }

    // passed to ItemList class above
    // sets state if item has been checked or not
    toggleTask = (event, value) => {
        event.preventDefault();
        console.log(value)
        if(value === null){
            value = this.props.userName.id
            console.log("if value is null")
            console.log(value)
        } if(value === this.props.userName.id){
            value = null
            console.log("if value has props")
            console.log(value)
        } else {
            console.log(value + 'has this item')
        }
    }
    
    render() {
        return (
            <div>
                <NewItem createItem={this.createItem} />
                <ItemList items={this.state.items} user={this.props.userName.name} save={this.props.saveItemToEventDB} toggle={this.toggleTask}/>
            </div>
        );
    }
}





// class Item extends Component {

//     render() {
//         let item = this.props.item
//         console.log(this.props.item)
//         return (
//             <li>
//                 <del key={this.props.key} id={this.props.ownerid}>
//                     {this.props.itemname} 
//                     {this.props.description}
//                     {this.props.quantity}
//                 </del> 
//                     <a href="" onClick={this.itemCheckedOff}>✓</a>
//                 <small style={{color:'green'}}>Hamza</small>
//             </li>
//         );
//     }
// }