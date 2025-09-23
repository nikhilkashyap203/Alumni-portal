import React from 'react';
import StudentList from '../components/StudentList';
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Students = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Background image container */}
            <div 
                className="fixed inset-0 z-0"
                style={{
                    backgroundImage: 'url(https://blog.nextbee.com/wp-content/uploads/2018/10/alumni-004.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(0.8)',
                }}
            />
            
            {/* Navbar - fixed position */}
            <div className="fixed top-0 left-0 right-0 z-20">
                <Navbar />
            </div>
            
            {/* Main content */}
            <main className="flex-grow z-10 relative pt-20 pb-32">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-white mb-8 text-center bg-black bg-opacity-30 py-2 rounded">
                        Students Dashboard
                    </h1>
                    <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-xl">
                        <Dashboard />
                        <StudentList />
                    </div>
                </div>
            </main>

            {/* Footer with fixed position */}
            <div className="fixed bottom-0 left-0 right-0 z-20">
                <Footer />
            </div>
        </div>
    );
};

export default Students;