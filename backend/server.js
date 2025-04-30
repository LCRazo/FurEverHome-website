const express = require('express');
const cors = require ('cors');
const path = require('path');
//TO-DO: Add database
//const sequelize = require('db');
const session = require('express-session');
const bcrypt = require('bcrypt');
const petRoutes = require('./routes/pets'); // adjust path



const app = express();

// use urlencoding for form POSTs to handle data
app.use(express.urlencoded({extended: false}));//uses traditional query passing. Allows acess to data submitted by users 

// use server-side in-memory session
app.use(session({secret: 'superSecret', resave: false, saveUninitialized: false}));

// serve static files
app.use(express.static(path.join(__dirname, 'static')));


//home page
app.get('/', (req,res) => {

	if(req.session.user){//suggests authentication is established 
		res.render('home', {user: req.session.user}); // render the home view and pass the User object in
	}//display user-specific content on the home page when the user is logged in.
	    else{
			res.render('home');// render the home view *without* any User object
		}
	
});


app.get('/login', (req,res) => {
	
	//Case 1
	if(req.session.user){//they have an active session with a User object in it can't login without logging out first
		res.redirect('/'); //redirect them back to the home view
		return;
	}
	else{//Case 2
		 //they don't have an active session, or there is no User object in it
		res.render('login');//render the login form
	}
	
});


app.post('/login', async (req,res) => {
	
	const {username, password } = req.body; // get username and password from the POST body
	try{
		// call User.login to attempt to login
		//model
		const user = await User.login(username, password, db);
	
		if(!user){
			res.render('login', {error: 'Invalid username or password', password});
		}

		//Compare provided password with the hashed password stored in the database
		const passwordMatch = await bcrypt.compare(password, user.password_hash);

		if(passwordMatch){// if success login 
			req.session.user = user; //store the user object in session
			res.redirect('/')//redirect to home page
		}
		else{
			res.render('login',{error: 'Invalid username or password', username});// else re-render the login form w/ errors and username
		}

	}
	catch(error){
		console.log('Error:', error);
		return res.status(500).send('Internal Server Error');
	}
	
});

app.get('/register', (req, res) => {
	// Check if the user is already logged in
	if (req.session.user) {
	  return res.redirect('/');
	}
  
	// Render the registration form
	res.render('register');
  });

//Pet registration 
app.use(petRoutes);

//Log out of account 
app.get('/logout', (req,res) => {
	// delete the user from the session
	delete req.session.user;
	// and redirect to the home view
	res.redirect('/');
});

//AWS Set Up 
sequelize.sync().then(() => {
    console.log('Database connected');
    app.listen(3001, () => console.log('Server running on port 3001'));
  });
