import tobyImg from '../assets/Stock_Pet_Profile_Images/toby-dalmatian.jpg';
import mochiImg from '../assets/Stock_Pet_Profile_Images/mochi-cat.svg';
import billyImg from '../assets/Stock_Pet_Profile_Images/billy-goat.svg';
import charImg from '../assets/Stock_Pet_Profile_Images/charlotte-pig.svg';
import remyImg from '../assets/Stock_Pet_Profile_Images/remy-rat.png';

const pets = [
  {
    id: 1,
    name: 'Toby',
    type: 'dog',
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
    id: 2,
    name: 'Mochi',
    type: 'cat',
    breed: 'American Shorthair',
    age: '2 years old',
    gender: 'female',
    vaccination:'not vaccinated',
    sterilized: 'spayed',
    img: mochiImg,
    description: " Meet Mochi, she's independent but cuddly, loves a good lounge session in a sunny window. "
  },
  {
    id: 3,
    name: 'Billy',
    type: 'goat',
    breed: 'American Shorthair',
    age: '1 years old',
    gender: 'female',
    vaccination:'not vaccinated',
    sterilized: 'spayed',
    img: billyImg,
    description: " Meet Billy, she's independent but cuddly, loves a good lounge session in a sunny window. "
  },
  {
    id: 4,
    name: 'Charlotte',
    type: 'pig',
    breed: 'American Shorthair',
    age: '2 years old',
    gender: 'female',
    vaccination:'vaccinated',
    sterilized: 'not spayed',
    img: charImg,
    description: " Meet Charlotte, she's independent but cuddly, loves a good lounge session in a sunny window. "
  },
  {
    id:5,
    name: 'Remy',
    type: 'rat',
    breed: 'Brown rat',
    age: ' 3 years old',
    gender: 'male',
    vaccination: 'vaccinated',
    sterilized: 'not neutered',
    img: remyImg,
    description: "Meet Remy, Like from ratatouille!"
  }
  
  // Add more pets...
];

export default pets;
