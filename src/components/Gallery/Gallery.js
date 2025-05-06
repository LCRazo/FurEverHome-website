import React, { useState } from 'react';
import PetCard from './Pet_Card';
import PetProfileModal from './Pet_Profile_Modal';
import pets from './Pet_Data';

function Gallery() {
    const [selectedPet, setSelectedPet] = useState(null);
  
    return (
      <section className="bg-[#fff29c] py-12 px-4 font-saira text-center min-h-screen">
        <h1 className="text-4xl font-bold mb-10">Pet Gallery</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} onClick={() => setSelectedPet(pet)} />
          ))}
        </div>
  
        {selectedPet && (
          <PetProfileModal pet={selectedPet} onClose={() => setSelectedPet(null)} />
        )}
      </section>
    );
  }

export default Gallery