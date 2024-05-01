import React, { useMemo } from 'react';
import Router from 'next/router';
import DashboardNav from 'components/DashboardNav';
import parseExpense from 'utils/parseExpense';
import LineChart from 'components/LineChart';
import Table from 'components/Table';
import PieChart from 'components/PieChart';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function Dashboard({ expanses, year, month }) {
  const [yearAndMonth, setYearAndMonth] = React.useState({
    year,
    month,
  });
  const [isYearDropdownOpen, setIsYearDropdownOpen] = React.useState(false);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = React.useState(false);
  const expenses = useMemo(
    () => expanses.map((category) => parseExpense(category)),
    [expanses],
  );

  console.log(yearAndMonth);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <DashboardNav />
      <div className="p-4 sm:ml-64">
        <button
          onClick={() => {}}
          className="fixed z-50 bottom-5 right-5 flex items-center p-5 px-6 bg-lime-500 text-base font-normal rounded-lg text-white hover:bg-lime-400 transition-all duration-200 text-start">
          <span className="whitespace-nowrap font-extrabold text-2xl">+</span>
        </button>
        <div className="flex justify-center select-none">
          <h1
            onMouseLeave={() => setIsYearDropdownOpen(false)}
            onClick={() => setIsYearDropdownOpen((oldState) => !oldState)}
            className="flex relative justify-center items-center flex-row text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl dark:text-white mr-2 text-center mb-5 max-w-fit pl-4 pr-0 py-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 hover:rounded-lg">
            {yearAndMonth.year}
            <svg
              className="h-8 w-8 lg:w-12 lg:h-12 dark:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
            </svg>
            {isYearDropdownOpen && <YearDropdown years={[2021, 2022, 2023]} />}
          </h1>
          <h1
            onMouseLeave={() => setIsMonthDropdownOpen(false)}
            onClick={() => setIsMonthDropdownOpen((oldState) => !oldState)}
            className="flex relative min-w-[9rem] xl:min-w-[13rem] justify-center items-center flex-row text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl dark:text-white text-center mb-5 max-w-fit pl-4 pr-0 py-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 hover:rounded-lg">
            {yearAndMonth.month}
            <svg
              className="h-8 w-8 lg:w-12 lg:h-12 dark:fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
            </svg>
            {isMonthDropdownOpen && <MonthDropdown />}
          </h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-12 mx-4 md:mx-6 xl:mx-7 items-center mb-10">
          <div className="w-full">
            <h1 className="max-w-2xl text-lg font-extrabold tracking-tight leading-none md:text-lg xl:text-xl dark:text-white mx-auto text-center mb-5">
              Last expenses:
            </h1>
            <div>
              <Table data={expenses} />
            </div>
          </div>
          <div className="w-full">
            <h1 className="max-w-2xl text-lg font-extrabold tracking-tight leading-none md:text-lg xl:text-xl dark:text-white mx-auto text-center mb-5">
              Last deposits:
            </h1>
            <div>
              <Table data={expenses} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-12 mx-4 md:mx-6 xl:mx-7 items-center mb-10">
          <div className="w-full max-xl:mb-10">
            <h1 className="max-w-2xl text-lg font-extrabold tracking-tight leading-none md:text-lg xl:text-xl dark:text-white mx-auto text-center mb-5">
              Actual vs planned:
            </h1>
            <div>
              <LineChart data={expenses} />
            </div>
          </div>
          <div className="w-full">
            <h1 className="max-w-2xl text-lg font-extrabold tracking-tight leading-none md:text-lg xl:text-xl dark:text-white mx-auto text-center mb-5">
              Expenses:
            </h1>
            <div className="lg:px-20">
              <PieChart data={expenses} />
            </div>
          </div>
        </div>
        <div className=" mx-4 md:mx-6 xl:mx-7">
          <h1 className="max-w-2xl text-lg font-extrabold tracking-tight leading-none md:text-lg xl:text-xl dark:text-white mx-auto text-center mb-5">
            Top categories:
          </h1>
          <div>
            <Table data={expenses} />
          </div>
        </div>
      </div>
    </div>
  );
}

const YearDropdown = ({ years }) => {
  return (
    <div className="absolute top-10 lg:top-14 left-2 flex flex-col bottom-0 h-fit z-20 bg-gray-200 dark:bg-gray-700 rounded-b-lg">
      {years.map((year) => (
        <div
          key={year}
          className="flex flex-row justify-center items-center w-full h-12 hover:bg-gray-400 dark:hover:bg-gray-800">
          <p className="text-black dark:text-white text-lg sm:text-xl md:text-2xl xl:text-3xl text-center mx-4 lg:mx-6">
            {year}
          </p>
        </div>
      ))}
      <div className="flex flex-row justify-center items-center w-full h-2" />
    </div>
  );
};

const MonthDropdown = () => {
  return (
    <div className="absolute top-10 lg:top-14 left-2 flex flex-col bottom-0 h-fit z-20 bg-gray-200 dark:bg-gray-700 rounded-b-lg">
      {MONTHS.map((month) => (
        <div
          key={month}
          className="flex flex-row justify-center items-center w-full h-12 hover:bg-gray-400 dark:hover:bg-gray-800">
          <p className="text-black dark:text-white text-lg sm:text-xl md:text-2xl xl:text-3xl text-center mx-2">
            {month}
          </p>
        </div>
      ))}
      <div className="flex flex-row justify-center items-center w-full h-2" />
    </div>
  );
};
