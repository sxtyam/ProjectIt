import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './Home';
import LoginForm from './Login/Login';

const routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={LoginForm} />
            </Switch>
        </BrowserRouter>
    )
}

export default routes;