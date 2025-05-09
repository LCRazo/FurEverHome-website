import { useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PetCard from './Pet_Card';
import PetProfileModal from './Pet_Profile_Modal';
import pets from './Pet_Data';
import PetFilter from './Pet_Filter';
import title from '../assets/Pet Gallery.svg'

function Gallery() {

    const [searchParams, setSearchParams] = useSearchParams();

    const [filters, setFilters] = useState({
      species: '',
      gender:'',
      ageRange:'',
    });

    // Apply filters from URL on first render or when URL changes
    useEffect(() => {
    const species = searchParams.get('species') || '';
    const gender = searchParams.get('gender') || '';
    const ageRange = searchParams.get('age') || '';

    setFilters({ species, gender, ageRange });
    }, [searchParams]);

      const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        setSearchParams({
          ...(newFilters.species && { species: newFilters.species}),
          ...(newFilters.gender && { gender: newFilters.gender }),
          ...(newFilters.ageRange && { age: newFilters.ageRange }),
        });
      };

    const [selectedPet, setSelectedPet] = useState(null);
  
    const filteredPets = pets.filter((pet) => {
      const matchesSpecies = filters.species
        ? filters.species === 'other'
          ? pet.species !== 'dog' && pet.species !== 'cat'
          : pet.species === filters.species
          : true;

      const matchesGender = filters.gender 
        ? pet.gender === filters.gender 
        : true;
  
      const age = pet.ageInMonths;
      const matchesAge =
        filters.ageRange === 'young'
          ? age <= 12
          : filters.ageRange === 'adult'
          ? age > 12 && age <= 96
          : filters.ageRange === 'senior'
          ? age > 96
          : true;
  
      return matchesSpecies && matchesGender && matchesAge;
    });
  
    
    return (
      <section className="bg-[#fff29c] py-12 px-4 font-saira text-center min-h-screen">
        
      <div className='flex flex-col items-center pb-5'>
        <img src={title} alt='title' className='h-auto w-auto'></img>
      </div>
        
        {/* Filter */}
        <PetFilter filters={filters} onChange={handleFilterChange} />

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} onClick={() => setSelectedPet(pet)} />
          ))}
        </div>

        {/* Modal */}
        {selectedPet && (
          <PetProfileModal pet={selectedPet} onClose={() => setSelectedPet(null)} />
        )}
      </section>
    );
  }

export default Gallery