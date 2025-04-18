import React from 'react';
import './App.css';
import Navbar from './components/Navbar/NavBar';
import Header from './components/Header/Header.js';
import RoofSection from './components/Header/RoofSection';
import Adopt from './components/Adopt/Adopt.js';
import Pets from './components/Pets/pets.js';
import Footer from './components/Footer/Footer';

function App() {
  return(
  <div className="header">
    <Navbar/>
    <RoofSection/>
    <Header/>
    <main>
      <section className="estimate-section d-flex justify-content-center align-items-center">
        <div className="text-center">
        </div>
      </section>
      <Adopt />
      <Pets />
    </main>
    <Footer />
  </div>
  );
};

export default App;










