import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import title from '../assets/AdopterRegistration.svg';
// import next from '../assets/nextbutton.svg';
import submit from '../assets/submitbutton.svg';
import { streetSuffix } from '../../data/petBreeds';


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
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const navigate = useNavigate();

    
    const handleNext = () => {
      if (!isFormValid) {
        alert('Please fill out all fields!');
        return;
      }
    
      setShowSuccessPopup(true);
      setTimeout(() => {
        navigate('/');
      }, 1500);
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        livingSituation: '',
        householdSize: '',
        jobType: '',
        jobTitle: '',
        numberPets: '',
        phoneNumber: '',
        address: '',
        streetSuffix: '',
        city: '',
        state: '',
        location: '',
        adopterPhoto: null,
    });

    const isFormValid = Object.values(formData).every(value => value !== '' && value !== null);

    const [previewImage, setPreviewImage] = useState(null);

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

    const livingOptions = ['House', 'Apartment', 'Recreational Vehicle (RV)','Condo'];
    const householdSize = ['1', '2','3','4','5','6+'];
    const jobType = ['Full-Time', 'Part-Time', 'Unemployed','Student'];
    const petCount = ['0','1','2','3+'];
    const locations = ['Urban', 'Suburban', 'Rural'];

    return(
            <section className='bg-deaf51 min-h-screen py-12 px-4 text-center text-white font-saira text-xl '>
                <img src={title} alt="title" className="w-full mb-6" />
                <p className='pt-4 text-2xl font-bold '>Let's get to know you first! Fill out the following background information.</p>

                <div>
                    <Input label="First Name *" name="firstName" value={formData.firstName} onChange={handleChange}/>
                    <Input label="Last Name *" name="lastName" value={formData.lastName} onChange={handleChange}/>
                    <Dropdown label="Living Situation *" name="livingSituation" options={livingOptions} value={formData.livingSituation} onChange={handleChange}/>
                    <Dropdown label="Household Size *" name="householdSize" options={householdSize} value={formData.householdSize} onChange={handleChange}/>
                    <Dropdown label="Job Type *" name="jobType" options={jobType} value={formData.jobType} onChange={handleChange}/>
                    <Input label="Job Title *" name="jobTitle" value={formData.jobTitle} onChange={handleChange}/>
                    <Dropdown label="Number of Pets *" name="numberPets" options={petCount} value={formData.numberPets} onChange={handleChange}/>
                    <Input 
                        label="Phone Number *" 
                        name="phoneNumber" 
                        value={formData.phoneNumber} 
                        onChange={handlePhoneNumberChange} 
                    />
                    <Input label="Address *" name="address" value={formData.address} onChange={handleChange} />
                    <Dropdown label='Street Suffix *' name="streetSuffix" options={streetSuffix} value={formData.streetSuffix} onChange={handleChange}/>
                    <Input label="City *" name="city" value={formData.city} onChange={handleChange} />
                    <Input label="State *" name="state" value={formData.state} onChange={handleChange} />
                    <Dropdown label="Location Type *" name="location" options={locations} value={formData.location} onChange={handleChange}/>
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


                <div className="pt-6 flex justify-center">
                <div className='pt-4 flex justify-center space-x-4'>
                    <button 
                        onClick={handleNext} 
                        className='' 
                        disabled={!isFormValid}
                    >
                        <img src={submit} alt ='submit' className={!isFormValid ? 'opacity-50' : ''}></img>
                    </button>
                </div>
                </div>
              
                {showSuccessPopup && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg text-center">
                      <p className="text-green-600 font-semibold text-xl">🎉 Profile created successfully!</p>
                    </div>
                  </div>
                )}
            </section>
    )
};

export default AdopterRegistrationStep2;


