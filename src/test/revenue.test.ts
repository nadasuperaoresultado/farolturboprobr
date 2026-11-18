import { describe, expect, it } from "vitest";
import { estimateMonthlyRevenue } from "../lib/revenue";

describe("Simulador de faturamento", () => {
  it("calcula faturamento bruto com 4,33 semanas por mês", () => {
    expect(estimateMonthlyRevenue(10, 100)).toBe(4330);
  });
  it("não desconta materiais ou outros custos", () => {
    expect(estimateMonthlyRevenue(4, 150)).toBe(2598);
  });
});
