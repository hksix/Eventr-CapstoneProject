import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';


const styles = {
    underlineStyle: {
        borderColor: '#7c5cb7',
      },
      floatingLabelStyle: {
        color: '#7c5cb7',
      },
      floatingLabelFocusStyle: {
        color:'#7c5cb7'
      },
  };

export class NameSelector extends Component{
    // constructor(props){
    //     super(props);
    // }

    _handleChangeName = (event, name)=>{
        this.props.changeHandler(name);
    }
    render(){
        return(
            <div style={{textAlign: 'center'}}>
            <h2 style={{textAlign: 'center'}}>Name and Description of your event.</h2> 
                <TextField
                  
                  floatingLabelText="Name"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  onChange={this._handleChangeName}
                >
                </TextField>
                </div>
        )
    }
}
export class DescriptionSelector extends Component{
    // constructor(props){
    //     super(props);
    // }

    _handleDiscName = (event, disc)=>{
        this.props.changeHandler(disc);
    }
    render(){
        return(
                <div  style={{textAlign: 'center'}}>
                      {/* <h2 style={styles.headline} style={{textAlign: 'center'}}>Description.</h2> */}
                <TextField
                  style={{textAlign: 'left', width: "50%", border:"1px solid gray"}}
                  floatingLabelText="Description"
                  floatingLabelStyle={styles.floatingLabelStyle}
                  floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                  multiLine={true}
                  rows={2}
                  onChange={this._handleDiscName}
                  >
                </TextField>
                </div>
        )
    }
}





        //     <TextField
        //     floatingLabelText="Address"
        //     floatingLabelStyle={styles.floatingLabelStyle}
        //     floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        //     onChange={this._handleChangeLocation}
        // />
        
    
