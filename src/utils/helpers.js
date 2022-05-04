export function getFormatedCurrency(currency, value) {
  const [from, to] = currency.split("_");

  return `1 ${from} = ${value} ${to}`;
}
