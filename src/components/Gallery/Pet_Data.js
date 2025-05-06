import tobyImg from '../assets/Stock_Pet_Profile_Images/toby-dalmatian.jpg';
import mochiImg from '../assets/Stock_Pet_Profile_Images/mochi-cat.svg';

const pets = [
  {
    id: 1,
    name: 'Toby',
    breed: 'dalmatian',
    age: '3 months old',
    gender: 'male',
    vaccination: 'vaccinated',
    sterilized: 'neutered',
    img: tobyImg,
    description:
      "Toby is a bright, affectionate Dalmatian pup with a playful spirit and a heart full of love. Whether he's racing along the creek or curling up in your lap for a nap, he's happiest wherever his people are.",
  },
  {
    id: 1,
    name: 'Mochi',
    breed: 'American Shorthair',
    age: '2 years old',
    gender: 'female',
    vaccination:'not vaccinated',
    sterilized: 'spayed',
    img: mochiImg,
    description: " Meet Mochi, she's independent but cuddly, loves a good lounge session in a sunny window. "
  },
  // Add more pets...
];

export default pets;
