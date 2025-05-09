import React, {useState} from 'react';
import Left from '../assets/eventLeft.svg'
import title from '../assets/eventScheduler.svg'
import Right from '../assets/eventRight.svg'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

function EventScheduler(){

    const [formData, setFormData] = useState({
        location: '',
        date: null,
        time: '',
        eventPhoto: '',
      });


    const handleChange = (e) => {
       setFormData({...formData, [e.target.name]: e.target.value});
    };
    
    const handleDateChange = (selectedDate) => {
        setFormData({ ...formData, date: selectedDate });
      };

    const [previewImage, setPreviewImage] = useState(null);
    const isFormValid = Object.values(formData).every(value => value !== '' && value !== null);

    return(
        <section className='bg-fff29c min-h-screen py-12 px-4 text-center text-D text-xl font-saira'>
            <div className='flex flex-row justify-center w-full h-full'>
                
                {/*Left side */}
                <div className='pr-5'>
                <img src={Left} alt='pawDecor' className='object-cover w-auto h-auto '></img>
                </div>
               
                
                {/*form + title */}
                <div className='flex flex-col '>
                <img src={title} className=''></img>
                <p>Let’s get this event on the road by filling  out the following information!</p>
                
                <label>Location*</label>
                <input name='location' value={formData.location} onChange={handleChange}></input>

                <label>Date*</label>
                <DatePicker selected={formData.date} onChange={handleDateChange} 
                   showTimeSelect
                   dateFormat='Pp'
                   className='block w-full mb-2 p-2 text-black bg-white'
                   placeholderText='Select date'>
                
                </DatePicker>

                <label>Time*</label>
                <input name='time' type='time' value={formData.time} onChange={handleChange}></input>

                <label className="">Web Photo*</label>
              <input
                name="webPhoto"
                type="file"
                accept="image/*"
                // onChange={handleFileChange}
                className="block w-full mb-2 p-2 text-black bg-white rounded"
              />
              {previewImage && (
                <div className="flex justify-center mb-4">
                  <img src={previewImage} alt="Preview" className="max-w-xs max-h-40 rounded" />
                </div>
              )}
                </div>
               
    
                {/*right side */}
                <div className='pl-5'>
                <img src={Right} alt='pawDecor' className='object-cover w-auto h-auto'></img>
                </div>
               
            </div>
        </section>
    )
};

export default EventScheduler;
