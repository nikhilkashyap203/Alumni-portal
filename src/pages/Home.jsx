import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
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
            <main className="flex-grow z-10 relative pt-16 sm:pt-20 pb-24 sm:pb-32">
                <div className="w-full flex justify-center items-center px-4 sm:px-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center bg-black bg-opacity-30 px-4 sm:px-8 py-2 rounded">
                        ALUMNI-PORTAL
                    </h1>
                </div>
                
                <div className="flex flex-col items-center justify-center p-4 sm:p-6 mt-4 sm:mt-8">
                    <div className="bg-white bg-opacity-90 p-4 sm:p-6 md:p-8 rounded-lg shadow-xl w-full mx-4 sm:mx-6 md:mx-8 max-w-2xl">
                        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center">
                            Welcome to Our Alumni Community
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 text-center">
                            Connect with fellow alumni, share your journey, and stay updated with the latest news and events.
                        </p>
                    </div>
                </div>
            </main>
            
            {/* Footer with relative position */}
            <div className="relative bottom-0 left-0 right-0 z-20">
                <Footer />
            </div>
        </div>
    );
};
export default Home;