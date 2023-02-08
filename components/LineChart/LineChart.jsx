import parseData from './parseExpensesForChart';

import React, { useMemo, useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function LineChart({ data }) {
  const chartData = useMemo(() => parseData(data), [data]);

  useEffect(() => {
    function handleResize() {
      for (let id in Chart.instances) {
        Chart.instances[id].resize();
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <Bar className="w-full" data={chartData} options={options} />;
}
