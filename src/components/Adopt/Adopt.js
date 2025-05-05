import React from 'react';
import { Link } from 'react-router-dom';
import adoptSlang from '../assets/adoptSlang.svg';

function Adopt() {

  return (
    <section id="about" className="bg-c4b2 py-12 px-4 text-center">
      {/* Catchphrase */}
      <div className="flex justify-center mb-10">
        <img src={adoptSlang} alt="catchphrase" className="" />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10">
        {/* Adopt */}
        <div className="flex flex-col items-center max-w-md">
          <h3 className="mt-4 text-white font-saira text-2xl text-center">
            Looking for a new best friend? Browse our adorable adoptables and discover pets waiting to fill your home with love—whether you're ready for a lifelong bond or can offer temporary care.
          </h3>
          <Link to='/api/pets/adopt' className="mt-4 bg-e95991 text-white font-saira text-2xl px-5 py-2 rounded-md cursor-pointer">
            Adopt
          </Link>
        </div>

        {/* Rehome */}
        <div className="flex flex-col items-center max-w-md">
          <h3 className="mt-4 text-white font-saira text-2xl text-center">
            Find Your Pet a Loving Forever Home: When life changes, we’re here to help. Connect with trusted adopters ready to welcome your pet into their hearts and homes.
          </h3>
          <Link to= "/api/pets/register/step1" className="mt-4 bg-white text-e95991 font-saira text-2xl px-5 py-2 rounded-md hover:bg-gray-50 cursor-pointer">
            Rehome
          </Link >
        </div>
      </div>
    </section>
  );
}

export default Adopt;