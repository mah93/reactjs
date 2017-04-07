import React from 'react';
import { connect } from 'dva';

function Second({second,dispatch}) {
  console.log(second)
  return (
    <div>
      <h2>{second.count}</h2>
    </div>
  )
}

Second.propTypes = {
};

function mapStateToProps(state) {
  return {
    second: state.second,
  };
}


export default connect(mapStateToProps)(Second)
