const express = require('express');
const cors = require('cors');
const multer = require('multer');
const createConnection = require('./db');
const bcrypt = require('bcrypt');
const mysql = require('mysql2'); // Import MySQL library for query formatting

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

  app.get('/api/owner/register/step1/:profileId', async (req, res) => {
    const { profileId } = req.params;

    if (!profileId) {
      return res.status(400).json({ error: 'Profile ID is required' });
    }

    const query = `
      SELECT up.*, ub.living_situation, ub.num_of_household, ub.job_title, ub.num_of_pets
      FROM user_profile up
      LEFT JOIN user_background ub ON up.profile_id = ub.profile_id
      WHERE up.profile_id = ?
    `;

    try {
      const [results] = await connection.query(query, [profileId]);
      if (results.length === 0) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      res.status(200).json(results[0]);
    } catch (err) {
      console.error('❌ Failed to fetch profile and background:', err.message);
      res.status(500).json({ error: 'Failed to fetch profile and background' });
    }
  });

  app.post('/api/owner/register/step2', async (req, res) => {
    const {
      rehomeReason,
    } = req.body;

    
    const insertProfileQuery = `
      INSERT INTO user_profile (
        rehome_reason,
      ) VALUES (?)
    `;

    const profileValues = [
      rehomeReason
    ]
    try{
      await connection.query(insertProfileQuery, profileValues);
      res.status(201).json({ message: 'Profile submitted!', profileId });
    } catch (err) {
      console.error('❌ Failed to insert into profile', err.message);
      res.status(500).json({ error: 'Failed to submit profile' });
    }
  });

  // app.put('/api/owner/register/step1', upload.single('adopterPhoto'), async (req, res) => {
  //   const {
  //     firstName,
  //     lastName,
  //     livingSituation,
  //     householdSize,
  //     jobType,
  //     jobTitle,
  //     petCount,
  //     phoneNumber,
  //     address,
  //     streetSuffix,
  //     city,
  //     state,
  //   } = req.body;

  //   const webPhotoBase64 = req.file ? req.file.buffer.toString('base64') : null; // Convert binary data to base64 string

  //   const insertProfileQuery = `
  //     INSERT INTO user_profile (
  //       first_name, last_name, job_type, phone_num,
  //       address_street, address_suffix, city, state,
  //       web_photo
  //     ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  //   `;

  //   const profileValues = [
  //     firstName,
  //     lastName,
  //     jobType,
  //     phoneNumber,
  //     address,
  //     streetSuffix,
  //     city,
  //     state,
  //     webPhotoBase64
  //   ];

  //   try {
  //     const [profileResult] = await connection.query(insertProfileQuery, profileValues);
  //     const profileId = profileResult.insertId;

  //     const insertBackgroundQuery = `
  //       INSERT INTO user_background (
  //         profile_id, living_situation, num_of_household, job_title, num_of_pets
  //       ) VALUES (?, ?, ?, ?, ?)
  //     `;

  //     const backgroundValues = [
  //       profileId,
  //       livingSituation,
  //       parseInt(householdSize),
  //       jobTitle,
  //       parseInt(petCount)
  //     ];

  //     await connection.query(insertBackgroundQuery, backgroundValues);

  //     res.status(201).json({ message: 'Profile and background submitted!', profileId });
  //   } catch (err) {
  //     console.error('❌ Failed to insert user or background:', err.message);
  //     res.status(500).json({ error: 'Failed to submit profile' });
  //   }
  // });

  app.put('/api/owner/register/step1/:profileId', upload.single('adopterPhoto'), async (req, res) => {
    const { profileId } = req.params;
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

    const webPhotoBinary = req.file ? req.file.buffer : null; // Use binary data directly

    const updateProfileQuery = `
      UPDATE user_profile
      SET first_name = ?, last_name = ?, phone_num = ?, address_street = ?,
          address_suffix = ?, city = ?, state = ?, web_photo = ?, job_type = ?
      WHERE profile_id = ?
    `;

    const updateBackgroundQuery = `
      UPDATE user_background
      SET living_situation = ?, num_of_household = ?,
          job_title = ?, num_of_pets = ?
      WHERE profile_id = ?
    `;

    const profileIdInt = parseInt(profileId, 10); // Ensure profileId is an integer

    try {
      await connection.query(updateProfileQuery, [
        firstName,
        lastName,
        phoneNumber,
        address,
        streetSuffix,
        city,
        state,
        webPhotoBinary, // Pass binary data directly
        jobType,
        profileIdInt, // Use integer for profileId
      ]);

      const [updateResult] = await connection.query(updateBackgroundQuery, [
        livingSituation,
        parseInt(householdSize, 10), // Ensure householdSize is an integer
        jobType,
        jobTitle,
        parseInt(petCount, 10), // Ensure petCount is an integer
        profileIdInt, // Use integer for profileId
      ]);

      if (updateResult.affectedRows === 0) {
        const insertBackgroundQuery = `
          INSERT INTO user_background (profile_id, living_situation, num_of_household, job_title, num_of_pets)
          VALUES (?, ?, ?, ?, ?)
        `;
        await connection.query(insertBackgroundQuery, [
          profileIdInt,
          livingSituation,
          parseInt(householdSize, 10),
          jobTitle,
          parseInt(petCount, 10),
        ]);
      }

      res.status(200).json({ message: 'Profile updated successfully!' });
    } catch (err) {
      console.error('❌ Failed to update profile:', err.message);
      res.status(500).json({ error: 'Failed to update profile' });
    }
  });

  app.put('/api/owner/register/step2/:profileId', async (req, res) => {
    const { profileId } = req.params;
    const { rehomeReason } = req.body;

    if (!rehomeReason) {
      return res.status(400).json({ error: 'Rehome reason is required' });
    }

    const updateQuery = `
      INSERT INTO owner (rehome_reason, profile_id)
      VALUES (?, ?)
    `;

    const profileIdInt = parseInt(profileId, 10);

    try {
      const [result] = await connection.query(updateQuery, [rehomeReason, profileIdInt]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Profile not found or background not initialized' });
      }

      res.status(200).json({ message: 'Rehome reason updated successfully!' });
    } catch (err) {
      console.error('❌ Failed to update rehome reason:', err.message);
      res.status(500).json({ error: 'Failed to update rehome reason' });
    }
  });


  app.get('/api/owner/register/step2/:profileId', async (req, res) => {
    const { profileId } = req.params;

    if (!profileId) {
      return res.status(400).json({ error: 'Profile ID is required' });
    }

    const query = `
      SELECT up.*, ub.living_situation, ub.num_of_household, ub.job_title, ub.num_of_pets
      FROM user_profile up
      LEFT JOIN user_background ub ON up.profile_id = ub.profile_id
      WHERE up.profile_id = ?
    `;

    try {
      const [results] = await connection.query(query, [profileId]);
      if (results.length === 0) {
        return res.status(404).json({ error: 'Profile not found' });
      }
      res.status(200).json(results[0]);
    } catch (err) {
      console.error('❌ Failed to fetch profile and background:', err.message);
      res.status(500).json({ error: 'Failed to fetch profile and background' });
    }
  });

app.post('/api/owner/register/signup', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const insertUserQuery = 'INSERT INTO user_profile (username, password) VALUES (?, ?)';

  try {
    const [results] = await connection.query(insertUserQuery, [username, password]);
    const profileId = results.insertId;

    // ❌ Removed: await connection.query(insertBackgroundQuery, [profileId]);

    res.status(201).json({ message: 'Owner registered successfully', profileId });
  } catch (err) {
    console.error('Query:', insertUserQuery);
    console.error('Parameters:', [username, password]);
    console.error('❌ Failed to insert owner:', err.message);
    res.status(500).json({ error: 'Failed to register owner' });
  }
});


  app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const query = 'SELECT * FROM user_profile WHERE username = ?';
    try {
      const [results] = await connection.query(query, [username]);

      if (results.length === 0) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      const user = results[0];
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      res.cookie('profile_id', user.profile_id, { httpOnly: true, secure: false });
      res.status(200).json({ message: 'Login successful', profile_id: user.profile_id });
    } catch (err) {
      console.error('Error during login:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
})();
