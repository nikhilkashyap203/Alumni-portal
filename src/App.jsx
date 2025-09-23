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
  );
};

export default App;
