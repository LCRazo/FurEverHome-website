import React, {useState} from 'react';
import Left from '../assets/eventLeft.svg'
import title from '../assets/eventScheduler.svg'
import Right from '../assets/eventRight.svg'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import Submit from '../assets/submitbutton.svg'

function EventScheduler(){

    const [formData, setFormData] = useState({
        location: '',
        date: null,
        time: '',
        eventPhoto: '',
      });


      const handleChange = (e) => {
        const {name, value, files} = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };
    
    const handleDateChange = (selectedDate) => {
        setFormData({ ...formData, date: selectedDate });
      };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, eventPhoto: file });
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        // setAdopterStatus(true); // if you're still using this
    setShowSuccessPopup(true); // show popup
  
      setTimeout(() => {
      navigate('/');
      }, 1500); // wait 1.5s before navigating

    };

    const [previewImage, setPreviewImage] = useState(null);
    const isFormValid = Object.values(formData).every(value => value !== '' && value !== null);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const navigate = useNavigate();

    return(
        <section className='bg-fff29c min-h-screen py-12 px-4 text-center text-D text-xl font-saira'>
            <div className='flex flex-row justify-center w-full h-full'>
                
                {/*Left side */}
                <div className='pr-5'>
                <img src={Left} alt='pawDecor' className='object-cover w-auto h-auto '></img>
                </div>
               
                
                {/*form + title */}
                <div className='flex flex-col '>
                <img src={title} className='pl-3 h-34 md:h-40'></img>
                <p>Let’s get this event on the road by filling  out the following information!</p>
                
                <label className='text-left'>Location*</label>
                <input name='location' value={formData.location} onChange={handleChange}
                       className="block w-full mb-2 p-2 text-black bg-white rounded"
                ></input>

                <label className='pt-2 text-left'>Date*</label>
                <DatePicker selected={formData.date} onChange={handleDateChange} 
                   dateFormat='MM/dd/yyyy'
                   showTimeSelect={false}
                   className='block w-full mb-2 p-2 text-black bg-white'
                   placeholderText='Select date'>
                
                </DatePicker>

                <label className='text-left'>Time*</label>
                <input name='time' type='time' value={formData.time} onChange={handleChange}
                        className="block w-full mb-2 p-2 text-black bg-white rounded"
                        ></input>

                <label className="pt-2 text-left">Event Flyer*</label>
                <input
                    name="eventPhoto"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
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

            <div className='pt-4 flex justify-center'>
                    <button 
                        onClick={handleSubmit} 
                        className='' 
                        disabled={!isFormValid}
                    >
                        <img src={Submit} className={!isFormValid ? 'opacity-50' : ''}></img>
                    </button>
            </div>
            {showSuccessPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 mt-4">
                  <div className="bg-white p-6 rounded shadow-lg text-center">
                    <p className="text-green-600 font-semibold text-xl">🎉 Event created successfully!</p>
                  </div>
                </div>
          )}
        </section>
    )
};

export default EventScheduler;
