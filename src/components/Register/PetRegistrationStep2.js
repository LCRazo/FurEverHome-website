import React, {useState} from 'react';
import Logo from '../assets/petRegisterLogo.svg'
import Submit from '../assets/submitbutton.svg'
import { useNavigate, useLocation } from 'react-router-dom';
// import {useLocation} from 'react-router-dom';

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
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function PetRegistrationStep2() {
  const [formData, setFormData] = useState({
    gender: '',
    size: '',
    age: '',
    vaccinated: '',
    fixed: ''
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  
  const step1Data = location.state || {};
  console.log("step1Data:", step1Data);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    return Object.values(formData).every(
      (value) => value && value.toString().trim() !== ''
    );
  };

  const handleSubmit = async () => {
    if (!isFormValid()) {
      alert('Please complete all fields before submitting!');
      return;
    }
 

    const combinedData = { ...step1Data, ...formData };
    const formToSend = new FormData();

    for (const key in combinedData) {
      if (key === 'webPhoto' && combinedData.webPhoto instanceof File) {
        formToSend.append('webPhoto', combinedData.webPhoto);
      } else {
        formToSend.append(key, combinedData[key]);
      }
    }

    try {
      const res = await fetch('/register/pet/step2', {
        method: 'POST',
        body: formToSend,
      });

      if (res.ok) {
        setShowSuccessPopup(true);
        setTimeout(() => {
          navigate('/'); // Success redirect
        }, 1500);
      } else {
        console.error('Upload failed');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const genderOptions = ['male', 'female'];
  const sizeOptions = [
    'Small (up to 20lbs )',
    'Medium (21-50lbs)',
    'Large (51-100lbs)',
    'Extra-Large (over 100lbs)',
  ];
  const ageOptions = ['Less than 1 year', '1-4 years', '4-8 years', '8+ years'];
  const VaccineOptions = ['Yes', 'No'];
  const FixedOptions = ['Yes', 'No'];

  return (
    <section className="bg-pink-300 min-h-screen py-12 px-4 text-center text-white font-saira text-xl">
      {/* Title */}
      <div className="flex flex-col items-center mb-4">
        <img src={Logo} alt="logo" />
        <p className="w-full text-3xl">Now fill out the information regarding your pet’s health</p>
      </div>

      {/* Form */}
      <div className="flex-col items-center">
        <Dropdown label="Gender*" name="gender" options={genderOptions} value={formData.gender} onChange={handleChange} />
        <Dropdown label="Size*" name="size" options={sizeOptions} value={formData.size} onChange={handleChange} />
        <Dropdown label="Age*" name="age" options={ageOptions} value={formData.age} onChange={handleChange} />
        <Dropdown label="Vaccinated?*" name="vaccinated" options={VaccineOptions} value={formData.vaccinated} onChange={handleChange} />
        <Dropdown label="Spayed/Neutered?*" name="fixed" options={FixedOptions} value={formData.fixed} onChange={handleChange} />
      </div>

      {/* Buttons */}
      <div className="pt-4">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isFormValid()}
          className={`px-4 py-2 rounded transition ${
            isFormValid()
              ? ' cursor-allowed'
              : 'cursor-not-allowed'
          }`}
        >
          <img src={Submit} alt="Submit" className={!isFormValid ? 'opacity-50 cursor-not-allowed' : 'cursor-allowed'} />
        </button>
      </div>

      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p className="text-green-600 font-semibold text-xl">
              🎉 Profile created successfully!
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default PetRegistrationStep2;

// function PetRegistrationStep2() {
 
//   const [formData, setFormData] = useState({
//       gender: '',
//       size: '',
//       age: '',
//       vaccinated: '',
//       fixed: ''
//     });

//     const navigate = useNavigate();
//     const location = useLocation();
//     const [showSuccessPopup, setShowSuccessPopup] = useState(false);

//     const handleChange = (e) => {
//       setFormData({...formData, [e.target.name]: e.target.value});
//     }

//     const handleSubmit = async () => {
//       const step1Data = JSON.parse(localStorage.getItem('petStep1'));
//       const combinedData = {...step1Data,...formData};

//       const formToSend = new FormData();

//       //attach text fields
//       for(const key in combinedData){
//         formToSend.append(key, combinedData[key]);
//       }

//       //attach the image seperate
//       if (step1Data.webPhoto && typeof step1Data.webPhoto === 'object'){
//         formToSend.append('webPhoto', step1Data.webPhoto);
//       }
      
//       try {
//         const res = await fetch('/register/pet/step2', {
//           method: 'POST',
//           body: formToSend
//         });
  
//         if (res.ok) {
//           localStorage.removeItem('petStep1');
//           navigate('/'); // or another success page
//         } else {
//           console.error('Upload failed');
//         }
//       } catch (err) {
//         console.error('Error:', err);
//       }
  
//        // setAdopterStatus(true); // if you're still using this
//       setShowSuccessPopup(true); // show popup
  
//       setTimeout(() => {
//       navigate('/');
//       }, 1500); // wait 1.5s before navigating

//     };
//     const genderOptions = ['male', 'female'];
//     const sizeOptions = ['Small (up to 20lbs )', 'Medium (21-50lbs)', 'Large (51-100lbs)', 'Extra-Large (over 100lbs)'];
//     const ageOptions = ['Less than 1 year','1-4 years','4-8 years', '8+ years'];
//     const VaccineOptions = ['Yes', 'No'];
//     const FixedOptions = ['Yes', 'No'];

//     const isFormValid = Object.values(formData).every(value => value !== '' && value !== null);

//     const step1Data = location.state || {};

//   return(
//     <section className= "bg-pink-300 min-h-screen py-12 px-4 text-center text-white font-saira text-xl ">
//           {/*Title */}
//         <div className='flex flex-col items-center mb-4'>
//             <img src={Logo} alt='logo'></img>
//             <p className='pt-4'>Now fill out the information regarding your pet’s health</p>
//         </div>
//          {/*Form */}
//          <div className='flex-col items-center'>
//          <Dropdown label="Gender*" name="gender" options={genderOptions} value={formData.gender} onChange={handleChange}/>
//           <Dropdown label="Size*" name="size" options={sizeOptions} value={formData.size} onChange={handleChange} />
//           <Dropdown label="Age*" name="age" options={ageOptions} value={formData.age} onChange={handleChange}/>
//           <Dropdown label="Vaccinated?*" name="vaccinated" options={VaccineOptions} value={formData.vaccinated} onChange={handleChange}/>
//           <Dropdown label="Spayed/Neutered?*" name="fixed" options={FixedOptions} value={formData.fixed} onChange={handleChange}/>

//         </div>
//          {/*Buttons */}
//          <div className='pt-4'>
//           <button className='' onClick={handleSubmit}>
//               <img src={Submit} alt='submit' className={!isFormValid ? 'opacity-50 cursor-not-allowed' : 'cursor-allowed'}></img>
//           </button>
//         </div>

//         {showSuccessPopup && (
//           <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//             <div className="bg-white p-6 rounded shadow-lg text-center">
//               <p className="text-green-600 font-semibold text-xl">🎉 Profile created successfully!</p>
//             </div>
//           </div>
//           )}
//     </section>
//   );
// };

// export default PetRegistrationStep2;