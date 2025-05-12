import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Next from '../assets/nextbutton.svg'
import title from '../assets/OwnerRegistration.svg';
import { streetSuffix } from '../../data/petBreeds';
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

  const handleNext = async () => {
    if (!isFormValid) {
      alert('Please fill out all fields!');
      return;
    }

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:3001/api/owner/register/step1', {
        method: 'POST',
        body: form,
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
        return;
      }

      const data = await response.json();
      alert('Background info submitted!');
      navigate('/api/owner/register/step2');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        livingSituation: '',
        householdSize: '',
        jobType: '',
        jobTitle: '',
        petCount: '',
        phoneNumber: '',
        address: '',
        streetSuffix: '',
        city: '',
        state: '',
        adopterPhoto: null,
    });

    const [previewImage, setPreviewImage] = useState(null);

    const isFormValid = Object.values(formData).every(value => value !== '' && value !== null);

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, adopterPhoto: file });
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setFormData({ ...formData, phoneNumber: value });
    };

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/owner/profile/${formData.username}`);
                if (response.ok) {
                    const data = await response.json();
                    setFormData({
                        ...formData,
                        firstName: data.first_name || '',
                        lastName: data.last_name || '',
                        livingSituation: data.living_situation || '',
                        householdSize: data.num_of_household || '',
                        jobType: data.job_type || '',
                        jobTitle: data.job_title || '',
                        petCount: data.num_of_pets || '',
                        phoneNumber: data.phone_num || '',
                        address: data.address_street || '',
                        streetSuffix: data.address_suffix || '',
                        city: data.city || '',
                        state: data.state || '',
                        adopterPhoto: data.web_photo || null,
                    });
                } else {
                    console.error('Failed to fetch profile');
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        if (formData.username) {
            fetchProfile();
        }
    }, [formData.username]);

    const livingOptions = ['House', 'Apartment', 'Recreational Vehicle (RV)','Condo'];
    const jobType = ['Full-time', 'Part-time', 'Self-employed', 'Unemployed'];
    const householdSize = ['1', '2','3','4','5','6+'];
    const petCount = ['0','1','2','3+'];

    return(
            <section className='bg-C4B2 min-h-screen py-12 px-4 text-center text-white font-saira text-xl '>
                {/*Title */}
                <div className='flex flex-col items-center mb-4'>
                    <img src={title} alt='title'></img>
                    <p className='pt-4'>Let’s get to know you first! Fill out the following background information.</p>
                </div>


                <div>
                    <Input label="First Name *" name="firstName" value={formData.firstName} onChange={handleChange}/>
                    <Input label="Last Name *" name="lastName" value={formData.lastName} onChange={handleChange} />
                    <Dropdown label="Living Situation *" name="livingSituation" options={livingOptions} value={formData.livingSituation} onChange={handleChange}/>
                    <Dropdown label="Household Size *" name="householdSize" options={householdSize} value={formData.householdSize} onChange={handleChange}/>
                    {/* <Dropdown label="Job Title *" name="jobTitle" options={jobTitle} value={formData.jobTitle} onChange={handleChange}/> */}
                    <Input label="Job Title *" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
                    <Dropdown label="Job Type *" name="jobType" options={jobType} value={formData.jobType} onChange={handleChange}/>
                    <Dropdown label="Number of Pets *" name="petCount" options={petCount} value={formData.petCount} onChange={handleChange}/>
                    <Input 
                        label="Phone Number *" 
                        name="phoneNumber" 
                        value={formData.phoneNumber} 
                        onChange={handlePhoneNumberChange} 
                    />
                    <Input label="Address *" name='address' value={formData.address} onChange={handleChange}/>
                    <Dropdown label="Street Suffix *" name="streetSuffix" options={streetSuffix} value={formData.streetSuffix} onChange={handleChange}/>
                    <Input label="City *" name='city' value={formData.city} onChange={handleChange}/>
                    <Input label="State *" name='state' value={formData.state} onChange={handleChange} />
                </div>

                <div>
                    <label className="block text-left text-white font-semibold">Web Photo *</label>
                    <input 
                        type="file" 
                        name="adopterPhoto" 
                        onChange={handleFileChange} 
                        className="block w-full p-2 text-black bg-white rounded" 
                        required 
                    />
                    {previewImage && (
                        <div className="flex justify-center mb-4">
                            <img src={previewImage} alt="Preview" className="max-w-xs max-h-40 rounded" />
                        </div>
                    )}
                </div>

                {/*Buttons */}
                <div className='pt-4 flex justify-center space-x-4'>
                    <button 
                        onClick={handleNext} 
                        className='' 
                        disabled={!isFormValid}
                    >
                        <img src={Next} alt='submit' className={!isFormValid ? 'opacity-50: cursor-not-allowed' : 'cursor'}></img>
                    </button>
                </div>
            </section>
    )
};

export default OwnerRegistrationStep1;
