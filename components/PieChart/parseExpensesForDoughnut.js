export function parseExpensesForDoughnut(data) {
  const templateObject = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(247, 70, 74, 0.8)',
          'rgba(70, 191, 189, 0.8)',
          'rgba(253, 180, 92, 0.8)',
          'rgba(148, 159, 177, 0.8)',
          'rgba(77, 83, 96, 0.8)',
          'rgba(0, 255, 255, 0.8)',
          'rgba(255, 0, 255, 0.8)',
          'rgba(255, 255, 0, 0.8)',
          'rgba(127, 0, 255, 0.8)'
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
