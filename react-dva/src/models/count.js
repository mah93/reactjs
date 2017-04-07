import * as usersService from '../services/count';

export default {
  namespace: 'count',
  state: {
  	count:0,
    data:[],
  },
  reducers: {
    add(state) {
     return {...state,count:state.count+1};
     },
    minus(state) {
     return {...state,count:state.count-1};
 	   },
    save(state,{payload:data}) {
      return {...state,data:data}
    },
  },
  effects: {
  	*login({ payload }, { call, put }) {
      const { data } = yield call(usersService.login, 1);
      console.log(data)
      yield put({
        type: 'save',
        payload: {
          data,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          // 当前请求路径为‘／’时  自动执行方法
          dispatch({ type: 'fetch'});
        }
      });
    },
  },

};
