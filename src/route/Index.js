import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../views/login/Login";
import Profile from "../views/profile/Profile";
import List from "../views/studentList/List";

const WebsiteModule = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={Login} exact />

        <Route path={"/profile"} component={Profile} exact />
        <Route path={"/list"} component={List} exact />
      </Switch>
    </Router>
  );
};
export default WebsiteModule;
