CREATE DATABASE benchmark;

USE benchmark;

CREATE TABLE benchmark_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uuid CHAR(36) NOT NULL DEFAULT (UUID()),
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
    min_req_duration_sec FLOAT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);