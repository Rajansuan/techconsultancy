import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MiddleSection from "./components/MiddleSection"; 
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <MiddleSection />
            <Footer />
        </div>
    );
};

export default App;
