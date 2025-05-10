import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import title from '../assets/ownerProfile.svg';
// import next from '../assets/nextbutton.svg';
import jimImg from '../assets/Stock_Pet_Owner/Jim.jpeg';

// Example login handler
// const handleLogin = async () => {
//     const res = await fetch('/api/login', {
//       method: 'POST',
//       body: JSON.stringify({ username, password }),
//       headers: { 'Content-Type': 'application/json' }
//     });
  
//     const data = await res.json();
  
//     if (res.ok) {
//       // ✅ Save the owner ID to localStorage or context
//       localStorage.setItem('ownerId', data.ownerId); // OR data.adopterId
//       navigate('/profile'); // Go to profile page
//     }
//   };
  
// useEffect(() => {
//     if (!ownerId) return;
  
//     async function fetchProfile() {
//       const res = await fetch(`/api/owners/${ownerId}`);
//       const data = await res.json();
//       setFormData(data);
//     }
  
//     async function fetchPets() {
//       const res = await fetch(`/api/owners/${ownerId}/pets`);
//       const data = await res.json();
//       setPets(data);
//     }
  
//     fetchProfile();
//     fetchPets();
//   }, [ownerId]);

function OwnerProfile(){
//     const ownerId = localStorage.getItem('ownerId'); // or from context
//     const [pets, setPets] = useState({
//         petID: '',
//         petName: '',
//         petPhoto: null,
//         petGender: ''
// });
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Smith',
        phoneNumber: '(956) 432-0987',
        address: '109 Lightning Ave.',
        city: 'Rio Grande City',
        state: 'TX',
        jobStatus: 'Software Engineer',
        webPhoto: null
    });
    const [tempFormData,setTempFormData] = useState(formData);
    // const navigate = useNavigate();

    // const handleNext = () => {
    //     navigate('/api/adopter/register/step2');
    // };

    const handleEdit = () => {
        setTempFormData(formData);  // start editing with current values
        setIsEditing(true);
      };
      
      const handleSave = () => {
        setFormData(tempFormData);  // save the edited values
        setIsEditing(false);
      };
      
      const handleCancel = () => {
        setTempFormData(formData);  // discard changes
        setIsEditing(false);
      };
      
      const handleTempChange = (e) => {
        const { name, value } = e.target;
        setTempFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };      

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev)=> ({
            ...prev,
            [name]: value
        }));
    };

    return(
        <section className='bg-[#FFF29C] min-h-screen py-12 px-4 text-center object-fill'>
            <img src={title} alt="title" className="mx-auto w-1/2 mb-6" />
            
            <div className="grid grid-cols-3 gap-6">

                {/* First Column */}
                <div className="bg-c4b2 p-6 w-full max-w-lg mx-auto rounded-xl shadow-md">
                <div className="flex justify-end space-x-3 mb-4">
                    {isEditing ? (
                        <>
                        <button
                            onClick={handleCancel}
                            className="text-white text-sm underline"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1 rounded"
                        >
                            Save
                        </button>
                        </>
                    ) : (
                        <button
                        onClick={handleEdit}
                        className="text-white text-sm underline"
                        >
                        Edit
                        </button>
                    )}
                    </div>


                    <label className="block text-white text-2xl font-bold mb-1">Owner Information</label>

                    {/* Input Fields */}
                    <label className="block text-white font-semibold mb-1">First Name</label>
                    <input name="firstName" value={formData.firstName} onChange={handleChange} readOnly={!isEditing} className="block w-full mb-4 p-2 text-black rounded border" />

                    <label className="block text-white font-semibold mb-1">Last Name</label>
                    <input name="lastName" value={formData.lastName} onChange={handleChange} readOnly={!isEditing} className="block w-full mb-4 p-2 text-black rounded border" />

                    <label className="block text-white font-semibold mb-1">Phone Number</label>
                    <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} readOnly={!isEditing} className="block w-full mb-4 p-2 text-black rounded border" />

                    <label className="block text-white font-semibold mb-1">Address</label>
                    <input name="address" value={formData.address} onChange={handleChange} readOnly={!isEditing} className="block w-full mb-4 p-2 text-black rounded border" />

                    <label className="block text-white font-semibold mb-1">City</label>
                    <input name="city" value={formData.city} onChange={handleChange} readOnly={!isEditing} className="block w-full mb-4 p-2 text-black rounded border" />

                    <label className="block text-white font-semibold mb-1">State</label>
                    <input name="state" value={formData.state} onChange={handleChange} readOnly={!isEditing} className="block w-full mb-4 p-2 text-black rounded border" />

                    <label className="block text-white font-semibold mb-1">Job Status</label>
                    <input name="jobStatus" value={formData.jobStatus} onChange={handleChange} readOnly={!isEditing} className="block w-full mb-4 p-2 text-black rounded border" />
                
                    <label className="block text-white font-semibold mb-1">Profile Photo</label>
                    <img
                    src={
                        formData.webPhoto
                        ? typeof formData.webPhoto === 'string'
                            ? formData.webPhoto                     // If it's a URL
                            : URL.createObjectURL(formData.webPhoto) // If it's a File
                        : jimImg // Fallback default
                    }
                    alt="User Profile"
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-2"
                    />

                    {/* If editing, show upload input and new image preview */}
                    {isEditing && (
                    <>
                        <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                            setTempFormData((prev) => ({ ...prev, webPhoto: file }));
                            }
                        }}
                        className="block w-full p-2 mb-2 text-black bg-white rounded"
                        />

                        {tempFormData.webPhoto && (
                        <div>
                            <p className="text-white text-sm mb-1">New Image Preview:</p>
                            <img
                            src={URL.createObjectURL(tempFormData.webPhoto)}
                            alt="Preview"
                            className="w-32 h-32 rounded-full object-cover mx-auto"
                            />
                        </div>
                        )}
                    </>
                    )}

                </div>

                {/* Second Column */}
                <div className="bg-c4b2 p-6 w-full max-w-lg mx-auto rounded-xl shadow-md">
                    <label className="block text-white text-2xl font-bold mb-2">My Pets</label>
                    {/* default when there are no listed pets */}
                    <label className="block text-white font-semibold mb-2">No Pets Need Rehoming</label>
                    {/* <input name="name" className="block w-full mb-6 p-2 text-black rounded" required /> */}

                    {/* <div className="grid grid-cols-2 gap-4">
                        
                    </div> */}
                </div>

                {/* Third Column (2 Rows) */}
                <div className="flex flex-col gap-6">
                    {/* Row 1 */}
                    <div className="bg-c4b2 p-6 w-full max-w-lg mx-auto rounded-xl shadow-md">
                        <label className="block text-white text-2xl font-bold mb-1">My Notifications</label>
                        <label className="block text-white font-semibold mb-1">No New Notifications</label>
                        {/* <input name="events" className="block w-full p-2 text-black rounded" required /> */}
                    </div>

                    <div className="bg-c4b2 p-6 w-full max-w-lg mx-auto rounded-xl shadow-md">
                        <label className="block text-white text-2xl font-bold mb-1">My Meet Ups</label>
                        <label className="block text-white font-semibold mb-1">No Upcoming Meet Ups</label>
                        {/* <input name="events" className="block w-full p-2 text-black rounded" required /> */}
                    </div>

                    {/* Row 2 */}
                    <div className="bg-c4b2 p-6 w-full max-w-lg mx-auto rounded-xl shadow-md">
                        <label className="block text-white text-2xl font-bold mb-1">Upcoming Events</label>
                        <label className="block text-white font-semibold mb-1">No Upcoming Events</label>
                        {/* <input name="notifications" className="block w-full p-2 text-black rounded" required /> */}
                    </div>
                </div>
            </div>


            
            {/* <div className="pt-4 flex justify-center">
                <button type="button" className="block text-left text-white bottom-right"onClick={handleNext}>
                    <img src={next} alt="nextbutton" ></img>
                </button>
            </div> */}
            
        </section>
    )
};

export default OwnerProfile;
