// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import {
  ArcSeries,
  RadialChart,
  XYPlot
} from 'react-vis';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
    opacity: 1,
    stroke: "blue",
    strokeWidth: 1,    
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

function ArcSeries1(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>

      <RadialChart
        colorType={'literal'}
        colorDomain={[0, 100]}
        colorRange={[0, 10]}
        margin={{top: 100}}
        data={[
          {angle: 1, color: '#89DAC1', label: 'green', opacity: 0.2},
          {angle: 2, color: '#F6D18A', label: 'yellow'},
          {angle: 5, color: '#1E96BE', label: 'cyan'},
          {angle: 3, color: '#DA70BF', label: 'magenta'},
          {angle: 5, color: '#F6D18A', label: 'yellow again'}
        ]}
        showLabels
        width={400}
        height={300} />


    </div>
  );
}

ArcSeries1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArcSeries1);
