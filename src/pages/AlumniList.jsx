import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AlumniList = () => (
  <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('C:/Users/kashy/OneDrive/Desktop/nikhil/Alumni-portal/public/Image/1758616677245.jpg')" }}>
    <Navbar />
    <div className="flex-grow flex items-center justify-center">
      <h2 className="text-4xl font-semibold text-white drop-shadow-lg">Alumni List</h2>
      {/* Alumni list content goes here */}
    </div>
    <Footer />
  </div>
);

export default AlumniList;
