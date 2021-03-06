import React, { lazy } from "react";
import { Route, Switch } from "react-router";

const Home = lazy(() => import("src/pages/Home"));

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default MainRouter;
