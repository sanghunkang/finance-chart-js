import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import PrimarySearchAppBar from './components/AppBar';
import Valuation from './contents/Valuation';

function App() {
  return (
    <React.Fragment>
    <Suspense fallback={<div>Loading...</div>}>
    <PrimarySearchAppBar />
    <Switch>
      <Route exact path="/" component={Valuation} />
      {/* {pages.map(page => <Route path={page.route} component={page.component} />)} */}
    </Switch>
    </Suspense>
    </React.Fragment>
  );
}

export default App;
