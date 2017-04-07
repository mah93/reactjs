import React from 'react';
import { connect } from 'dva';
import { browserHistory } from 'react-router'
import {
  Spin
}from 'antd'


function Count({count,dispatch,loading}) {
  console.log(count)
  return (
    <div>
      <h2>{count.count}</h2>
      <button onClick={() => { dispatch({type: 'count/add',payload:'sss'}); }}>+</button>
      <button onClick={() => { dispatch({type: 'count/minus',payload:'sss'}); }}>-</button>
      <button onClick={() => { dispatch({type: 'count/login'})}}>网络请求</button>
      <button onClick={() => { browserHistory.push('/second') }}>跳转页面</button>
      <Spin spinning={loading}/>
    </div>
  )
}

Count.propTypes = {
};

function mapStateToProps(state) {
  return {
    count: state.count,
    loading: state.loading.models.users
  };
}


export default connect(mapStateToProps)(Count)
