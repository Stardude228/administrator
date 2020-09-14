import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Main from './Main';

function Routers() {
    return (
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
    )
}

export default Routers;
