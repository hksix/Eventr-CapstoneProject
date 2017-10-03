import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import ProfileBox from './ProfileBox'

const styles = {
  root: {
    marginLeft: "5%",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    
   
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
  },
  gridListMain: {
    // overflowY: 'auto',
    marginLeft: "5%",
    

  },
  gridTile:{
    border:" 1px solid red",
    // overflowY: 'auto',
  }
};


/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
        style={styles.gridListMain}
        cols={2}
        cellHeight={500}
        padding={1}
    >
    <GridTile >
        <GridList
          cellHeight={500}
          style={styles.gridList}
          cols={2}
        >
            <GridTile style={styles.gridTile}>
                <ProfileBox/>
            </GridTile>

            <GridTile style={styles.gridTile}>
                <ProfileBox/>
            </GridTile>
        </GridList>
    </GridTile>
        
    <GridTile>
        <GridList
            cols={1.2}
        >
        <GridTile style={styles.gridTile}>
            <ProfileBox/>
        </GridTile>
        
        <GridTile style={styles.gridTile}>
            <ProfileBox/>
        </GridTile>
        </GridList>
    </GridTile>
</GridList>
  </div>
);

export default GridListExampleSimple;