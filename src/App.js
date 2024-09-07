import React from 'react';
import './App.css';
import Navbar from './components/Navbar/NavBar';
import Header from "C:/Users/lizet/OneDrive/Personal/Work/Websites/roofing-website/src/components/Header/Header.js";
import EstimateForm from './components/Form/EstimateForm';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';

function App() {
  return(
  <div className="header">
    <Navbar/>
    <Header/>
    <main>
      <section className="estimate-section d-flex justify-content-center align-items-center">
        <div className="text-center">
        <EstimateForm />
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










