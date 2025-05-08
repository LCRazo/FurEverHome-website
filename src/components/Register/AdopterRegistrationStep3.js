import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { fetchCatBreed } from '../../api/jobService.js';
// import { fetchDogBreed } from '../../api/jobService.js';
import title from '../assets/AdopterRegistration.svg';
import next from '../assets/NextButton.svg';
import desc from '../assets/AdopterRegistrationDesc3.svg';



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
          <option value=""></option>
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
  const [adopterStatus, setAdopterStatus] = useState(false);
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
        
        const catBreeds = ['Mixed','Unknown','Other','American Shorthair', 'Abyssinian', 'American Curl','British Shorthair','Bengal','Burmese','Birman',
           'Balinese','Bombay','Burmilla', 'Cornish Rex', 'Chartreux','Devon Rex', 'Havana Brown', 'Japanese Bobtail', 'Khao Manee', 'Korat','Lykoi','LaPerm',
           'Maine Coon','Manx', 'Norwegian Forest Cat', 'Persian', 'Ragdoll','Russian Blue','Ragamuffin','Sphynx','Scottish Fold','Siamese','Siberian', 'Somali',
           'Turkish Van'];
           const dogBreeds = ['Mixed','Unknown','Other','Australian Shepherd','American Cocker Spaniel', 'Akita', 'Airedale Terrier',
            'Australian Cattle Dog','Alaskan Malamute','American Staffordshire Terrier','Anatolian Shepher Dog','Afghan Hound',
            'American Eskimo Dog', 'Australian Terrier','Affenpinscher','Australian Bulldog','American Bulldog','American Pitbull Terrier',
            'American Mastiff','Alaskan Husky','Alaskan Malamute','American Bulldog','Australian Cattle Dog','Australian Shepherd',
            'Australian Terrier','Austrian Pinscher','Basenji','Basset Hound', 'Beagle','Bearded Collie', 'Belgian Malinois','Bernese Mountain Dog',
             'Bloodhound','Border Collie','Borzoi','Boston Terrier', 'Boxer', 'Brussels Griffon','Bull Terrier','Bulldog', 'Cavalier King Charles Spaniel',
              'Chihuahua','Chow Chow', 'Cocker Spaniel', 'Collie', 'Dachsund','Dalmatian','Doberman','English Cocker Spaniel', 'French Bulldog','German Shepherd',
              'Golden Retriever','Great Dane','Great Pyrenees', 'Greyhound','Havanese','Italian Greyhound','Jack Russel Terrier','King Charles Spaniel',
               'Labrador Retriever', 'Pitbull', 'Pomeranian', 'Poodle', 'Pug', 'Rottwelier', 'Saint Bernard'];
        const reptileBreeds = ['Frog', 'Turtle', 'Snake','Iguana','Gecko','Chameleon','Lizard','Other'];
        const birdBreeds = ['Parrot','Parakeet','Cockatoo','Macaw','Pigeon','Budgie','Dove','Other'];
        const rodentBreeds = ['Hamster','Guinea Pig', 'Gerbil', 'Rat', 'Chinchilla', 'Sugar Glider', 'Chipmunk', 'Ferret','Other'];
        const otherBreeds = ['Fish', 'Horse','Goat','Pig','Cow','Other'];
  
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
  // const speciesOptions = Object.keys(breedOptionsBySpecies);
  // console.log("speciesOptions:", speciesOptions)
  const breedOptions = breedOptionsBySpecies[formData.species] || [];
  const workClassOptions = ['Farm', 'Service','None'];
  const genderOptions = ['male', 'female'];
  const sizeOptions = ['Small (up to 20lbs )', 'Medium (21-50lbs)', 'Large (51-100lbs)', 'Extra-Large (over 100lbs)'];
  const AgeOptions = ['Less than 1 year','1-4 years','4-8 years', '8+ years'];
  const VaccineOptions = ['Yes', 'No'];
  const FixedOptions = ['Yes', 'No'];

  const handleNext = () => {
    setAdopterStatus(true);
    navigate('/');
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
          <button type="button" className="text-white" onClick={handleNext}>
            <img src={next} alt="Next button" />
          </button>
        </div>
      </section>
)};


export default AdopterRegistrationStep3;

