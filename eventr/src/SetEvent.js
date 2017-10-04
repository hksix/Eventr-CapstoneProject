import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import {Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn,} from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import ItemList from './ListOfItems.js'
import SubmitSnackBar from './Submit.js'
import Card from 'material-ui/Card';


import {DateSelector, TimeSelector, LocationSelector} from './setevent/WhenWhere.js'
import {NameSelector, DescriptionSelector} from './setevent/NameDesc.js'
// google maps drawer for example
// request invite
// public event toggle - radius from current location  but doesnt show actual location // trending parties in area 
// attendees 100/150 
// parent teacher meetings
// set cover for party entry
// dress code

// taking the guess work out of your event

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

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
    


class PartyTypeTable extends Component {
    state = {
      height: '100px',
      selected: [3],
      types:[]
    };
    componentDidMount(){
      fetch('/get_tables_data/event_categories/category_id')
        .then(res=> res.json())
        .then(types => this.setState({types}));
    }
    
    isSelected = (index) => {
      return this.state.selected.indexOf(index) !== -1;
    };
  
    handleRowSelection = (selectedRows) => {
      this.setState({
        selected: selectedRows,
      });
    };
  
    render() {
      return (
        <div>
          <h2 style={styles.headline} style={{textAlign: 'center'}}>Select type of event</h2>   
            <Table onRowSelection={this.handleRowSelection} height={this.state.height}>
              <TableBody>
              {this.state.types.map(type=>
                <TableRow selected={this.isSelected(type.category_id)}>
                  <TableRowColumn>{type.category_name}</TableRowColumn>
                </TableRow>
              )}
              </TableBody>
            </Table>
        </div>
      );
    }
  }

class SelectFriends extends Component {
    state = {
      values: [],
    };
  
    handleChange = (event, index, values) => this.setState({values});
  
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

  /**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class SubmitButton extends Component {
    state = {
      open: false,
    };
  
    handleOpen = () => {
      this.setState({open: true});
    };
  
    handleClose = () => {
      this.setState({open: false});
    };
  
    render() {
      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onClick={this.handleClose}>
        </FlatButton>,
      ];
  
      return (
        <div>
          <RaisedButton label="Sumbit" onClick={this.handleOpen} />
          <Dialog
            title="Lets do this"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            Ready to party?
          </Dialog>
          
        </div>
      );
    }
  }
        
export class SetEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      eventName: "",
      eventDiscription:'',
      eventLocation: "",
      eventTime: '',
      eventDate: '',
      eventType: "",
      eventPeople:'',
      eventItems:'',
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    // console.log(<EventSummary date={this.props.EventDate}/>)
    
    return (
      <Card>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          style={{
            justifyContent: 'space-between',
            width: '100%',
          }}
        >

          <Tab style={{fontSize: '12px', paddingLeft:"5px"}} label="Name & Description" value={0} />
          <Tab style={{fontSize: '12px'}} label="When & Where" value={1} />
          <Tab style={{fontSize: '12px'}} label="Event Type" value={2} />
          <Tab style={{fontSize: '12px'}} label="Invite" value={3} />
          <Tab style={{fontSize: '12px'}} label="Items" value={4} />
          <Tab style={{fontSize: '12px'}} label="Finish" value={5} />
        </Tabs>

        <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
        >
        <div id="name&Description">
          <NameSelector name={this.state.eventName}
            changeHandler={this._handleNameChange}/>
            <br/>
            <DescriptionSelector disc={this.state.eventDiscription}
            changeHandler={this._handleDiscripChange}/>
              </div>

            <div id="When&where" style={{textAlign: 'center'}}>
                <div>
                    <h2 style={styles.headline} style={{textAlign: 'center'}}>When and where?</h2> 
                        Type in the details below.<br />
                    <LocationSelector location={this.state.eventLocation}
                      changeHandler={this._handleLocationChange}/>    
                </div>
                <div>
                    <DateSelector date={this.state.eventDate}
                      changeHandler={this._handleDateChange}/>
                </div>
                <div>
                    <TimeSelector time={this.state.eventTime}
                    changeHandler={this._handleTimeChange}/>
                </div>
            </div>

            <div style={styles.slide}>
                <h2 style={styles.headline} style={{textAlign: 'center'}}>Invite your peeps</h2> 
                <SelectFriends/>
            </div>

            <div style={styles.slide}>
                <h2 style={styles.headline} style={{textAlign: 'center'}}>Items page</h2>
                <PartyTypeTable/>
                <ItemList/> 
            </div>

            <div style={styles.slide} style={{textAlign: 'center'}}>
                <h2 style={styles.headline} style={{textAlign: 'center'}}>Summary page</h2>
                <p>Name: {this.state.eventName}</p>
                <p>Description: {this.state.eventDiscription}</p>
                <p>Location: {this.state.eventLocation}</p>
                <p>Time: {this.state.eventTime.toString()}</p>
                <p>Date: {this.state.eventDate.toString()}</p>
                <p>Type</p>
                <p>Number of people invited</p>
                <p>Number of required items needed</p>
                <SubmitButton /> 
            </div>
        </SwipeableViews>
      </Card>
    );
  }
  _handleNameChange=(newName)=>{
    this.setState({
      eventName: newName
    })
  }
  _handleDiscripChange=(newDiscrip)=>{
    this.setState({
      eventDiscription: newDiscrip
    })
  }
  _handleLocationChange=(newLocation)=>{
    this.setState({
      eventLocation: newLocation
    })
  }
  _handleDateChange=(newDate)=>{
    this.setState({
      eventDate: newDate
    })
  }
  _handleTimeChange=(newTime)=>{
    this.setState({
      eventTime: newTime
    })
  }

}
