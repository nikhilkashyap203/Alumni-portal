import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('C:/Users/kashy/OneDrive/Desktop/nikhil/Alumni-portal/public/Image/1758616677245.jpg')" }}>
            <Navbar />
            <div className="flex-grow flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-4">ALUMNI-PORTAL</h1>
                <p className="text-lg text-white bg-black bg-opacity-40 px-6 py-2 rounded">Welcome to the Centralized Alumni & Student Data Maintenance System. This platform allows you to manage and maintain data for both alumni and students efficiently.</p>
            </div>
            <Footer />
        </div>
    );
};

export default Home;