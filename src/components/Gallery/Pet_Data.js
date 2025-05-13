import tobyImg from '../assets/Stock_Pet_Profile_Images/toby-dalmatian.jpg';
import mochiImg from '../assets/Stock_Pet_Profile_Images/mochi-cat.svg';
import billyImg from '../assets/Stock_Pet_Profile_Images/billy-goat.svg';
import charImg from '../assets/Stock_Pet_Profile_Images/charlotte-pig.svg';
import remyImg from '../assets/Stock_Pet_Profile_Images/remy-rat.png';
import lindaImg from '../assets/Stock_Pet_Owner/Linda.jpg';
import marthaImg from '../assets/Stock_Pet_Owner/Martha.jpeg';
import jimImg from '../assets/Stock_Pet_Owner/Jim.jpeg';




const pets = [
  {
    id: 1,
    name: 'Toby',
    species: 'dog',
    breed: 'dalmatian',
    working_class: 'Home',
    urgency: 'low',
    spay_neutered: 'neutered',
    vaccines: 'vaccinated',
    gender: 'male',
    size: 'medium',
    age: '3 months old',
    ageInMonths: '3',
    img: tobyImg,
    description:
      "Toby is a bright, affectionate Dalmatian pup with a playful spirit and a heart full of love. Whether he's racing along the creek or curling up in your lap for a nap, he's happiest wherever his people are.",
    owner: {
      profile_id: 1,
      phone_number: '555-1234',
      location: '123 Bird Lane',
      img: lindaImg,
      job_title: 'Realtor',
      verification: '12345',
      name: 'Linda Doe',
      rehome_reason: 'Volunteer foster mom who loves helping animals find forever homes.',
      num_of_pets: 3
    }
  },

  {
    id: 2,
    name: 'Mochi',
    species: 'cat',
    breed: 'American Shorthair',
    working_class: 'Home',
    urgency: 'low',
    spay_neutered: 'spayed',
    vaccines:'not vaccinated',
    gender: 'female',
    size: 'small',
    age: '2 years old',
    ageInMonths: '24',
    img: mochiImg,
    description: " Meet Mochi, she's independent but cuddly, loves a good lounge session in a sunny window.",
    owner: {
      profile_id: 1,
      phone_number: '555-1234',
      location: '123 Bird Lane',
      img: lindaImg,
      job_title: 'Realtor',
      verification: '12345',
      name: 'Linda Doe',
      rehome_reason: 'Volunteer foster mom who loves helping animals find forever homes.',
      num_of_pets: 3
    }
  },
  {
    id: 3,
    name: 'Billy',
    species: 'goat',
    breed: 'American Shorthair',
    working_class: 'Farm',
    urgency: 'high',
    spay_neutered: 'spayed',
    vaccines:'not vaccinated',
    gender: 'female',
    size: 'small',
    age: '1 years old',
    ageInMonths: '12',
    img: billyImg,
    description: " Meet Billy, she's independent but cuddly, loves a good lounge session in a sunny window. ",
    owner: {
      profile_id: 1,
      phone_number: '555-1234',
      location: '123 Bird Lane',
      img: jimImg,
      job_title: 'Farmer',
      verification: '78901',
      name: 'Jim Doe',
      rehome_reason: 'Moving away from the farm life and I need to rehome my Billy.',
      num_of_pets: 2
    }
  },
  {
    id: 4,
    name: 'Charlotte',
    species: 'pig',
    breed: 'American Shorthair',
    working_class: 'Farm',
    urgency: 'high',
    spay_neutered: 'not spayed',
    vaccines:'vaccinated',
    gender: 'female',
    size: 'small',
    age: '2 years old',
    ageInMonths: '24',
    img: charImg,
    description: " Meet Charlotte, she's independent but cuddly, loves a good lounge session in a sunny window. ",
    owner: {
      profile_id: 2,
      phone_number: '555-1234',
      location: '123 Bird Lane',
      img: marthaImg,
      job_title: 'Teacher',
      verification: '34509',
      name: 'Martha Doe',
      rehome_reason: 'Stressed out mom who needs to find my charlie her forever home.',
      num_of_pets: 1
    }
  },
  {
    id:5,
    name: 'Remy',
    species: 'rat',
    breed: 'Brown rat',
    working_class: 'Home',
    urgency: 'medium',
    spay_neutered: 'not neutered',
    vaccines: 'vaccinated',
    gender: 'male',
    size: 'small',
    age: ' 3 years old',
    ageInMonths: '36',
    img: remyImg,
    description: "Meet Remy, Like from ratatouille!",
    owner: {
      profile_id: 1,
      phone_number: '555-1234',
      location: '123 Bird Lane',
      img: lindaImg,
      job_title: 'Realtor',
      verification: '12345',
      name: 'Linda Doe',
      rehome_reason: 'Volunteer foster mom who loves helping animals find forever homes.',
      num_of_pets: 3
    }
  }
  
  // Add more pets...
];

export default pets;
