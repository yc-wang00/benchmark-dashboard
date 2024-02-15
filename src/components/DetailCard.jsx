import React from 'react';

const DetailCard = ({ rowData, onClose }) => (
  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center px-4">
    <div className="bg-white p-8 rounded-xl max-w-5xl w-full mx-auto shadow-lg space-y-5">
      <div className="flex justify-between items-center border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">Detailed Information</h2>
        <button onClick={onClose} className="rounded-full bg-red-500 text-white p-2 hover:bg-red-700 transition duration-150 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {/* System Information */}
      <div>
        <div className="grid grid-cols-1 gap-2 border p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-3">System</h3>
          <p className="text-base"><strong className="font-semibold">ID:</strong> {rowData.id}</p>
          <p className="text-base"><strong className="font-semibold">Git Commit Hash:</strong> {rowData.git_commit_hash}</p>
          <p className="text-base"><strong className="font-semibold">Data Path:</strong> {rowData.data_path}</p>
          <p className="text-base"><strong className="font-semibold">Expected Duration:</strong> {rowData.expected_duration}</p>
          <p className="text-base"><strong className="font-semibold">Expected VUS:</strong> {rowData.expected_vus}</p>
          <p className="text-base"><strong className="font-semibold">Expected Iterations:</strong> {rowData.expected_iterations}</p>

          <p className="text-base"><strong className="font-semibold">Number of GPUs:</strong> {rowData.num_gpu}</p>
          <p className="text-base"><strong className="font-semibold">GPU Name:</strong> {rowData.gpu_name}</p>
          <p className="text-base"><strong className="font-semibold">GPU Memory:</strong> {rowData.gpu_memory} {rowData.gpu_memory_unit}</p>
          <p className="text-base"><strong className="font-semibold">Created At:</strong> {rowData.created_at}</p>
        </div>
      </div>
      {/* Bottom Half: Takeoff and Results */}
      <div className="flex flex-wrap mt-4 -mx-2">
        {/* Takeoff Column */}
        <div className="w-full md:w-1/2 px-2">
          <div className="border p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Takeoff</h3>
            <p className="text-base"><strong className="font-semibold">Model Name:</strong> {rowData.model_name}</p>
            <p className="text-base"><strong className="font-semibold">Device:</strong> {rowData.device}</p>
            <p className="text-base"><strong className="font-semibold">Max Batch Size:</strong> {rowData.max_batch_size}</p>
            <p className="text-base"><strong className="font-semibold">Max Sequence Length:</strong> {rowData.max_seq_len}</p>
            <p className="text-base"><strong className="font-semibold">Backend:</strong> {rowData.backend}</p>
          </div>
        </div>
        {/* Results Column */}
        <div className="w-full md:w-1/2 px-2">
          <div className="border p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3">Results</h3>
            <p className="text-base"><strong className="font-semibold">Number of Successful Requests:</strong> {rowData.num_passes}</p>
            <p className="text-base"><strong className="font-semibold">Number of Failed Requests:</strong> {rowData.num_fails}</p>
            <p className="text-base"><strong className="font-semibold">Run Duration:</strong> {rowData.run_duration_sec} seconds</p>
            <p className="text-base"><strong className="font-semibold">Run VUS:</strong> {rowData.run_vus}</p>
            <p className="text-base"><strong className="font-semibold">Run Iterations:</strong> {rowData.run_iterations}</p>
            <p className="text-base"><strong className="font-semibold">Avg Request Duration:</strong> {rowData.avg_req_duration_sec} seconds</p>
            <p className="text-base"><strong className="font-semibold">Max Request Duration:</strong> {rowData.max_req_duration_sec} seconds</p>
            <p className="text-base"><strong className="font-semibold">Min Request Duration:</strong> {rowData.min_req_duration_sec} seconds</p>
            {/* Add more result-related fields */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DetailCard;
