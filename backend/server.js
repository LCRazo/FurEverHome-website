const express = require('express');
const cors = require('cors');
const multer = require('multer');
const createConnection = require('./db');

const app = express();
const PORT = 3001;

const upload = multer();

app.use(cors());
app.use(express.json());

(async () => {
  const connection = await createConnection();

  app.get('/api/owner/profile/:username', async (req, res) => {
    const { username } = req.params;

    const query = 'SELECT * FROM user_profile WHERE username = ?';
    try {
      const [results] = await connection.query(query, [username]);
      if (results.length === 0) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      res.status(200).json(results[0]);
    } catch (err) {
      console.error('❌ Failed to fetch profile:', err.message);
      res.status(500).json({ error: 'Failed to fetch profile' });
    }
  });

  app.post('/api/owner/register/step1', upload.single('adopterPhoto'), async (req, res) => {
    const {
      firstName,
      lastName,
      livingSituation,
      householdSize,
      jobType,
      jobTitle,
      petCount,
      phoneNumber,
      address,
      streetSuffix,
      city,
      state,
    } = req.body;

    const webPhoto = req.file ? req.file.buffer : null;

    const insertProfileQuery = `
      INSERT INTO user_profile (
        first_name, last_name, job_type, phone_num,
        address_street, address_suffix, city, state,
        web_photo
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const profileValues = [
      firstName,
      lastName,
      jobType,
      phoneNumber,
      address,
      streetSuffix,
      city,
      state,
      webPhoto
    ];

    try {
      const [profileResult] = await connection.query(insertProfileQuery, profileValues);
      const profileId = profileResult.insertId;

      const insertBackgroundQuery = `
        INSERT INTO user_background (
          profile_id, living_situation, num_of_household, job_title, num_of_pets
        ) VALUES (?, ?, ?, ?, ?)
      `;

      const backgroundValues = [
        profileId,
        livingSituation,
        parseInt(householdSize),
        jobTitle,
        parseInt(petCount)
      ];

      await connection.query(insertBackgroundQuery, backgroundValues);

      res.status(201).json({ message: 'Profile and background submitted!', profileId });
    } catch (err) {
      console.error('❌ Failed to insert user or background:', err.message);
      res.status(500).json({ error: 'Failed to submit profile' });
    }
  });


  app.post('/api/owner/register/signup', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const query = 'INSERT INTO user_profile (username, password) VALUES (?, ?)';
    try {
      const [results] = await connection.query(query, [username, password]);
      //const savedID = results.insertId;
      //const[idresult] = await db.execute('SELECT * FROM user_profile WHERE profile_id = ?')
      res.status(201).json({ message: 'Owner registered successfully', profileId: results.insertId });
    
    } catch (err) {
      console.error('Query:', query);
      console.error('Parameters:', [username, password]);
      console.error('❌ Failed to insert owner:', err.message);
      res.status(500).json({ error: 'Failed to register owner' });
    }
  });

  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
})();
