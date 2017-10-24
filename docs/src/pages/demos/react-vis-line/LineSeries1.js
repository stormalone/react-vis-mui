// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
    opacity: 1,
    stroke: "blue",
    fill: theme.palette.background.contentFrame,
    strokeWidth: 2
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function LineSeries1(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <XYPlot
      width={300}
      height={300}>
      <HorizontalGridLines />
      <LineSeries
        data={[
          {x: 1, y: 3},
          {x: 2, y: 4},
          {x: 3, y: 1},
          {x: 4, y: 50},
          {x: 5, y: 30},
          {x: 6, y: 75},
        ]}/>
      <XAxis />
      <YAxis />
    </XYPlot>
    </div>
  );
}

LineSeries1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LineSeries1);
