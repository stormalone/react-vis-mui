// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries
} from 'react-vis';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
    opacity: 1,
    stroke: "blue",
    fill: theme.palette.background.contentFrame
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function MarkSeries1(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <XYPlot
        width={300}
        height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <MarkSeries
          className="mark-series-example"
          strokeWidth={2}
          opacity="0.8"
          sizeRange={[5, 15]}
          data={[
            {x: 1, y: 10, size: 30},
            {x: 1.7, y: 12, size: 10},
            {x: 2, y: 5, size: 1},
            {x: 3, y: 15, size: 12},
            {x: 2.5, y: 7, size: 4}
          ]}/>
      </XYPlot>
    </div>
  );
}

MarkSeries1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MarkSeries1);
