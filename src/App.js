import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import EstimateForm from './components/Form/EstimateForm';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';

function App() {
  return(
  <div className="header">
    <Header />
    <main>
      <section className="estimate-section">
        <h2>Request a Free Estimate</h2>
        <EstimateForm />
      </section>
      <Services />
      <Gallery />
      <Reviews />
    </main>
    <Footer />
  </div>
  )
};

export default App;










