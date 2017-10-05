import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const persons = [
    {value: 0, name: 'Oliver Hansen'},
    {value: 1, name: 'Van Henry'},
    {value: 2, name: 'April Tucker'},
    {value: 3, name: 'Ralph Hubbard'},
    {value: 4, name: 'Omar Alexander'},
    {value: 5, name: 'Carlos Abbott'},
    {value: 6, name: 'Miriam Wagner'},
    {value: 7, name: 'Bradley Wilkerson'},
    {value: 8, name: 'Virginia Andrews'},
    {value: 9, name: 'Kelly Snyder'},
  ];
    

export class SelectFriends extends Component {
    constructor(props){
        super(props);
    }
    state = {
      values: [],
    };
  
    handleChange = (event, index, values) =>{ 
      this.setState({values})
      this.sendNames(values)
    };
    sendNames = (values)=>{
      // console.log(values)
      const listOnames = values.map((number) =>{
        return (persons[number].name)}
    )
      this.props.changeHandler(values.length, listOnames)
    }
    
  
    selectionRenderer = (values) => {
      
      switch (values.length) {
        case 0:
          return '';
        case 1:
          return persons[values[0]].name;
        default:
          return `${values.length} friends invited`;
      }
    }
  
    menuItems(persons) {
      return persons.map((person) => (
        <MenuItem
          key={person.value}
          insetChildren={true}
          checked={this.state.values.indexOf(person.value) > -1}
          value={person.value}
          primaryText={person.name}
        />
      ));
    }
  
    render() {
      return (
        <SelectField
          multiple={true}
          hintText="Select a name"
          value={this.state.values}
          onChange={this.handleChange}
          selectionRenderer={this.selectionRenderer}
        >
          {this.menuItems(persons)}
        </SelectField>
      );
    }
  }


// export class DrawerOfFriends extends Component {
//       constructor(props) {
//         super(props);
//         this.state = {open: false};
//       }
    
//       handleToggle = () => this.setState({open: !this.state.open});
    
//       render() {
//         return (
//           <div>
//             <RaisedButton
//               label="Toggle Drawer"
//               onClick={this.handleToggle.bind(this)}
//             />
//             <Drawer width={500} openSecondary={true} open={this.state.open} >
//               <AppBar title="AppBar" />
//             </Drawer>
//           </div>
//         );
//       }
    // }