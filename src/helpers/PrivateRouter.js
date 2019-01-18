import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth ? <Component {...props} /> : <Redirect to={`/authentication`} push />
    }
  />
);

const mapStateToProps = state => {
  return {
    auth: state.user.isAuthenticated
  };
};

export default connect(mapStateToProps)(PrivateRoute);
