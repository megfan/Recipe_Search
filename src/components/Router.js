import React from 'react';
import {HashRouter, Switch, Route} from "react-router-dom";
import { createBrowserHistory } from "history/createBrowserHistory";

import App from "../App";
import Recipe from "./Recipe";

const hist = createBrowserHistory();
const Router = () => (
    <HashRouter history={hist}>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/recipe/:id" component={Recipe}/>
        </Switch>
    </HashRouter>
)
export default Router;