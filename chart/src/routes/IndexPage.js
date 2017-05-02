import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';

function IndexPage() {
  return (
    <XYPlot
      width={300}
      height={300}>
      <HorizontalGridLines />
      <LineSeries
        data={[
          {x: 1, y: 10},
          {x: 2, y: 5},
          {x: 3, y: 15}
        ]}/>
      <XAxis />
      <YAxis />
    </XYPlot>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
