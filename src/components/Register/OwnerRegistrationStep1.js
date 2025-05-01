import React from 'react';
import {useNavigate} from 'react-router-dom';

function PetRegistrationStep1() {

  const navigate = useNavigate();

  const handleNext = () => {
      navigate('/api/owner/register/step2');
  };

  return(
    <section id="pets" className="bg-c4b2 py-12 px-4 text-center text-white font-saira text-2xl">
        <button onClick={handleNext} >
          Next
        </button>
    </section>
  );
};

export default PetRegistrationStep1;