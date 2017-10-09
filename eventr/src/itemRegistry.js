import React, {Component} from 'react';


const data = [{id:"00001", item:"Appetizer"}]

class ItemRegistry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

//    generateItemId() {
//         var itemId = Math.floor(Math.random()*90000) + 10000;
//         return itemId;
//     }

    onChange = (event) => {
    this.setState({term: event.target.value});
     }


    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
        });
    }

}

export default ItemRegistry;





