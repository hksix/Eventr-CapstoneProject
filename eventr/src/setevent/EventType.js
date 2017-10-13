import React, {Component} from 'react';
import {Table,TableBody,TableRow,TableRowColumn,} from 'material-ui/Table';
import axios from 'axios';
import { ROOT_URL } from '../App.js';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
      textAlign: 'center',
    },
  };

export default class PartyTypeTable extends Component {
    constructor(props){
        super(props);
        
    this.state = {
      height: '300px',
      selected: [null],
      types:[],
      defaultItems:'',
      value: 1
    };
  }
  componentDidMount(){
    axios.get(`${ROOT_URL}/event_categories`)
    .then((res) => {
      this.setState({types:res.data.data})
    })
  }
  isSelected = (name) => {
      return name === this.props.type 
  };
  handleRowSelection = (selectedRows) => {
      this.setState({
          selected: selectedRows,
        },this.handleTypeSelector
      )
  };
  handleChange = (event, index, value) => this.setState({value});

  handleTypeSelector = ()=>{
      var selectionNum = this.state.selected
        // var selectedType = []
        if(this.state.types[selectionNum] !== undefined ){
          axios.get(`${ROOT_URL}/event_categories/${selectionNum}/items`)
            .then((res)=>{
              console.log(res.data)
              this.setState({
                defaultItems:res.data.map((item)=>{
                  return item.item_name
                })
              },()=>{
                // console.log(this.state.defaultItems)
                this.props.changeHandler(this.state.types[selectionNum].category_name, this.state.selected, this.state.defaultItems)
              })
            })
              // this.props.changeHandler(this.state.types[selectionNum].category_name, this.state.selected)
          }
      }
  
  render() { 
    
    return (
      <div>
        <h2 style={styles.headline}>Select type of event</h2>  
          {/* <Table onRowSelection={this.handleRowSelection} height={this.state.height}>  */}
          <DropDownMenu onRowSelection={this.handleRowSelection} value={this.state.value} onChange={this.handleChange} maxHeight={300}>
          {this.state.types.map((type, indx) =>
            
            <MenuItem primaryText={type.category_name} value={indx} selected={this.isSelected(type.category_name)}/>
          )}
          </DropDownMenu>
          {/* </Table> */}
      </div>
    );
  }
}
