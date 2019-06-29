import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import App from "../App";
import BeerDetail from "./BeerDetail";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/beer/:id" component={BeerDetail}/>
        </Switch>
    </BrowserRouter>
)
export default Router;