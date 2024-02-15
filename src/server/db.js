// This file contains the database logic for the application. It uses the mysql2 package to connect to the database and perform operations such as getting all notes, getting a single note, and creating a new note.

const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

async function getBenchmarkDataALL() {
  const [rows] = await pool.query('SELECT * FROM benchmark_data');
  return rows;
}

async function getBenchmarkData(id) {
  const [rows] = await pool.query(
    `
  SELECT * 
  FROM benchmark_data
  WHERE id = ?
  `,
    [id],
  );
  return rows[0];
}

// Create a new benchmark data record in the database
/*
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_path VARCHAR(255),
    takeoff_image VARCHAR(255),
    model_name VARCHAR(255),
    device VARCHAR(50),
    max_batch_size INT,
    max_seq_len INT,
    backend VARCHAR(50),
    expected_duration VARCHAR(50),
    expected_vus INT,
    expected_iterations INT,
    git_commit_hash VARCHAR(255),
    num_gpu INT,
    gpu_name VARCHAR(255),
    gpu_memory FLOAT,
    gpu_memory_unit VARCHAR(10),
    num_passes INT,
    num_fails INT,
    run_duration_sec FLOAT,
    run_vus INT,
    run_iterations INT,
    avg_req_duration_sec FLOAT,
    max_req_duration_sec FLOAT,
    min_req_duration_sec FLOAT
*/

async function createBenchmarkData(
  data_path,
  takeoff_image,
  model_name,
  device,
  max_batch_size,
  max_seq_len,
  backend,
  expected_duration,
  expected_vus,
  expected_iterations,
  git_commit_hash,
  num_gpu,
  gpu_name,
  gpu_memory,
  gpu_memory_unit,
  num_passes,
  num_fails,
  run_duration_sec,
  run_vus,
  run_iterations,
  avg_req_duration_sec,
  max_req_duration_sec,
  min_req_duration_sec,
) {
  const [result] = await pool.query(
    `
    INSERT INTO benchmark_data (data_path, takeoff_image, model_name, device, max_batch_size, max_seq_len, backend, expected_duration, expected_vus, expected_iterations, git_commit_hash, num_gpu, gpu_name, gpu_memory, gpu_memory_unit, num_passes, num_fails, run_duration_sec, run_vus, run_iterations, avg_req_duration_sec, max_req_duration_sec, min_req_duration_sec)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    `,
    [
      data_path,
      takeoff_image,
      model_name,
      device,
      max_batch_size,
      max_seq_len,
      backend,
      expected_duration,
      expected_vus,
      expected_iterations,
      git_commit_hash,
      num_gpu,
      gpu_name,
      gpu_memory,
      gpu_memory_unit,
      num_passes,
      num_fails,
      run_duration_sec,
      run_vus,
      run_iterations,
      avg_req_duration_sec,
      max_req_duration_sec,
      min_req_duration_sec,
    ],
  );

  const id = result.insertId;
  return getBenchmarkData(id);
}

module.exports = {
  getBenchmarkDataALL,
  getBenchmarkData,
  createBenchmarkData,
};
