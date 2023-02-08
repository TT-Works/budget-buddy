import filterCategories from 'utils/filterEmptyCategories';

export default function parseData(data) {
  const nonEmptyData = filterCategories(data);
  return {
    labels: nonEmptyData.map((d) => d.category),
    datasets: [
      {
        label: 'Planned',
        data: nonEmptyData.map((d) => d.planned),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Actual',
        data: nonEmptyData.map((d) => d.actual),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };
}
