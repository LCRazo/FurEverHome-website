import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import title from '../assets/adopterProfile.svg';
import tobyImg from '../assets/Stock_Pet_Profile_Images/toby-dalmatian.svg';
import moxieImg from '../assets/Stock_Pet_Profile_Images/mochi-cat.svg';


import next from '../assets/nextbutton.svg';
import marthaImg from '../assets/Stock_Pet_Owner/Martha.jpeg';

function AdopterProfile(){
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: 'Olivia',
        lastName: 'Martinez',
        phoneNumber: '(956) 374-8261',
        address: '800 Main St',
        city: 'Edinburg',
        state: 'TX',
        jobStatus: 'Full-Time'
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
        
        <div className="grid grid-cols-3 gap-2">

            {/* First Column */}
            <div className="bg-c4b2 p-2 w-full max-w-lg mx-auto rounded-xl shadow-md">
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
                    : marthaImg // Fallback default
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
                <label className="block text-white text-2xl font-bold mb-4">My Pets</label>

                {/* Pet 1 */}
                <div className="bg-white p-4 rounded-lg mb-6 shadow-md flex">
                    <img src={tobyImg} alt="Toby" className="w-24 h-24 rounded-xl object-cover mr-4" />
                    <div className="text-left">
                    <p className="text-black font-bold text-xl flex items-center gap-2">
                        Toby <span className="text-blue-900 text-2xl font-bold">♂</span>
                    </p>
                    <p className="text-gray-700">Dalmatian</p>
                    {/* extra pet pictures */}
                    <div className="flex mt-2 space-x-2">
                        <img src={tobyImg} alt="spot1" className="w-8 h-8 rounded-full" />
                        <img src={tobyImg} alt="spot2" className="w-8 h-8 rounded-full" />
                    </div>
                    </div>
                </div>

                {/* Pet 2 */}
                <div className="bg-white p-4 rounded-lg shadow-md flex">
                    <img src={moxieImg} alt="Moxie" className="w-24 h-24 rounded-xl object-cover mr-4" />
                    <div className="text-left">
                    <p className="text-black font-bold text-xl flex items-center gap-2">
                        Moxie <span className="text-pink-900 text-2xl font-bold">♀</span>
                    </p>
                    <p className="text-gray-700">Mixed</p>
                    <div className="flex mt-2 space-x-2">
                        <img src={moxieImg} alt="meme1" className="w-8 h-8 rounded-full" />
                        <img src={moxieImg} alt="meme2" className="w-8 h-8 rounded-full" />
                    </div>
                    </div>
                </div>
            </div>


            {/* Third Column (2 Rows) */}
            <div className="flex flex-col gap-10 justify-start px-2">
                {/* Notifications */}
                <div className="bg-c4b2 p-8 w-full max-w-md rounded-xl shadow-xl min-h-[270px]">
                    <label className="block text-white text-2xl font-bold mb-2">My Notifications</label>
                    {/* <p className="text-white text-md">No new notifications</p> */}
                    <div className="bg-white p-4 rounded-lg mb-6 shadow-md flex">
                        <div className="text-left">
                        <p className="text-black font-semibold text-xl flex items-center gap-2">
                            <img src={marthaImg} alt="adopter" className="w-8 h-8 rounded-full" />
                            Martha Doe liked Toby
                            {/* <img src={tobyImg} alt="meme1" className="items-right w-8 h-8 rounded-full" /> */}
                            {/* Toby <span className="text-blue-900 text-2xl font-bold">♂</span> */}
                        </p>
                        </div>
                    </div>
                </div>

                {/* Meet Ups */}
                <div className="bg-c4b2 p-8 w-full max-w-md rounded-xl shadow-xl min-h-[270px]">
                    <label className="block text-white text-2xl font-bold mb-2">My Meet Ups</label>
                    {/* <p className="text-white text-md">No upcoming meet ups</p> */}
                </div>

                {/* Events */}
                <div className="bg-c4b2 p-8 w-full max-w-md rounded-xl shadow-xl min-h-[270px]">
                    <label className="block text-white text-2xl font-bold mb-2">My Events</label>
                    {/* <p className="text-white text-md">No upcoming events</p> */}
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

export default AdopterProfile;