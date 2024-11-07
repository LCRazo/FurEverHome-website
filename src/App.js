import React from 'react';
import './App.css';
import Navbar from './components/Navbar/NavBar';
import Header from "C:/Users/lizet/OneDrive/Personal/Work/Websites/roofing-website/src/components/Header/Header.js";
import RoofSection from './components/Header/RoofSection';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
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
      <Services />
      <Gallery />
    </main>
    <Footer />
  </div>
  );
};

export default App;










