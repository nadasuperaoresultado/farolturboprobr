export const digitalMaterials = [
  "Guia Farol Turbo Pro",
  "Checklist de Restauração — 12 etapas",
  "Planilha de Custo por Serviço",
  "WhatsApp que Vende — 33 mensagens prontas",
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
