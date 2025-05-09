import React from 'react';
import './Header.css';
import AdoptPet from '../assets/Adopt_A_Pet.svg';
import GotLove from '../assets/Got Love_ Give Love..svg';
import Text from '../assets/homepage-desc.svg';
import pet from '../assets/homepage-dog.svg';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <section id="home" className="bg-[#FFF29C] min-h-screen flex flex-col md:flex-row">
      
      {/* Left Column with Full-Height Pet Image */}
      {/* <div className="flex-1 flex items-stretch justify-self-start">
        <img src={pet} alt="petSVG"className="w-full object-cover"/>
      </div> */}

     <div className="flex-1 flex items-stretch justify-self-start">
        <img src={pet} alt='petSVG' className="w-full object-cover" ></img>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex flex-col justify-center items-center space-y-8 py-12">
        <img src={GotLove} alt="GotLoveSVG" className="h-20 md:h-auto" />
        <img src={AdoptPet} alt="AdoptAPetSVG" />
        <img src={Text} alt="textSVG" />
        <Link to='/api/login?choice=login' className="mt-4 bg-white text-a06EB1 font-saira text-2xl px-5 py-2 rounded-md transition no-underline hover:text-a06EB1">Login</Link>
      </div>
      
    </section>
    // <section id="pets" className= "bg-[#FFF29C] min-h-screen flex flex-col md:flex-row p-4 ">
           
    //     <div className='flex flex-col md:flex-row '>

    //       <div className="flex-1 flex justify-items-start justify-items-stretch ">
    //         <img src={pet} alt="petSVG" className="w-full object-cover" />
    //       </div>
    //       {/* <div className="flex-1 flex items-stretch justify-center">
    //           <div className="mb-3 overflow-hidden flex items-center justify-center">
    //             <img src={pet} alt='petSVG' className="w-full object-cover" ></img>
    //           </div>
    //       </div> */}


    //       <div class="flex-1 flex flex-col justify-center items-center space-y-8 py-12 ml-40">
    //         <div className="flex justify-right mb-10">
    //           <img src={GotLove} alt='GotLoveSVGg'className="h-20 md:h-auto"></img>
    //         </div>

    //         <div className="flex flex-col items-center">
    //           <div className="mb-3 overflow-hidden flex items-center justify-center">
    //             <img src={AdoptPet} alt='AdoptAPetSVG' className="" ></img>
    //           </div>
    //         </div>

    //         <div className="flex flex-col items-center">
    //             <div className="ml-3 overflow-hidden flex items-center justify-center">
    //               <img src={Text} alt='textSVG' className="" ></img>
    //             </div>
    //           </div>
    //       </div>

    //     </div>
    // </section>
    
  );
}

export default Header;
