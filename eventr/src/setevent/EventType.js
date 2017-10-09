import React, {Component} from 'react';
import {Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn,} from 'material-ui/Table';
import axios from 'axios';
import { ROOT_URL } from '../App.js';
const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
  };

export default class PartyTypeTable extends Component {
    constructor(props){
        super(props);
        
    this.state = {
      height: '300px',
      selected: [null],
      types:[]

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
    handleTypeSelector = ()=>{
        var selectionNum = this.state.selected
            var selectedType = []
            if(this.state.types[selectionNum] !== undefined ){
                this.props.changeHandler(this.state.types[selectionNum].category_name)
            }
        }

    render() {       
      return (
        <div>
          <h2 style={styles.headline} style={{textAlign: 'center'}}>Select type of event</h2>   
            <Table onRowSelection={this.handleRowSelection} height={this.state.height}> 
            <TableBody>
            {this.state.types.map(type=>
              <TableRow  selected={this.isSelected(type.category_name)}>
                <TableRowColumn>{type.category_name}</TableRowColumn>
              </TableRow>
            )}
            </TableBody>
            </Table>
        </div>
      );
    }
  }

  // export default PartyTypeTable;