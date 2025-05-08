import React from 'react'

function PetCard({ pet, onClick }) {
    return (
      <div
        onClick={onClick}
        className="cursor-pointer bg-white p-4 rounded-xl shadow hover:scale-105 transition-transform"
      >
        <div className="aspect-square overflow-hidden rounded-lg mb-4">
        <img src={pet.img} alt={pet.name} className="w-full h-full object-cover" />
        </div>
        <h2 className="text-xl font-bold text-teal-600">
          {pet.name}{' '}
          <span className="text-orange-500 text-lg">
            {pet.gender === 'male' ? '♂' : '♀'}
          </span>
        </h2>
        <p className="text-sm text-gray-600 capitalize">{pet.breed}, {pet.age}</p>
      </div>
    );
  }
  
  export default PetCard;
  