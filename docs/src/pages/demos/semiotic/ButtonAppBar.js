// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import { ORFrame } from "semiotic";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function ButtonAppBar(props) {

  const colors = [
      '#00a2ce',
      '#4d430c',
      '#b3331d',
      '#b6a756'
  ]
  const data = [ 5, 8, 10, 15 ]

  const { classes } = props;
  return (
    <div>
     <ORFrame
        size={[ 700,400 ]}
        data={data}
        projection={"radial"}
        style={d => ({ fill: "red", stroke: "darkgray", strokeWidth: 1 })}
        type={{ type: "bar", innerRadius: 25 }}
        oLabel={true}

        rAccessor={d => d.value}
        margin={{ left: 20, top: 20, bottom: 20, right: 20 }}
        oPadding={0}
      />
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
