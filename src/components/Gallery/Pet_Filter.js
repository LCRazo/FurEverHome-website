// components/PetFilter.js
import React from 'react';

function PetFilter({ filters, onChange }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {/* Type */}
      <select
        value={filters.type}
        onChange={(e) => onChange({ ...filters, type: e.target.value })}
        className="p-2 rounded"
      >
        <option value="">All Types</option>
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
        onClick={() => onChange({type:'', gender:'', ageRange:''})}
        className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
      >
        Reset Filters
      </button>

    </div>
  );
}

export default PetFilter;
