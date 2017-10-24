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
  VerticalBarSeries
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

function BarSeries1(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

    <XYPlot
      xType="ordinal"
      width={300}
      height={300}
      xDistance={100}
      >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <VerticalBarSeries
        className="vertical-bar-series-example"
        data={[
          {x: 'A', y: 10},
          {x: 'B', y: 5},
          {x: 'C', y: 15}
        ]}/>
      <VerticalBarSeries
        data={[
          {x: 'A', y: 12},
          {x: 'B', y: 2},
          {x: 'C', y: 11}
        ]}/>
    </XYPlot>




    </div>
  );
}

BarSeries1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarSeries1);
