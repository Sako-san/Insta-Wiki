import React from 'react';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import LoginContainer from './session_forms/login_container';
import SignupContainer from './session_forms/signup_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import PostIndexContainer from './posts/post_index_container';
import UserProfileContainer from './users/user_profile_container';

const App = () => (
    <section>
        <Switch>
<<<<<<< HEAD
            <ProtectedRoute path="/feed" component={PostIndexContainer} />
=======
            <ProtectedRoute exact path="/feed" component={PostIndexContainer} />
            <ProtectedRoute exact path="/profile" component={UserProfileContainer} />
>>>>>>> profiles
            <AuthRoute path="/signup" component={SignupContainer} />
            <AuthRoute path="/login" component={LoginContainer} />
            
            <Route path='/' component={SplashContainer} />
        </Switch>
    </section>
);


export default App;