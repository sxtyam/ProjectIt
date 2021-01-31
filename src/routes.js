import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './Home';
import LoginForm from './Login/Login';
import SignupForm from './Signup/Signup';

const routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={LoginForm} />
                <Route path="/signup" exact component={SignupForm} />
            </Switch>
        </BrowserRouter>
    )
}

export default routes;