import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import title from '../assets/adopterProfile.svg';
import next from '../assets/nextbutton.svg';

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
            
            <div className="grid grid-cols-3 gap-6">

                {/* First Column */}
                <div className="bg-c4b2 p-6 w-full max-w-lg mx-auto rounded-xl shadow-md">
                    <button onClick={() => setIsEditing(!isEditing)} className="text-white text-sm underline mb-4 float-right">
                    {isEditing ? 'Cancel' : 'Edit'}
                    </button>

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
                </div>

                {/* Second Column */}
                <div className="flex flex-col gap-6">

                    <div className="bg-c4b2 p-6 w-full max-w-lg mx-auto rounded-xl shadow-md">
                        <label className="block text-white text-2xl font-bold mb-2">My Potential Pets</label>
                        <label className="block text-white font-semibold mb-2">No Favorited Pets</label>
                        {/* <input name="events" className="block w-full p-2 text-black rounded" required /> */}
                    </div>

                    <div className="bg-c4b2 p-6 w-full max-w-lg mx-auto rounded-xl shadow-md">
                        <label className="block text-white text-2xl font-bold mb-1">Pending Pet Applications</label>
                        <label className="block text-white font-semibold mb-1">No Pending Pet Applications</label>
                        {/* <input name="events" className="block w-full p-2 text-black rounded" required /> */}
                    </div>



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
                        <label className="block text-white text-2xl font-bold mb-1">My Events</label>
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

export default AdopterProfile;