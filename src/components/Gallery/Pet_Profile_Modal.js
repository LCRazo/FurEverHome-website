import React from 'react';

function PetProfileModal({ pet, onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-purple-500 rounded-2xl p-6 w-[90%] max-w-2xl flex flex-col md:flex-row-reverse gap-6 text-left relative text-white overflow-y-auto max-h-[90vh]">
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-6 text-3xl">×</button>
  
          {/* Pet Image */}
          <div className="w-full w-[50%] h-[50%] aspect-square overflow-hidden rounded-xl self-center ">
            <img
              src={pet.img}
              alt={pet.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Pet Info */}
          <div className="flex flex-col justify-between w-1/2">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                {pet.name}{' '}
                <span className="text-yellow-300 text-2xl">
                  {pet.gender === 'male' ? '♂' : '♀'}
                </span>
              </h2>
              <p className="text-lg mb-2 capitalize">{pet.breed}</p>
  
              <button className="bg-teal-400 hover:bg-teal-600 text-white px-4 py-2 rounded-md mb-4">
                Adopt Me
              </button>
  
              <h3 className="font-bold mb-1">A little about me</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>{pet.age}</li>
                <li>{pet.gender}</li>
                <li>{pet.vaccination}</li>
                <li>{pet.sterilized}</li>
              </ul>
            </div>
  
            <p className="text-sm mt-4">{pet.description}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default PetProfileModal;
  