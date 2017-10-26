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
});

function LineSeries2(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <XYPlot
        width={300}
        height={300}>
        <HorizontalGridLines />
        <LineSeries
          data={[
            {x: 1, y: 10},
            {x: 2, y: 10},
            {x: 3, y: 1},
            {x: 4, y: 1},
            {x: 5, y: 30},
            {x: 6, y: 15},
          ]}/>
        <XAxis />
        <YAxis />
      </XYPlot>
    </div>
  );
}

LineSeries2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LineSeries2);
