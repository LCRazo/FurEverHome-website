import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/NavBar';
import Header from './components/Header/Header.js';
import Adopt from './components/Adopt/Adopt.js';
import Pets from './components/Pets/pets.js';
import SignUp from './components/Signup/signup.js';
import Events from './components/Events/Events.js';
import Footer from './components/Footer/Footer';

import PetRegistrationStep1 from './components/Register/PetRegistrationStep1';
import PetRegistrationStep2 from './components/Register/PetRegistrationStep2';
import PetGallery from './components/Gallery/Gallery';
import OwnerRegistrationStep1 from './components/Register/OwnerRegistrationStep1';
import OwnerRegistrationStep2 from './components/Register/OwnerRegistrationStep2';
import AdopterRegistrationStep1 from './components/Register/AdopterRegistrationStep1';
import AdopterRegistrationStep2 from './components/Register/AdopterRegistrationStep2';
import AdopterRegistrationStep3 from './components/Register/AdopterRegistrationStep3';
import EventScheduler from './components/Events/EventScheduler';

function HomePage() {
  return(
  <div className="header">
    <Navbar/>
    <Header/>
    <main>
      <section className="estimate-section d-flex justify-content-center align-items-center">
        <div className="text-center">
        </div>
      </section>
      <Adopt/>
      <Pets/>
      <SignUp/>
      <Events/>
    </main>
    <Footer />
  </div>
  );
};

function App() {
  return(
  <div className="header">
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/api/pets/register/step1' element={<PetRegistrationStep1/>}></Route>
          <Route path='/api/pets/register/step2' element={<PetRegistrationStep2/>}></Route>
          <Route path='/api/pets/adopt' element={<PetGallery/>}></Route>
          <Route path='/api/owner/register/step1' element={<OwnerRegistrationStep1/>}></Route>
          <Route path='/api/owner/register/step2' element={<OwnerRegistrationStep2/>}></Route>
          <Route path='/api/adopter/register/step1' element={<AdopterRegistrationStep1/>}></Route>
          <Route path='/api/adopter/register/step2' element={<AdopterRegistrationStep2/>}></Route>
          <Route path='/api/adopter/register/step3' element={<AdopterRegistrationStep3/>}></Route>
          <Route path='/api/event/schedule' element={<EventScheduler/>}></Route>
        </Routes>
  </div>
  );
};

export default App;










