import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SideBar from "./components/SideBar";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

export const Routes = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <SideBar />
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
      </Switch>
    </div>
  );
};
