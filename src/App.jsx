<<<<<<< HEAD
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AlumniList from "./pages/AlumniList";
import AlumniForm from "./pages/AlumniForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alumni" element={<AlumniList />} />
        <Route path="/alumni/add" element={<AlumniForm />} />
      </Routes>
    </Router>
>>>>>>> ce1eace24187b401d860ec5402e17a8649b5b7a8
  );
};

export default App;
