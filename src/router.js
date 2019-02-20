import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
// import 'antd/dist/antd.css'; 
import IndexPage2 from './Home/index.jsx';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage2} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
