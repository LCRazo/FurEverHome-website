import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import title from '../assets/AdopterRegistration.svg';
import next from '../assets/NextButton.svg';
import desc from '../assets/AdopterRegistrationDesc3.svg';
import {dogBreeds,catBreeds,reptileBreeds,rodentBreeds,birdBreeds,otherBreeds } from '../../data/petBreeds';

function Dropdown({ label, name, options = [], value, onChange }) {
    return (
      <div>
        <label className="block text-left text-white font-semibold">{label}</label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full p-2 text-black rounded"
          required
        >
          <option value="">-- Select --</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
}

function AdopterRegistrationStep3(){
  const [breedOptionsBySpecies, setBreedOptionsBySpecies] = useState({});
  const [formData, setFormData] = useState({ species: '', breed: '', workingClass: '', gender: '', size: '', age: '', vaccines: '', fixed: ' '});
  // const [adopterStatus, setAdopterStatus] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'species' ? { breed: '' } : {}) // Reset breed if species changes
    }));
  };
  useEffect(() => {
    async function loadBreeds() {
      try {

  
        // Assuming these are just arrays of names: ['Siamese', 'Persian']
        const groupedDogs = { Dog: dogBreeds };
        const groupedCats = { Cat: catBreeds };
        const groupedReptiles = { Reptile: reptileBreeds};
        const groupedBirds = { Bird: birdBreeds};
        const groupedRodents = { Rodent: rodentBreeds};
        const groupedOthers = { Other: otherBreeds};
  
        const Breeds = {
          ...groupedDogs,
          ...groupedCats,
          ...groupedReptiles,
          ...groupedBirds,
          ...groupedRodents,
          ...groupedOthers
        };
  
        setBreedOptionsBySpecies(Breeds);
      } catch (err) {
        console.error('API error:', err);
      }
    }
  
    loadBreeds();
  }, []);
  

  const species = ['Dog', 'Cat', 'Reptile','Bird','Rodent','Other'];
  const breedOptions = breedOptionsBySpecies[formData.species] || [];
  const workClassOptions = ['Farm', 'Service','None'];
  const genderOptions = ['male', 'female'];
  const sizeOptions = ['Small (up to 20lbs )', 'Medium (21-50lbs)', 'Large (51-100lbs)', 'Extra-Large (over 100lbs)'];
  const AgeOptions = ['Less than 1 year','1-4 years','4-8 years', '8+ years'];
  const VaccineOptions = ['Yes', 'No'];
  const FixedOptions = ['Yes', 'No'];

  const handleNext = () => {
    // setAdopterStatus(true); // if you're still using this
    setShowSuccessPopup(true); // show popup
  
    setTimeout(() => {
      navigate('/');
    }, 1500); // wait 1.5s before navigating
  };
  

  return(
      <section className='bg-deaf51 min-h-screen py-12 px-4 text-center'>
        <img src={title} alt="title" className="w-full mb-6" />
        <img src={desc} alt="desc" className="mx-auto mb-10" />
        <div>
          <Dropdown label="Species *" name="species" options={species} value={formData.species} onChange={handleChange}/>
          {formData.species && (
            <Dropdown label="Breed *" name="breed" options={breedOptions} value={formData.breed} onChange={handleChange}/>
          )}
          <Dropdown label="Working Class *" name="workingClass" options={workClassOptions} value={formData.workingClass} onChange={handleChange} />
          <Dropdown label="Gender" name="Gender" options={genderOptions} value={formData.gender} onChange={handleChange}/>
          <Dropdown label="Size" name="Size" options={sizeOptions} value={formData.size} onChange={handleChange} />
          <Dropdown label="Age" name="Age" options={AgeOptions} value={formData.age} onChange={handleChange}/>
          <Dropdown label="Vaccines" name="Vaccines" options={VaccineOptions} value={formData.vaccines} onChange={handleChange}/>
          <Dropdown label="Spayed/Neutered?" name="Fixed" options={FixedOptions} value={formData.fixed} onChange={handleChange}/>
        </div>
        <div className="pt-6 flex justify-center">
          <button type="button" className="text-white" onClick={handleNext} >
            <img src={next} alt="Next button" />
          </button>
        </div>

        {showSuccessPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg text-center">
              <p className="text-green-600 font-semibold text-xl">🎉 Profile created successfully!</p>
            </div>
          </div>
          )}


      </section>
)};


export default AdopterRegistrationStep3;

