import React, {Component} from 'react';

// import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';       
import Checkbox from 'material-ui/Checkbox';     



const styles = {
  checkbox: {
    marginBottom: 16,
    width: 150,
    // paddingRight: 20,
    // borderColor: '#000',
    // borderWidth: 2,
    // borderStyle: 'solid'
  },
  checkboxContainer: {
    maxHeight: 400,
    overflow: 'scroll',
    // borderColor: '#FF5733',
    // borderWidth: 2,
    // borderStyle: 'solid'
  },
  textField: {
    width: 250,
    // borderColor: '#808080',
    // borderWidth: 2,
    // borderStyle: 'solid'
  }
};

const itemsForEvent = []

// rendered to SetEvent.js 
export default class EventTypeDefaultItems extends Component {
  constructor(props){
      super(props);
      
  this.state = {
    defaultItems: [],
    value: '',
    };
  }
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }
  
  render() {
    
    return (
      <div style={styles.checkboxContainer}>  

        {/* maps through database of items attached to types of events to then populate certain items associated with event */}
        {this.props.defaultItems.map((item, indx) => (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
          <Checkbox 
            label={item}
            value={item} 
            key={item.index} 
            onCheck={this._toggleCheckbox}
              
            style={styles.checkbox}/>
            <TextField
              floatingLabelText="Description"
              style={styles.textField}
              onChange={this._handleChangeName}
            >
            </TextField>
          </div>
        ))}
      </div>
    )
  }
  
  // used this function over material ui updateCheck because on click was causing all items to be checked
  //http://react.tips/checkboxes-in-react/ 
  // ************ DO NOT CHANGE ORDER OF ARGUMENTS BEING PASSED INTO FUNCTION ************
  // ************ LABEL is NOT the same lable that is given to the checkbox. Label for this function is the event of the checkbox being handled
  // ************ DO NOT CHANGE ORDER OF IF STATEMENTS
  // had to set up two different if statements before taking care of label for checkboxes because label interfears with event and value
  // value is a boolian when used in correct order
  // event.target.value is value (item name) of the checkbox
  _toggleCheckbox = (event, value, label) => {

    if (value === true){
      itemsForEvent.push(event.target.value)
      console.log(itemsForEvent)
    } if (value === false){
      // splice is not the correct function to use, but will change later (katie 10/14)
      itemsForEvent.splice(event.target.value)
      console.log(itemsForEvent)
    }

    // ********** Handles checkbox function. Do not mess with this. Label interfears with many other aspects of the checkbox
    // checks box
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      //unchecks box
      this.selectedCheckboxes.add(label);
      }
  }

  _handleChangeName = (e) => {
		this.setState({
			value: e.target.value
		});
	}

          
}