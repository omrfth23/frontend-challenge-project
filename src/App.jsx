import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      <Hero />
      
      <hr className="max-w-6xl mx-auto border-t-2 border-gray-300 dark:border-gray-700" />
      
      <Skills />
      
      <hr className="max-w-6xl mx-auto border-gray-300 dark:border-gray-700" />
      
      <Profile />
      
      <hr className="max-w-6xl mx-auto border-gray-300 dark:border-gray-700" />
      
      <Projects />
      
      <hr className="max-w-6xl mx-auto border-gray-300 dark:border-gray-700" />
      
      <Footer />
      
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </div>
  );
}

export default App;