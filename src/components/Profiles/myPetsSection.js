import React from 'react';
import { useState } from 'react';
import PetCard from '../Gallery/Pet_Card';
import PetProfileModal from '../Gallery/Pet_Profile_Modal';
 

function MyPetsSection({ pets }) {
  const [selectedPet, setSelectedPet] = useState(null);

  return (
    <div className=" p-6 rounded-xl  h-full">
      <label className="block text-white text-2xl font-bold mb-4">My Pets</label>

      {pets.length === 0 ? (
        <p className="text-white">No pets listed for rehoming</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} onClick={() => setSelectedPet(pet)} size="small" />
          ))}
        </div>
      )}

      {selectedPet && (
        <PetProfileModal
          pet={selectedPet}
          isOwnerView={true}
          onClose={() => setSelectedPet(null)}
        />
      )}
    </div>
  );
}

export default MyPetsSection;
