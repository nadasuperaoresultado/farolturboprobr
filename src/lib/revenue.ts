export function estimateMonthlyRevenue(headlightsPerWeek: number, pricePerHeadlight: number) {
  return headlightsPerWeek * pricePerHeadlight * 4.33;
}

export const formatBRL = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format(value);
