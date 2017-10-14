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
            key={item.indx} 
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
  _toggleCheckbox = (label) => {
    // checks box
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
      console.log(label)
    } else {
      //unchecks box
      this.selectedCheckboxes.add(label);
      console.log(label)
      }
  }

  _handleChangeName = (e) => {
		this.setState({
			value: e.target.value
		});
	}

          
}