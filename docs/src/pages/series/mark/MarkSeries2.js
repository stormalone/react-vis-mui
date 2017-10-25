import React from 'react';
import PropTypes from 'prop-types';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
  Hint
} from 'react-vis';

class ShowcaseButton extends React.Component {
  render() {
    const {buttonContent, onClick} = this.props;
    return (
      <button
        className="showcase-button"
        onClick={onClick}>
        {buttonContent}
      </button>
    );
  }
}

ShowcaseButton.PropTypes = {
  buttonContent: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

function getRandomData() {
  return (new Array(100)).fill(0).map(row => ({
    x: Math.random() * 10,
    y: Math.random() * 20,
    size: Math.random() * 10,
    color: Math.random() * 10,
    opacity: Math.random() * 0.5 + 0.5
  }));
}
const colorRanges = {
  typeA: ['#59E4EC', '#0D676C'],
  typeB: ['#EFC1E3', '#B52F93']
};

const randomData = getRandomData();
const nextType = {
  typeA: 'typeB',
  typeB: 'typeA'
};

export default class MarkSeries2 extends React.Component {
  state = {
    data: randomData,
    colorType: 'typeA',
    value: false
  }

  render() {
    const {data, colorType} = this.state;
    const markSeriesProps = {
      animation: true,
      className: 'mark-series-example',
      sizeRange: [5, 15],
      seriesId: 'my-example-scatterplot',
      colorRange: colorRanges[colorType],
      opacityType: 'literal',
      data,
      onNearestXY: value => this.setState({value})
    };

    return (
      <div>
        <div>
          <ShowcaseButton
            onClick={() => this.setState({data: getRandomData()})}
            buttonContent={'UPDATE DATA'} />
          <ShowcaseButton
            onClick={() => this.setState({colorType: nextType[colorType]})}
            buttonContent={'UPDATE COLOR'} />
        </div>
        <XYPlot
          onMouseLeave={() => this.setState({value: false})}
          width={600}
          height={300}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
            <MarkSeries {...markSeriesProps}/>
          {this.state.value ?
            <Hint value={this.state.value}/> :
            null
          }
        </XYPlot>
      </div>
    );
  }
}
