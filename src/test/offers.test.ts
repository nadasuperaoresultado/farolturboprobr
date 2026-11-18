import { describe, expect, it } from "vitest";
import { offers } from "../lib/offers";

describe("Condições confirmadas das ofertas", () => {
  it("inclui os quatro materiais confirmados na versão digital", () => {
    expect(offers.digital.materials).toEqual([
      "Guia Farol Turbo Pro",
      "Checklist de Restauração — 12 etapas",
      "Planilha de Custo por Serviço",
      "WhatsApp que Vende — 33 mensagens prontas",
    ]);
  });
  it("inclui vídeos, área de membros e os quatro materiais na completa", () => {
    expect(offers.complete.materials).toEqual([
      "Treinamento em vídeo de restauração de faróis",
      "Acesso à área de membros",
      ...offers.digital.materials,
    ]);
  });
  it("não garante os bônus ainda não definidos", () => {
    for (const offer of Object.values(offers)) {
      expect(offer.materials).not.toContain("Kit de Divulgação Farol Turbo Pro");
      expect(offer.materials).not.toContain("Primeiros 10 Clientes");
    }
  });
  it("não envia kit físico", () => {
    expect(offers.digital.physicalKit).toBe(false);
    expect(offers.complete.physicalKit).toBe(false);
  });
  it("não define prazo de acesso sem confirmação", () => {
    expect(offers.complete.accessDays).toBeNull();
  });
  it("não define prazo de garantia sem confirmação", () => {
    expect(offers.digital.guaranteeDays).toBeNull();
    expect(offers.complete.guaranteeDays).toBeNull();
  });
  it("entrega a digital por Google Drive e a completa pela área de membros", () => {
    expect(offers.digital.delivery).toBe("Google Drive");
    expect(offers.complete.delivery).toBe("Área de membros");
  });
});
