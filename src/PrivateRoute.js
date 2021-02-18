import React from "react";
import { Route, Redirect, useHistory } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { location } = useHistory();
  return (
    <Route
      {...rest}
      render={(props) => (location.state && location.state.fromShoppingCart ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default PrivateRoute;
