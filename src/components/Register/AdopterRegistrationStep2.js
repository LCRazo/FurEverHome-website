import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import title from '../assets/AdopterRegistration.svg';
import desc from '../assets/AdopterRegistrationDesc2.svg';
import next from '../assets/nextbutton.svg';


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


function AdopterRegistrationStep2(){
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/api/adopter/register/step3');
    };

    const [formData, setFormData] = useState({
        name: '',
        livingSituation: '',
        jobType: '',
        jobTitle: '',
        numberPets: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: '',
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
            <section className='bg-deaf51 min-h-screen py-12 px-4 text-center'>
                <img src={title} alt="title" className="w-full mb-6" />
                <img src={desc} alt="desc" className="mx-auto mb-10" />

                <div>
                    <Input label="Name *" name="name" value={formData.name} onChange={handleChange}/>
                    <Dropdown label="Living Situation *" name="livingSituation" options={livingOptions} value={formData.livingSituation} onChange={handleChange}/>
                    <Dropdown label="Household Size *" name="householdSize" options={householdSize} value={formData.householdSize} onChange={handleChange}/>
                    <Dropdown label="Job Type *" name="jobType" options={jobType} value={formData.jobType} onChange={handleChange}/>
                    <Dropdown label="Job Title *" name="jobTitle" options={jobTitle} value={formData.jobTitle} onChange={handleChange}/>
                    <Dropdown label="Number of Pets *" name="numberPets" options={petCount} value={formData.numberPets} onChange={handleChange}/>
                    <Input label="Phone Number *" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
                    <Input label="Address *" name="address" value={formData.address} onChange={handleChange} />
                    {/* <Input label="Street *" name="steet" value={formData.street} onChange={handleChange}/> */}
                    <Input label="City *" name="city" value={formData.city} onChange={handleChange} />
                    <Input label="State *" name="state" value={formData.state} onChange={handleChange} />
                    <Dropdown label="Location Type *" name="location" options={locations} value={formData.locations} onChange={handleChange}/>
                </div>

                <div>
                    <label className="block text-left text-white font-semibold">Web Photo *</label>
                    <input type="file" name="adopterPhoto" onChange={handleChange} className="block w-full p-2 text-black bg-white rounded" required />
                </div>


                <div className="pt-6 flex justify-center">
                    <button type="button" className="text-white" onClick={handleNext}>
                        <img src={next} alt="Next button" />
                    </button>
                </div>

            </section>
    )
};

export default AdopterRegistrationStep2;


