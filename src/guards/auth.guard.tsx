import React, { ComponentType, FC } from "react";
import { useSelector } from "react-redux";
import {
  RouteProps,
  RouteComponentProps,
  Redirect,
  Route,
} from "react-router-dom";
import { RootState } from "src/reducer/rootReducer";

interface Props extends RouteProps {
  component: ComponentType<RouteComponentProps>;
}

const AuthGuard: FC<Props> = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector<RootState, boolean>(
    (state) => state.auth.authenticated
  );

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default AuthGuard;
