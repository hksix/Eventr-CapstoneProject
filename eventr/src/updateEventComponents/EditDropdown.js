import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
// import ContentFilter from 'material-ui/svg-icons/content/filter-list';
// import FileFileDownload from 'material-ui/svg-icons/file/file-download';

/**
 * Three controlled examples, the first allowing a single selection, the second multiple selections,
 * the third using internal state.
 */
// import DialogExampleDialogDatePicker from './EditFields.js'

export default class EditDropdown extends Component {
  state = {
    valueSingle: '3',
    open: false,
    clicked: true,
  };
  _handleEdit= ()=>{
    this.setState({
      clicked: false,
    })
  }
  handleOpen = () => {
    this.setState({open: true});
    this._handleEdit();
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
    return (
      <div>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          onChange={this._handleChangeSingle}
          value={this.state.valueSingle}
        >
          <MenuItem value="1" primaryText="Edit"
          onClick={this.handleOpen}
          style={{display: this.state.clicked ? null : 'none' }} />
          <Dialog
          title="Dialog With Date Picker"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          >
          Open a Date Picker dialog from within a dialog.
          {/* <DatePicker hintText="Date Picker" /> */}
        </Dialog>

        </IconMenu>
       
      </div>
    );
  }
  _handleChangeSingle = (event, value) => {
    this.setState({
      valueSingle: value,
    });
  };

  // _handleOpenMenu = () => {
  //   this.setState({
  //     openMenu: true,
  //   });
  // }
  // _handleOnRequestChange = (value) => {
  //   this.setState({
  //     openMenu: value,
  //   });
  // }

}