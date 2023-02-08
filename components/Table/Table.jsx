import React, { useMemo } from 'react';
import filterCategories from 'utils/filterEmptyCategories';

export default function Table({ data }) {
  const tableData = useMemo(() => {
    const nonEmptyData = filterCategories(data)
      .slice(0, 5)
      .sort((a, b) => {
        return b.actual - a.actual;
      });

    return nonEmptyData.map((d) => {
      return (
        <tr
          key={d.category}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {d.category}
          </th>
          <td className="px-6 py-4">{d.planned}</td>
          <td className="px-6 py-4">{d.actual}</td>
          <td className="px-6 py-4">{d.difference}</td>
        </tr>
      );
    });
  }, [data]);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Planned
            </th>
            <th scope="col" className="px-6 py-3">
              Actual
            </th>
            <th scope="col" className="px-6 py-3">
              Diff
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
          {tableData.length > 0 ? tableData : null}
        </tbody>
      </table>
    </div>
  );
}
