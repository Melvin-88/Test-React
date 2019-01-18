import React from "react";
import App from "../containers/App/App";
import { Route, Switch } from "react-router-dom";
import {
  NoMatch,
  DashboardContainer,
  AuthenticationContainer
} from "../containers/";
import AuthRouter from "../helpers/AuthRouter";
import PrivateRoute from "../helpers/PrivateRouter";

export default (
  <App>
    <Switch>
      <PrivateRoute path="/" exact component={DashboardContainer} />
      <AuthRouter path="/authentication" component={AuthenticationContainer} />
      <Route component={NoMatch} />
    </Switch>
  </App>
);
