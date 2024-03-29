const express = require("express");
const cors = require("cors");
require("dotenv").config();

const {
  getBenchmarkData,
  getBenchmarkDataALL,
  createBenchmarkData,
} = require("./db.js");

const app = express();
const port = process.env.NODE_DOCKER_PORT || 80;

const corsOptions = {
  origin: "http://localhost:4000",
};
app.use(cors(corsOptions));

app.use(express.json()); // Middleware to parse JSON bodies

// Test route
app.get("/", (req, res) => {
  res.send("API is working!");
});

app.get("/num-benchmarks", async (req, res) => {
  const benchmarkDataAll = await getBenchmarkDataALL();
  console.log(benchmarkDataAll);
  res.send({ numBenchmarks: benchmarkDataAll.length });
});

app.get("/benchmarks", async (req, res) => {
  const benchmarkDataAll = await getBenchmarkDataALL();
  res.send(benchmarkDataAll);
});

app.get("/benchmarks/:id", async (req, res) => {
  const { id } = req.params;
  const benchmarkData = await getBenchmarkData(id);
  res.send(benchmarkData);
});

app.post("/benchmarks", async (req, res) => {
  const {
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
  } = req.body;
  const benchmark = await createBenchmarkData(
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
    min_req_duration_sec
  );
  res.status(201).send(benchmark);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke 💩");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
