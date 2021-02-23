import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ChatListPage from './pages/chat-list-page'

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ChatListPage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
