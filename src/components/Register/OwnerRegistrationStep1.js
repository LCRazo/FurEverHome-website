import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Next from '../assets/nextbutton.svg'
import title from '../assets/OwnerRegistration.svg';
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


function OwnerRegistrationStep1(){
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/api/owner/register/step2');
    };

    const [formData, setFormData] = useState({
        name: '',
        livingSituation: '',
        householdSize: '',
        jobType: '',
        jobTitle: '',
        petCount: '',
        phoneNumber: '',
        location: '',
        adopterPhoto: null,
    });

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const livingOptions = ['House', 'Apartment', 'Recreational Vehicle (RV)','Condo'];
    const householdSize = ['1', '2','3','4','5','6+'];
    const jobType = ['Full-Time', 'Part-Time', 'Unemployed','Student'];
    const jobTitle = ['Engineer', 'Teacher', 'Manager', 'Other'];
    const petCount = ['0','1','2','3+'];
    const locations = ['Urban', 'Suburban', 'Rural'];

    return(
            <section className='bg-C4B2 min-h-screen py-12 px-4 text-center text-white font-saira text-xl '>
                {/*Title */}
                <div className='flex flex-col items-center mb-4'>
                    <img src={title} alt='title'></img>
                    <p className='pt-4'>Let’s get to know you first! Fill out the following background information.</p>
                </div>


                <div>
                    <Input label="Name *" name="name" value={formData.name} onChange={handleChange}/>
                    <Dropdown label="Living Situation *" name="livingSituation" options={livingOptions} value={formData.livingSituation} onChange={handleChange}/>
                    <Dropdown label="Household Size *" name="householdSize" options={householdSize} value={formData.householdSize} onChange={handleChange}/>
                    <Dropdown label="Job Type *" name="jobType" options={jobType} value={formData.jobType} onChange={handleChange}/>
                    <Dropdown label="Job Title *" name="jobTitle" options={jobTitle} value={formData.jobTitle} onChange={handleChange}/>
                    <Dropdown label="Number of Pets *" name="petCount" options={petCount} value={formData.petCount} onChange={handleChange}/>
                    <Input label="Phone Number *" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
                    <Dropdown label="Location *" name="location" options={locations} value={formData.locations} onChange={handleChange}/>
                </div>

                <div>
                    <label className="block text-left text-white font-semibold">Web Photo *</label>
                    <input type="file" name="adopterPhoto" onChange={handleChange} className="block w-full p-2 text-black bg-white rounded" required />
                </div>

                {/*Buttons */}
                <div className='pt-4 flex justify-center space-x-4'>
                    <button onClick={handleNext} className=''>
                        <img src={Next} alt='next'></img>
                    </button>
                </div>

            </section>
    )
};

export default OwnerRegistrationStep1;
