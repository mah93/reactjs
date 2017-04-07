import React from 'react';
import { Router, Route } from 'dva/router';
import Count from './routes/count'
import Second from './routes/second'

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app}) {
  const routes = [
    {
      path: '/',
      name: 'count',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/count'));
          cb(null, require('./routes/count'));
        });
      },
    }
  ];

  // return <Router history={history} routes={routes} />;

  return (
    <Router history={history}>
      <Route path="/" component={Count} />
      <Route path="/second" component={Second} />
    </Router>
	)


}

export default RouterConfig;
