import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SideBar from "./components/SideBar";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <SideBar />
      <Switch>
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
