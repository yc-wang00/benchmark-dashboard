const express = require('express');
const app = express();
const port = 3009; // Choose a port that does not conflict with your React app

app.use(express.json()); // Middleware to parse JSON bodies

// Test route
app.get('/', (req, res) => {
  res.send('API is working!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

const { Pool } = require('pg');

const pool = new Pool({
  user: 'yourUsername',
  host: 'localhost',
  database: 'yourDatabase',
  password: 'yourPassword',
  port: 5432, // Default port for PostgreSQL
});

// Example query function
const fetchData = async () => {
  const res = await pool.query('SELECT * FROM your_table LIMIT 10'); // Adjust SQL query as needed
  return res.rows;
};


app.get('/data', async (req, res) => {
    try {
      const data = await fetchData();
      res.json(data);
    } catch (err) {
      console.error('Error fetching data', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


const readDataFromFile = async (filePath) => {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error('Error reading file:', err);
      throw err; // Rethrow the error to handle it in the endpoint
    }
  };
  
const fs = require('fs').promises; // Use promises for async/await syntax

app.get('/file-data', async (req, res) => {
    console.log('Reading data from file');
    const path = require('path');
    const filePath = path.join(__dirname, 'test.json');
    // const filePath = ''; // Update with your file's path
    try {
      const data = await readDataFromFile(filePath);
      res.json(data);
    } catch (err) {
      console.error('Error reading data from file', err);
      res.status(500).json({ message: 'Failed to read data from file' });
    }
  });
  