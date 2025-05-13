const express = require('express');
//helps with routes if structures seperatly (eg. pets.js, owner.js)
const router = express.Router();
const Pet = require('../models/Pet');
const db = require('../../db'); //db instance



router.post('/register/pet/step1', async (req,res) => {
	const {     
        name, species, breed, workingClass, urgency, webphoto 
     } = req.body; // get first half of profile info

	req.session.pet = {
        name,species,breed,workingClass,urgency, webphoto
    };
	
    res.redirect('/register/pet/step1'); //moves to next profile page

});

//gets info from pet registration step 1
router.post('/register/pet/step2', async (req,res) => {
	const{
        gender, size, age, vaccines, fixed
    } = req.body;

    const fullPetData ={
        ...req.session.pet,
        gender, size, age, vaccines, fixed
    };

    try{
        await Pet.create(fullPetData, db);

        //Clear session 
        delete req.session.pet;

        res.direct('/')
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving pet')
    }
    
});

module.exports = router;