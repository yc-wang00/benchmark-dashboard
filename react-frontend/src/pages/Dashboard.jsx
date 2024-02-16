/* eslint-disable no-console */
import { React, useState, useEffect } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoIosTimer } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { MdReportGmailerrorred } from 'react-icons/md';
import { RiEmotionHappyLine } from 'react-icons/ri';

import { format } from 'date-fns';
import { dropdownData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

// eslint-disable-next-line no-unused-vars
const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

function formatDate(dateString) {
  return format(new Date(dateString), 'PPpp');
}

function aggregateBenchmarkData(data) {
  console.log('data', data);
  const result = data.reduce(
    (acc, item) => {
      acc.num_passes += item.num_passes;
      acc.num_fails += item.num_fails;
      acc.totalTime += item.run_duration_sec / 60; // Convert seconds to minutes
      return acc;
    },
    { num_passes: 0, num_fails: 0, totalTime: 0 }, // Initial accumulator values
  );

  // Optional: Round the total time to a fixed number of decimal places if needed
  result.totalTime = parseFloat(result.totalTime.toFixed(2));

  return result;
}

function getMostRecentData(data) {
  if (data.length === 0) {
    return null; // or a default object if you prefer
  }

  // Sort the data by the created_at field in descending order
  const sortedData = [...data].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  // Return the first element of the sorted array
  return sortedData[0];
}

const Dashboard = () => {
  const { currentColor } = useStateContext();

  const [data, setData] = useState([]); // State to hold fetched data
  const [benchmarkData, setBenchmarkData] = useState(null); // State to hold aggregated benchmark data
  const [recentData, setRecentData] = useState(null); // State to hold most recent data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3009/benchmarks'); // Adjust endpoint as necessary
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
        setData(result); // Set fetched data into state

        setBenchmarkData(aggregateBenchmarkData(result));

        const recentDataResult = getMostRecentData(result);
        recentDataResult.created_at = formatDate(recentDataResult.created_at);
        setRecentData(recentDataResult);
      } catch (error) {
        console.error('Failed to fetch data: ', error);
      }
    };

    fetchData();
  }, []);

  const numBenchmarks = data.length;
  console.log('benchmarkData', benchmarkData);
  console.log('recentData', recentData);

  const benchmarkStatData = [
    {
      icon: <RiEmotionHappyLine />,
      amount: benchmarkData?.num_passes,
      title: 'Total number of successful requests',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
    {
      icon: <MdReportGmailerrorred />,
      amount: benchmarkData?.num_fails,
      title: 'Total number of failed requests',
      iconColor: 'rgb(224, 61, 49)',
      iconBg: 'rgb(252, 191, 187)',
      pcColor: 'green-600',
    },
    {
      icon: <IoIosTimer />,
      amount: benchmarkData?.totalTime,
      title: 'Total Time has taken (minutes)',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
  ];

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-50 rounded-xl w-full lg:w-96 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400"># of Benchmark Completed</p>
              <p className="text-6xl mt-1">{numBenchmarks}</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {benchmarkStatData.map((item) => (
            <div key={item.title} className="bg-white h-52 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-64  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-3xl font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 w-2rounded-2xl md:w-5/6  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Most Recent Benchmark Run</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">

                <span>Created At: {recentData?.created_at}</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div className="mt-2">
                <p className="text-3xl font-semibold">{recentData?.avg_req_duration_sec.toFixed(2)}s</p>
                <p className="text-gray-500 mt-1">Avg Request Duration</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">{recentData?.max_req_duration_sec.toFixed(2)}s</p>
                <p className="text-gray-500 mt-1">Max Request Duration</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">{recentData?.min_req_duration_sec.toFixed(2)}s</p>

                <p className="text-gray-500 mt-1">Min Request Duration</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">{recentData?.run_iterations}</p>

                <p className="text-gray-500 mt-1">Completed Iteration</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">{recentData?.run_duration_sec.toFixed(2)}s</p>
                <p className="text-gray-500 mt-1">Time Duration</p>
              </div>
            </div>
            <div className=" m-4 pr-10">
              <div className="mt-2">
                <p className="text-3xl font-semibold">{recentData?.num_passes}</p>
                <p className="text-gray-500 mt-1"># of Successful Request</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">{recentData?.num_fails}</p>
                <p className="text-gray-500 mt-1"># of Successful Request</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">{recentData?.takeoff_image}</p>
                <p className="text-gray-500 mt-1">Takeoff Image Version</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">{recentData?.model_name}</p>
                <p className="text-gray-500 mt-1">Model Used</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
