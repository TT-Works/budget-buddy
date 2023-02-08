import React, { useMemo } from 'react';
import DashboardNav from 'components/DashboardNav';
import parseExpense from 'utils/parseExpense';
import LineChart from 'components/LineChart';
import Table from 'components/Table';
import PieChart from 'components/PieChart';

export default function Dashboard({ expanses }) {
  const expenses = useMemo(
    () => expanses.map((category) => parseExpense(category)),
    [expanses],
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <DashboardNav />
      <div className="p-4 sm:ml-64 ">
        <h1 className="max-w-2xl text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl dark:text-white mx-auto text-center mb-5">
          January 2023
        </h1>
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
            <div className="lg:px-40">
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
