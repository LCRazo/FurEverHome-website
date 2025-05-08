import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import title from '../assets/OwnerRegistration.svg';
import Submit from '../assets/submitbutton.svg'
// import desc from '../assets/AdopterRegistrationDesc2.svg';
// import next from '../assets/NextButton.svg';


function Input({ label, name, value, onChange }) {
    return (
      <div>
        <label className="block text-left text-white font-semibold">{label}</label>
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full p-2 text-black rounded"
          required
        />
      </div>
    );
  }
  
  function Dropdown({ label, name, options = [], value, onChange }) {
    return (
      <div>
        <label className="block text-left text-white font-semibold">{label}</label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full p-2 text-black rounded"
          required
        >
          <option value="">-- Select --</option>
          {options.map((opt) => (
            <option key={opt} value={opt.toLowerCase()}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }


function OwnerRegistrationStep2(){
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/api/adopter/register/step2');
    };

    const [formData, setFormData] = useState({
        organization: '',
        rehomeReason: '',
    });

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const rehomeReason = ['Financial Hardship', 'Hosuing Issues', 'Behavioral Challenges','Allergies', 'Time Constraints', 'Health Issues'
      ,'Moving','Family Changes', 'Too Many Pets', 'Owner Incapacitated'
    ];
  

    return(
            <section className='bg-C4B2 min-h-screen py-12 px-4 text-center text-white font-saira text-xl '>
                {/*Title */}
                <div className='flex flex-col items-center mb-4'>
                    <img src={title}></img>
                    <p className='pt-4'>Now fill out the information on why you need to part way for your pet!</p>
                </div>


                <div>
                    <Input label="Are you an organization?*" name="name" value={formData.name} onChange={handleChange} required/>
                    
                    <Dropdown label="Reason for Rehome?*" name="rehomeReason" options={rehomeReason} value={formData.rehomeReason} onChange={handleChange}/>
                </div>


                {/*Buttons */}
                <div className='pt-4 flex justify-center space-x-4'>
                    <button onClick={handleNext} className=''>
                        <img src={Submit}></img>
                    </button>
                </div>

            </section>
    )
};

export default OwnerRegistrationStep2;
