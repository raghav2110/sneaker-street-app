export const productFilterList =
  (...filterModule) =>
  (state, products) => {
    return filterModule.reduce((acc, curr) => curr(state, acc), products);
};