import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import RaisedButton from 'material-ui/RaisedButton';
// import ContentFilter from 'material-ui/svg-icons/content/filter-list';
// import FileFileDownload from 'material-ui/svg-icons/file/file-download';

/**
 * Three controlled examples, the first allowing a single selection, the second multiple selections,
 * the third using internal state.
 */
export default class EditDropdown extends Component {
  state = {
    valueSingle: '3',
    
  };

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          onChange={this._handleChangeSingle}
          value={this.state.valueSingle}
        >
          <MenuItem value="1" primaryText="Edit" />
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