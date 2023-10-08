export const formatCurrencyUSD = (value) => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
}).format(value);

export const convertToUAH = (value) => value * 36.65;

export const formatCurrencyUAH = (value) => new Intl.NumberFormat("uk-UA", {
  style: "currency",
  currency: "UAH",
  maximumFractionDigits: 2
}).format(value);