import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as routes from '../constants/routes';
import * as pages from './pages';
import withAuthentication from "./withAuthentication";
import CrudRoutes from "./crud/CrudRoutes";


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={routes.LANDING} component={pages.Dashboard} />
                    <Route exact path={routes.LOGIN} component={pages.LoginPage} />
                    <Route exact path={routes.DASHBOARD} component={pages.Dashboard} />
                    <CrudRoutes cruds={[
                        { baseRoute: routes.USERS, component: pages.UsersPage },
                    ]} />
                    <Route component={pages.NotFoundPage} />
                </Switch>
            </Router>
        );
    }
}

export default withAuthentication(App);
