<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/Login";
// import Dashboard from "../components/Dashboard";
 import StudentsAuth from "../pages/StudentsAuth";
import CollegeAuth from "../pages/CollegeAuth";
import About from "../components/About";
import Contact from "../components/Contact";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/students" element={<StudentsAuth />} /> 
            <Route path="/college" element={<CollegeAuth />} /> 
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
=======
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
>>>>>>> ce1eace24187b401d860ec5402e17a8649b5b7a8
};

export default AppRoutes;
