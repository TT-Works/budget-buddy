import { parseExpensesForDoughnut } from './parseExpensesForDoughnut';
import React, { useMemo } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const options = {
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 10,
      },
    },
  },
};

export default function PieChart({ data }) {
  const chartData = useMemo(() => parseExpensesForDoughnut(data), [data]);

  // @ts-ignore
  return <Pie className="w-full" data={chartData} options={options} />;
}
