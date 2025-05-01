import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdopterRegistrationStep1(){
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/api/adopter/register/step2');
    };

    return(
        <section className='bg-deaf51 py-12 px-4 text-center'>
            <button onClick={handleNext}>
                Next
            </button>
        </section>
    )
};

export default AdopterRegistrationStep1;
