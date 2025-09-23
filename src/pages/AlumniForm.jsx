import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AlumniForm = () => (
  <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('C:/Users/kashy/OneDrive/Desktop/nikhil/Alumni-portal/public/Image/1758616677245.jpg')" }}>
    <Navbar />
    <div className="flex-grow flex items-center justify-center">
      <div className="bg-white bg-opacity-80 p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Add Alumni</h2>
        {/* Alumni form fields go here */}
      </div>
    </div>
    <Footer />
  </div>
);

export default AlumniForm;
