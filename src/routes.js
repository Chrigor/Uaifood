import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import ListRestaurant from './Pages/ListRestaurant';


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/list-restaurant/:cidade/:id" component={ListRestaurant} />
        </Switch>
    )
}