import React, {Component} from 'react'

import _ from 'lodash'

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

    itemCheckedOff = (event) => {
        event.preventDefault();
        this.props.toggle(this.props.item);
    }
    itemsToBeRendered = (items) => {
        let itemList = []
        console.log(items)
        if(items.length > 0){
            itemList = items.map((item, index) => {
                return (
                <div>
                    <div key={item.index}>
                        {item.quantity} 
                        {item.itemname}: 
                        {item.description}
                    </div> 
                    <a href="" onClick={this.itemCheckedOff}>✓</a>
                    <small style={{color:'green'}}>Hamza</small>
                </div>
            )})
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

// this componente gets rendered to DOM
// passes createItem function as prop to NewItem Class so users can add additional items to event
// passes toggleTask function as prop to ItemList
export default class ItemsCheckList extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
        }
    }
    // receives list of items for event as props from Welcome.js

    // passed to NewItem class above
    createItem = (text, quantity, description) => {
        this.items.push({
            itemname: text,
            quantity: quantity,
            description: text,
            done: false
        });
        console.log(this.items)
    }

    // passed to ItemList class above
    // sets state if item has been checked or not
    toggleTask = (item) => {
        let task = _.find(this.props.items, item);
        task.done = !task.done;
        this.setState({items: this.state.items});
    }
    
    render() {
        return (
            <div>
                <NewItem createItem={this.createItem} />
                <ItemList items={this.props.items} toggle={this.toggleTask}/>
            </div>
        );
    }
}