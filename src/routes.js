import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './Home';
import LoginForm from './Login/Login';
import AllProjects from './Project/AllProjects';
import AddProject from './Project/AddProject';
import SignupForm from './Signup/Signup';
import Profile from './Profile/Profile';
import Project from './Project/Project';


const routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={LoginForm} />
                <Route path="/signup" exact component={SignupForm} />
                <Route path="/project/:field/all" exact component={AllProjects} />
                <Route path="/profile" exact component={Profile}/>
                <Route path="/project/add" exact component={AddProject} />
                <Route path="/user/:username" exact component={Profile} />
                <Route path="/project/:projectId" exact component={Project} />

            </Switch>
        </BrowserRouter>
    )
}

export default routes;