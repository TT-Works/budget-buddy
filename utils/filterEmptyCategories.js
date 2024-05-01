const filterCategories = (categories) =>
  categories.filter(
    (category) => category.actual !== '0.00' || category.planned !== '0.00',
  );

export default filterCategories;
