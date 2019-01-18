import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const AuthRouter = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !auth ? <Component {...props} /> : <Redirect to={`/`} push />
    }
  />
);

const mapStateToProps = state => {
  return {
    auth: state.user.isAuthenticated
  };
};

export default connect(mapStateToProps)(AuthRouter);
