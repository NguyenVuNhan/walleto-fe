import React from "react";
import { Route, Switch } from "react-router";

const Home = () => {
  return <div>Home</div>;
};

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
