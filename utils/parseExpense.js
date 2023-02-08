/**
 *
 * @param {string[]} expense
 * @returns {{
 *  category: string,
 *  planned: *,
 *  actual: *,
 *  difference: *
 * }}
 */
export default function parseExpense(expense) {
  const [category, _, planned, actual, difference] = expense;

  const plannedParts = planned.split(/\s+/);
  const actualParts = actual.split(/\s+/);
  const differenceParts = difference.split(/\s+/);

  plannedParts.pop();
  actualParts.pop();
  differenceParts.pop();

  const plannedReady = plannedParts.join('').replace(',', '.');
  const actualReady = actualParts.join('').replace(',', '.');
  const differenceReady = differenceParts.join('').replace(',', '.');

  return {
    category,
    planned: parseFloat(plannedReady).toFixed(2),
    actual: parseFloat(actualReady).toFixed(2),
    difference: parseFloat(differenceReady).toFixed(2),
  };
}
