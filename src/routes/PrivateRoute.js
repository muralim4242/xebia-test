import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import Private from "../components/Private";

const auth = {
  isAuthenticated: true, // hardcode it to true
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (auth.isAuthenticated === true ? <Private Component={Component} {...props} /> : <Redirect to="/login" />)} />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

export default PrivateRoute;
