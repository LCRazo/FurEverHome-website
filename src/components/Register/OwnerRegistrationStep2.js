import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import title from '../assets/OwnerRegistration.svg';
import Submit from '../assets/submitbutton.svg'


// function Input({ label, name, value, onChange }) {
//     return (
//       <div>
//         <label className="block text-left text-white font-semibold">{label}</label>
//         <input
//           type="text"
//           name={name}
//           value={value}
//           onChange={onChange}
//           className="block w-full p-2 text-black rounded"
//           required
//         />
//       </div>
//     );
//   }
  
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
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    
    const handleSubmit = () => {
        // setAdopterStatus(true); // if you're still using this
      setShowSuccessPopup(true); // show popup
  
      setTimeout(() => {
      navigate('/');
      }, 1500); // wait 1.5s before navigating

    };

    const [formData, setFormData] = useState({
        organization: '',
        rehomeReason: '',
    });

    const isFormValid = Object.values(formData).every(value => value !== '' && value !== null);

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
    const organization = ['Yes', 'No'];
  

    return(
            <section className='bg-C4B2 min-h-screen py-12 px-4 text-center text-white font-saira text-xl '>
                {/*Title */}
                <div className='flex flex-col items-center mb-4'>
                    <img src={title} alt='title'></img>
                    <p className='pt-4'>Now fill out the information on why you need to part way for your pet!</p>
                </div>


                <div>
                    <Dropdown label="Are you an organization?*" name="organization" options={organization} value={formData.organization} onChange={handleChange} required/>
                    <Dropdown label="Reason for Rehome?*" name="rehomeReason" options={rehomeReason} value={formData.rehomeReason} onChange={handleChange} required/>
                </div>


                {/*Buttons */}
                <div className='pt-4 flex justify-center space-x-4'>
                    <button 
                        onClick={handleSubmit} 
                        className='' 
                        disabled={!isFormValid}
                    >
                        <img src={Submit} alt='submit' className={!isFormValid ? 'opacity-50 cursor-not-allowed' : 'cursor-allowed'}></img>
                    </button>
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

export default OwnerRegistrationStep2;
