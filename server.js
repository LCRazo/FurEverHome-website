const express = require('express');
const cors = require('cors');
const multer = require('multer');
const createConnection = require('./db');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;
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
      if (results.length === 0) return res.status(404).json({ error: 'Profile not found' });
      res.status(200).json(results[0]);
    } catch (err) {
      console.error('❌ Failed to fetch profile:', err.message);
      res.status(500).json({ error: 'Failed to fetch profile' });
    }
  });

  app.get('/api/owner/register/step1/:profileId', async (req, res) => {
    const { profileId } = req.params;

    const query = `
      SELECT up.*, ub.living_situation, ub.num_of_household, ub.job_title, ub.num_of_pets
      FROM user_profile up
      LEFT JOIN user_background ub ON up.profile_id = ub.profile_id
      WHERE up.profile_id = ?
    `;

    try {
      const [results] = await connection.query(query, [profileId]);
      if (results.length === 0) return res.status(404).json({ error: 'Profile not found' });
      res.status(200).json(results[0]);
    } catch (err) {
      console.error('❌ Failed to fetch profile and background:', err.message);
      res.status(500).json({ error: 'Failed to fetch profile and background' });
    }
  });

  app.post('/api/owner/register/step2', async (req, res) => {
    const { rehomeReason } = req.body;
    const insertProfileQuery = `INSERT INTO user_profile (rehome_reason) VALUES (?)`;

    try {
      const [result] = await connection.query(insertProfileQuery, [rehomeReason]);
      const profileId = result.insertId;
      res.status(201).json({ message: 'Profile submitted!', profileId });
    } catch (err) {
      console.error('❌ Failed to insert into profile', err.message);
      res.status(500).json({ error: 'Failed to submit profile' });
    }
  });

  app.put('/api/owner/register/step1/:profileId', upload.single('adopterPhoto'), async (req, res) => {
    const { profileId } = req.params;
    const {
      firstName, lastName, livingSituation, householdSize,
      jobType, jobTitle, petCount, phoneNumber,
      address, streetSuffix, city, state
    } = req.body;

    const webPhotoBinary = req.file ? req.file.buffer : null;
    const profileIdInt = parseInt(profileId, 10);

    const updateProfileQuery = `
      UPDATE user_profile
      SET first_name = ?, last_name = ?, phone_num = ?, address_street = ?,
          address_suffix = ?, city = ?, state = ?, web_photo = ?, job_type = ?
      WHERE profile_id = ?
    `;

    const updateBackgroundQuery = `
      UPDATE user_background
      SET living_situation = ?, num_of_household = ?, job_title = ?, num_of_pets = ?
      WHERE profile_id = ?
    `;

    try {
      await connection.query(updateProfileQuery, [
        firstName, lastName, phoneNumber, address,
        streetSuffix, city, state, webPhotoBinary,
        jobType, profileIdInt
      ]);

      const [updateResult] = await connection.query(updateBackgroundQuery, [
        livingSituation, parseInt(householdSize, 10),
        jobTitle, parseInt(petCount, 10), profileIdInt
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
          parseInt(petCount, 10)
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

    const updateQuery = `
      INSERT INTO owner (rehome_reason, profile_id)
      VALUES (?, ?)
    `;

    try {
      const [result] = await connection.query(updateQuery, [rehomeReason, parseInt(profileId, 10)]);
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
      res.status(201).json({ message: 'Owner registered successfully', profileId });
    } catch (err) {
      console.error('❌ Failed to insert owner:', err.message);
      res.status(500).json({ error: 'Failed to register owner' });
    }
  });

  app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

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
      console.error('Error during login:', err.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // ✅ Serve React frontend in production only
  if (process.env.NODE_ENV === 'production') {
    const buildPath = path.join(__dirname, 'build');
    if (fs.existsSync(buildPath)) {
      app.use(express.static(buildPath));
    // DO NOT use wildcard yet
    // app.get('*', (req, res) => {
    //   res.sendFile(path.join(buildPath, 'index.html'));
    // });
    }
  }

  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
})();
