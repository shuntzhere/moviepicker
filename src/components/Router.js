import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import HomePage from "./Homepage";

import { BrowserRouter as Router } from "react-router-dom";


const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact={true} path="/" component={HomePage} />

            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);

export default AppRouter;
