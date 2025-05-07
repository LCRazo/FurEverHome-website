import React, { useState } from 'react';
import PetCard from './Pet_Card';
import PetProfileModal from './Pet_Profile_Modal';
import pets from './Pet_Data';
import PetFilter from './Pet_Filter';

function Gallery() {

    const [filters, setFilters] = useState({
      type: '',
      gender:'',
      ageRange:'',
    });

    const [selectedPet, setSelectedPet] = useState(null);
  
    const filteredPets = pets.filter((pet) => {
      const matchesType = filters.type 
        ? filters.type === 'other'
          ? pet.type !== 'dog' && pet.type !== 'cat'
          : pet.type === filters.type
        : true;

      const matchesGender = filters.gender ? pet.gender === filters.gender : true;
  
      const age = pet.ageInMonths;
      const matchesAge =
        filters.ageRange === 'young'
          ? age <= 12
          : filters.ageRange === 'adult'
          ? age > 12 && age <= 96
          : filters.ageRange === 'senior'
          ? age > 96
          : true;
  
      return matchesType && matchesGender && matchesAge;
    });
  
    
    return (
      <section className="bg-[#fff29c] py-12 px-4 font-saira text-center min-h-screen">
        <h1 className="text-4xl font-bold mb-10">Pet Gallery</h1>
        
        {/* Filter */}
        <PetFilter filters={filters} onChange={setFilters} />

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