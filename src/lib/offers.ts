export const digitalMaterials = [
  "Ebook completo Farol Turbo Pro",
  "Checklist de Restauração em 12 Etapas",
  "Planilha de Custo por Serviço",
  "WhatsApp que Vende — 33 mensagens prontas",
  "Kit Primeiros 10 Clientes",
  "Planilha de Prospecção de Clientes",
];

export const offers = {
  digital: {
    materials: digitalMaterials,
    delivery: "Google Drive",
    physicalKit: false,
    accessDays: null,
    guaranteeDays: null,
  },
  complete: {
    materials: [
      "Treinamento em vídeo de restauração de faróis",
      "Acesso à área de membros",
      ...digitalMaterials,
    ],
    delivery: "Área de membros",
    physicalKit: false,
    accessDays: null,
    guaranteeDays: null,
  },
};
