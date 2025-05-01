import React from 'react';
import { Link } from 'react-router-dom'; 
import eventLogo from '../assets/eventlogo.svg';
import event from '../assets/events.svg';
import eventSlang from '../assets/eventslang.svg';

function Events() {
    return(
        
        <section id="pets" className= "bg-deaf51 py-12 px-4 text-center ">
              {/*Title */}
               {/*mb = margin botton ml= margin left */}
              <div className="flex justify-center mb-10">
              <img src={event} className="h-20 md:h-auto"></img>
              </div>
           
             {/*Image on Left */}
            <div className='flex flex-col md:flex-row justify-space-around items-center'>
            <div className="flex flex-col items-center">
                        <div className="mb-3 overflow-hidden flex items-center justify-center">
                            <img src={eventLogo}  className="" ></img>
                        </div>
            </div>
           
            {/*Create Event Button and Description*/}
            <div className="flex flex-col items-center">
                        <div className="ml-3 overflow-hidden flex items-center justify-center">
                            <img src={eventSlang}  className="" ></img>
                        </div>
                        <p className='mt-4 ml-3 text-white font-saira text-2xl '>Create local pet events where adopters can meet your adorable animals from the website in person. It's the perfect chance to connect, play, and find your fur-ever match!</p>
                        <Link to='/api/event/schedule' className='mt-4 bg-a87834 text-white font-saira text-2xl px-5 py-2 rounded-md hover:bg-a06EB1 transition-colors'>Create Event</Link>
            </div>
           
            </div>


        </section>
    );
   
}

export default Events;