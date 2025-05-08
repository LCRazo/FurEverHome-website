import React, { useState } from 'react';
import OwnerProfileModal from './Owner_Profile_Modal';

function PetProfileModal({ pet, onClose }) {
  const [showOwnerModal, setShowOwnerModal] = useState(false);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
        <div className="relative bg-purple-500 rounded-2xl p-6 w-full max-w-2xl flex flex-col md:flex-row-reverse gap-6 text-left text-white overflow-y-auto max-h-[90vh]">
          
          {/* Close Button */}
          <button 
          onClick={onClose} 
          className="absolute top-0 right-2 text-3xl hover:text-red-400">&times;</button>
  
          {/* Pet Image */}
          <div className="w-full md:w-1/2 h-1/2 aspect-square rounded-xl self-center">
            <img
              src={pet.img}
              alt={pet.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>


          {/* Pet Info */}
          <div className="w-full md:w-1/2 max-sm:mt-20 flex flex-col justify-between text-left">
            <div>
              <h2 className="text-3xl font-bold mb-auto">
                {pet.name}{' '}
                <span className="text-yellow-300 text-2xl">
                  {pet.gender === 'male' ? '♂' : '♀'}
                </span>
              </h2>
              <p className="text-lg mb-2 capitalize">{pet.species}, {pet.breed}</p>

              <div className='flex flex-row gap-x-6'>

              <button className="bg-teal-400 hover:bg-teal-600 text-white px-4 py-2 mb-4">
                Adopt Me
              </button>

              {/* View Owner Button */}
              
              {pet.owner && (
                <button
                  onClick={() => setShowOwnerModal(true)}
                  className='flex flex-col items-center hover:opacity-80'>
                  <img
                  src={pet.owner.img}
                  alt={pet.owner.name}
                  className='w-12 h-12 rounded-full object-cover border-2 border-white'
                  />
                  <span className='text-sm '>View Owner</span>
                </button>
              )}
              </div>
              </div>


              <h3 className="font-bold mb-1">A little about me</h3>
              <ul className="list-disc list-inside text-sm mb-4 space-y-1">
                <li>{pet.age}</li>
                <li>{pet.gender}</li>
                <li>{pet.vaccines}</li>
                <li>{pet.spay_neutered}</li>
              </ul>
            
  
            <p className="text-sm mt-4 leading-relaxed">{pet.description}</p>
          </div>

          {/* Owner Modal */}
          {showOwnerModal && (
            <OwnerProfileModal owner={pet.owner} onClose={() => setShowOwnerModal(false)} />
            )}
        </div>
      </div>
    );
  }
  
  export default PetProfileModal;
  