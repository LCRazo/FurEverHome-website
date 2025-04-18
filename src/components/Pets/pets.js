import React from 'react';
import ourPetsLogo from '../assets/our-pets.svg'
import dogImg from '../assets/dog.svg'
import catImg from '../assets/cats.svg'
import otherImg from '../assets/others.svg'
import './pets.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Pets() {
    return (
      <section id="pets" className= "bg-pink-300 py-12 px-4 text-center ">
            {/*SVG Title*/} 
            <div className="flex justify-center mb-10">
                 <img src={ourPetsLogo} alt="Our Pets Logo" className="h-16 md:h-20"></img>
            </div>

            {/* Pet Cards */}
            <div className="flex flex-col md:flex-row justify-center gap 10 items center">
                {/*Dogs */}
                <div className="flex flex-col items-center">
                        <div className=" mt-3 rounded-full overflow-hidden flex items-center justify-center">
                            <img src={dogImg}  className="object-cover w-full h-full" >
                            </img>
                        </div>
                        <span className='mt-4 bg-deaf51 text-white font-saira text-2xl px-5 py-2 rounded-md hover:bg-yellow-300 transition-colors'>Dogs</span>
                </div>
                {/*Cats*/}
                <div className="flex flex-col items-center">
                <div className="ml-3 mt-3 rounded-full overflow-hidden flex items-center justify-center">
                            <img src={catImg} className="object-cover w-full h-full"></img>
                        </div>
                        <span className='mt-4 bg-a07d text-white font-saira text-2xl px-5 py-2 rounded-md hover:bg-green-300 transition-colors'>Cats</span>
                </div>

                {/*Other*/}
                <div className="flex flex-col items-center">
                <div className="ml-3 mt-3 rounded-full overflow-hidden flex items-center justify-center">
                    <img src={otherImg} className="object-cover w-full h-full"></img>
                </div>
                <span className='mt-4 bg-cf4350 text-white font-saira text-2xl px-5 py-2 rounded-md hover:bg-red-700 transition-colors'>Others</span>
                </div>
            </div>
      </section>
    );
}

export default Pets;
