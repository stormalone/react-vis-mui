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
  AreaSeries
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
        <AreaSeries
          className="area-series-example"
          curve="curveNatural"
          data={[
            {x: 1, y: 10},
            {x: 2, y: 5},
            {x: 3, y: 15}
          ]}/>
      </XYPlot>
    </div>
  );
}

MarkSeries1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MarkSeries1);
