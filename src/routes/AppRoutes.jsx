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
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    );
};

export default AppRoutes;