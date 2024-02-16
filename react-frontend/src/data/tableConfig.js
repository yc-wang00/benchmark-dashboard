
import { format } from 'date-fns';
import React from 'react';
import { AiOutlineBarChart } from 'react-icons/ai';

import { RiDashboardLine } from 'react-icons/ri';

// config theme
export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

// config sidebar
export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <RiDashboardLine />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'data-table',
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];

// test data
export const testData = [
  {
    data_path:
      '/home/titan-yc/Workspace/pantheon/fabulinus/takeoff-benchmark/server-benchmark/data/mmlu_test_data.json',
    takeoff_image: 'tytn/takeoff-pro:0.11.0-gpu',
    model_name: 'TinyLlama/TinyLlama-1.1B-step-50K-105b',
    device: 'cuda',
    max_batch_size: 16,
    max_seq_len: null,
    backend: null,
    expected_duration: '10m',
    expected_vus: 10,
    expected_iterations: 20,
    git_commit_hash: '389acf0369dc0e7ee5da7bcfc7a2e66ea20c993a',
    num_gpu: 1,
    gpu_name: 'NVIDIA GeForce RTX 3060',
    gpu_memory: 12.0,
    gpu_memory_unit: 'GB',
    num_passes: 20,
    num_fails: 0,
    run_duration_sec: 14.800946902,
    run_vus: 10,
    run_iterations: 20,
    avg_req_duration_sec: 4.892404925950001,
    max_req_duration_sec: 7.997243845,
    min_req_duration_sec: 1.271530339,
  },
  {
    data_path:
      '/home/titan-yc/Workspace/pantheon/fabulinus/takeoff-benchmark/server-benchmark/data/mmlu_test_data.json',
    takeoff_image: 'tytn/takeoff-pro:0.11.0-gpu',
    model_name: 'TinyLlama/TinyLlama-1.1B-step-50K-105b',
    device: 'cuda',
    max_batch_size: 16,
    max_seq_len: null,
    backend: null,
    expected_duration: '10m',
    expected_vus: 10,
    expected_iterations: 20,
    git_commit_hash: '389acf0369dc0e7ee5da7bcfc7a2e66ea20c993a',
    num_gpu: 1,
    gpu_name: 'NVIDIA GeForce RTX 3060',
    gpu_memory: 12.0,
    gpu_memory_unit: 'GB',
    num_passes: 20,
    num_fails: 0,
    run_duration_sec: 14.800946902,
    run_vus: 10,
    run_iterations: 20,
    avg_req_duration_sec: 4.892404925950001,
    max_req_duration_sec: 7.997243845,
    min_req_duration_sec: 1.271530339,
  },
  {
    data_path:
      '/home/titan-yc/Workspace/pantheon/fabulinus/takeoff-benchmark/server-benchmark/data/mmlu_test_data.json',
    takeoff_image: 'tytn/takeoff-pro:0.11.0-gpu',
    model_name: 'TinyLlama/TinyLlama-1.1B-step-50K-105b',
    device: 'cuda',
    max_batch_size: 16,
    max_seq_len: null,
    backend: null,
    expected_duration: '10m',
    expected_vus: 10,
    expected_iterations: 20,
    git_commit_hash: '389acf0369dc0e7ee5da7bcfc7a2e66ea20c993a',
    num_gpu: 1,
    gpu_name: 'NVIDIA GeForce RTX 3060',
    gpu_memory: 12.0,
    gpu_memory_unit: 'GB',
    num_passes: 20,
    num_fails: 0,
    run_duration_sec: 14.800946902,
    run_vus: 10,
    run_iterations: 20,
    avg_req_duration_sec: 4.892404925950001,
    max_req_duration_sec: 7.997243845,
    min_req_duration_sec: 1.271530339,
  },
  {
    data_path:
      '/home/titan-yc/Workspace/pantheon/fabulinus/takeoff-benchmark/server-benchmark/data/mmlu_test_data.json',
    takeoff_image: 'tytn/takeoff-pro:0.11.0-gpu',
    model_name: 'TinyLlama/TinyLlama-1.1B-step-50K-105b',
    device: 'cuda',
    max_batch_size: 16,
    max_seq_len: null,
    backend: null,
    expected_duration: '10m',
    expected_vus: 10,
    expected_iterations: 20,
    git_commit_hash: '389acf0369dc0e7ee5da7bcfc7a2e66ea20c993a',
    num_gpu: 1,
    gpu_name: 'NVIDIA GeForce RTX 3060',
    gpu_memory: 12.0,
    gpu_memory_unit: 'GB',
    num_passes: 20,
    num_fails: 0,
    run_duration_sec: 14.800946902,
    run_vus: 10,
    run_iterations: 20,
    avg_req_duration_sec: 4.892404925950001,
    max_req_duration_sec: 7.997243845,
    min_req_duration_sec: 1.271530339,
  },
];

function formatDate(dateString) {
  return format(new Date(dateString), 'PPpp');
}

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

// benchmark table config
export const benchmarkTableGrid = [
  {
    field: 'id',
    headerText: 'ID',
    width: '30',
    textAlign: 'Center',
  },
  {
    field: 'model_name',
    headerText: 'Model Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'takeoff_image',
    headerText: 'Takeoff Image',
    format: 'C2',
    textAlign: 'Center',
    width: '150',
  },
  {
    field: 'num_passes',
    headerText: 'Number of Successful Requests',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'num_fails',
    headerText: 'Number of Failed Requests',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'run_duration_sec',
    headerText: 'Benchmark Duration(s)',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'run_vus',
    headerText: 'Benchmark Virtual Users',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'run_iterations',
    headerText: 'Benchmark Iterations',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'created_at',
    headerText: 'Created At',
    width: '120',
    textAlign: 'Center',
    template: (data) => formatDate(data.created_at),
  },
];

