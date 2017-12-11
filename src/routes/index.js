import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from '../containers/login'
import Auth from '../containers/auth'
import Dashboard from '../containers/dashboard'

export default (
    <Router>
        <Switch>            
            <Auth exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/m/:module/:menu" component={Dashboard} />            
        </Switch>
    </Router>
)
