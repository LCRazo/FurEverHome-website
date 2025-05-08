// components/PetFilter.js
import React from 'react';

function PetFilter({ filters, onChange }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {/* Species */}
      <select
        value={filters.species}
        onChange={(e) => onChange({ ...filters, species: e.target.value })}
        className="p-2 rounded"
      >
        <option value="">All Species</option>
        <option value="dog">Dogs</option>
        <option value="cat">Cats</option>
        <option value="other">Other</option>
      </select>

      {/* Gender */}
      <select
        value={filters.gender}
        onChange={(e) => onChange({ ...filters, gender: e.target.value })}
        className="p-2 rounded"
      >
        <option value="">All Genders</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      {/* Age */}
      <select
        value={filters.ageRange}
        onChange={(e) => onChange({ ...filters, ageRange: e.target.value })}
        className="p-2 rounded"
      >
        <option value="">All Ages</option>
        <option value="young">Under 1 year</option>
        <option value="adult">1-8 years</option>
        <option value="senior">Over 8 years</option>
      </select>

      <button
        onClick={() => onChange({species:'', gender:'', ageRange:''})}
        className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
      >
        Reset Filters
      </button>

    </div>
  );
}

export default PetFilter;
