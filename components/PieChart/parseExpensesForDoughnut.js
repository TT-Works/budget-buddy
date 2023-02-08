export function parseExpensesForDoughnut(data) {
  const templateObject = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
        ],
      },
    ],
  };
  const nonEmptyExpenses = data.filter((expense) => expense.actual > 0);
  return nonEmptyExpenses.reduce((template, expense) => {
    template.labels.push(expense.category);
    template.datasets[0].data.push(expense.actual);
    template.datasets[0].backgroundColor.push('');
    return template;
  }, templateObject);
}
