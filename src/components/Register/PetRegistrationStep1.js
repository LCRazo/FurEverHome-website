import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function PetRegistrationStep1() {

  const navigate = useNavigate();

  const handleNext = () => {
      navigate('/api/pets/register/step2');
  };

  return(
    <section id="pets" className= "bg-pink-300 py-12 px-4 text-center ">
        <button onClick={handleNext} >
          Next
        </button>
    </section>
  );
};

export default PetRegistrationStep1;