import request from '../utils/request';
import fetch from 'dva/fetch';

// export function login({ page=1 }) {
//   return request(`/api/express/query?appkey=cf96b24089f3e8b5&type=sfexpress&number=928437095958`);
// }

export function login() {
  const params = {page:'1',size:'6'};
  let form_data = new FormData();
  for (let key in params) {
    let value = params[key];
    form_data.append(key, value)
  }

  return request('api/eva/findEvaList',{
    method: 'POST',
    body: form_data,
  })
}
