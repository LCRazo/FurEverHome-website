import react from 'react';
import eventLogo from '../assets/eventlogo.svg'
import event from '../assets/events.svg'
import eventSlang from '../assets/eventslang.svg'

function Events() {
    return(
        <section id="pets" className= "bg-deaf51 py-12 px-4 text-center ">
              <div className="flex justify-center mb-10">
              <img src={event} className="h-20 md:h-auto"></img>
              </div>
           

            <div className='flex flex-col md:flex-row justify-space-around items center'>
            <div className="flex flex-col items-center">
                        <div className="mb-3 overflow-hidden flex items-center justify-center">
                            <img src={eventLogo}  className="" ></img>
                        </div>
            </div>
           
           
            <div className="flex flex-col items-center">
                        <div className="ml-3 overflow-hidden flex items-center justify-center">
                            <img src={eventSlang}  className="" ></img>
                        </div>
                        <p className='mt-4 ml-3 text-white font-saira text-2xl '>Create local pet events where adopters can meet your adorable animals from the website in person. It's the perfect chance to connect, play, and find your fur-ever match!</p>
                        <span className='mt-4 bg-a87834 text-white font-saira text-2xl px-5 py-2 rounded-md hover:bg-brown-200 transition-colors'>Create Event</span>
            </div>
           
            </div>


        </section>
    );
   
}

export default Events;