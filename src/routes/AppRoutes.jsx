import React from "react"; 
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
// import College from "../pages/College";
import Students from "../pages/Students";
import Dashboard from "../components/Dashboard";
// import User from "../pages/User";
import Login from "../components/Login";

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="/college" component={College} /> */}
      <Route path="/students" component={Students} />
      <Route path="/dashboard" component={Dashboard} />
      {/* <Route path="/user" component={User} /> */}
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default AppRoutes;
