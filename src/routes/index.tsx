import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  ChevronDown,
  CirclePlay,
  FileText,
  Gauge,
  CarFront,
  Laptop,
  ListChecks,
  MessageCircle,
  Plus,
  ShieldCheck,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { estimateMonthlyRevenue, formatBRL } from "@/lib/revenue";
import { offers } from "@/lib/offers";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Farol Turbo Pro — Treinamento de restauração de faróis" },
      {
        name: "description",
        content:
          "Aprenda diagnóstico, lixamento, vaporização com polímero e acabamento. Conheça o Farol Turbo Pro e simule seu faturamento bruto mensal.",
      },
      { property: "og:title", content: "Farol Turbo Pro — Restauração de faróis" },
      {
        property: "og:description",
        content:
          "Uma nova habilidade prática no mercado automotivo. Conheça as etapas, os materiais e as versões do treinamento.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const modules = [
  [
    "01",
    "Diagnóstico certo",
    "Aprenda a avaliar as condições do farol e identificar o procedimento adequado para cada situação.",
  ],
  [
    "02",
    "Técnica de lixamento",
    "Conheça o processo de lixamento e sua importância na preparação da superfície para a restauração.",
  ],
  [
    "03",
    "Vaporização com polímero",
    "Aprenda sobre a aplicação do polímero e como ela participa da recuperação da transparência.",
  ],
  [
    "04",
    "Acabamento profissional",
    "Conheça os cuidados finais para buscar um resultado visual bem executado.",
  ],
];
const showcaseMaterials = [
  ["01-ebook-farol-turbo-pro-por-dentro.png", "Ebook Farol Turbo Pro", "Veja por dentro o guia de restauração"],
  ["02-checklist-12-etapas.png", "Checklist em 12 etapas", "Capa do material"],
  ["02-checklist-12-etapas-por-dentro.png", "Checklist em 12 etapas", "Veja uma prévia do conteúdo interno"],
  ["03-custos-capa.png.png", "Planilha de custos", "Organize custos e preços por serviço"],
  ["04-whatsapp-capa.png", "WhatsApp que Vende", "Capa do material com mensagens prontas"],
  ["04-whatsapp-por-dentro.png", "WhatsApp que Vende", "Veja por dentro as mensagens para usar"],
  ["5-clientes-capa.png", "Kit Primeiros 5 Clientes", "Capa do material de apoio para conquistar clientes"],
  ["05-clientes-por-dentro.png", "Kit Primeiros 5 Clientes", "Veja por dentro o conteúdo de apoio"],
  ["06-prospeccao-capa.png.png", "Planilha de prospecção", "Organize contatos e oportunidades"],
];
const faqs = [
  [
    "Preciso já trabalhar com estética automotiva?",
    "Não necessariamente. O treinamento foi pensado para apresentar as etapas da restauração e permitir que iniciantes conheçam o procedimento.",
  ],
  [
    "O treinamento ensina a restaurar faróis?",
    "Sim. O conteúdo está organizado em etapas que abordam diagnóstico, lixamento, vaporização com polímero e acabamento.",
  ],
  [
    "Vou receber algum produto físico?",
    "Não. Os materiais são digitais e a entrega é realizada por meio de links de acesso.",
  ],
  [
    "Como recebo a versão digital?",
    "A entrega dos materiais digitais é feita por link do Google Drive.",
  ],
  [
    "Como funciona a versão completa?",
    "A versão completa inclui treinamento em vídeo e acesso à área de membros. A plataforma e as condições de acesso serão informadas junto à oferta.",
  ],
  [
    "Quanto posso ganhar com restauração de faróis?",
    "O faturamento depende da quantidade de serviços realizados, preço cobrado, demanda, custos e capacidade de atendimento. O simulador apresenta apenas uma estimativa de faturamento bruto, não uma promessa de ganhos.",
  ],
];
function CTA({
  children = "Quero conhecer o treinamento",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Button variant="hero" className={`cta ${className}`} asChild>
      <a href="#versoes">
        {children}
        <ArrowRight />
      </a>
    </Button>
  );
}
function CheckRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="check-row">
      <Check /> <span>{children}</span>
    </div>
  );
}
function OfferCheckRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="check-row">
      <Check className="!text-green-500" /> <span>{children}</span>
    </div>
  );
}
function Wordmark() {
  return (
    <a href="#inicio" aria-label="Farol Turbo Pro, início" className="wordmark">
      <CarFront className="size-9 text-primary" strokeWidth={1.8} />
      <span className="wordmark-name">
        FAROL TURBO <span className="text-primary">PRO</span>
        <small>TREINAMENTO EM RESTAURAÇÃO DE FARÓIS</small>
      </span>
    </a>
  );
}
function Simulator() {
  const [quantity, setQuantity] = useState(8);
  const [price, setPrice] = useState(100);
  return (
    <div className="simulator mt-10">
      <div className="sim-controls space-y-9">
        <div>
          <div className="mb-5 flex items-center justify-between gap-4">
            <label htmlFor="quantity" className="text-sm font-medium">
              Faróis por semana
            </label>
            <input
              id="quantity"
              aria-label="Faróis por semana"
              className="number-input"
              type="number"
              min="0"
              max="50"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(0, Math.min(50, Number(e.target.value))))}
            />
          </div>
          <Slider
            aria-label="Ajustar faróis por semana"
            min={0}
            max={50}
            step={1}
            value={[quantity]}
            onValueChange={(v) => setQuantity(v[0] ?? 0)}
          />
          <div className="mt-3 flex justify-between text-xs text-muted-foreground">
            <span>0 faróis</span>
            <span>50 faróis</span>
          </div>
        </div>
        <div>
          <div className="mb-5 flex items-center justify-between gap-4">
            <label htmlFor="price" className="text-sm font-medium">
              Valor por farol (R$)
            </label>
            <input
              id="price"
              aria-label="Valor por farol em reais"
              className="number-input"
              type="number"
              min="0"
              max="500"
              value={price}
              onChange={(e) => setPrice(Math.max(0, Math.min(500, Number(e.target.value))))}
            />
          </div>
          <Slider
            aria-label="Ajustar valor por farol"
            min={0}
            max={500}
            step={5}
            value={[price]}
            onValueChange={(v) => setPrice(v[0] ?? 0)}
          />
          <div className="mt-3 flex justify-between text-xs text-muted-foreground">
            <span>R$ 0</span>
            <span>R$ 500</span>
          </div>
        </div>
      </div>
      <div className="sim-result">
        <TrendingUp className="mb-5 size-7 text-primary" />
        <span className="text-xs font-semibold uppercase text-muted-foreground">
          Faturamento bruto mensal estimado
        </span>
        <output aria-live="polite" className="sim-value mt-3">
          {formatBRL(estimateMonthlyRevenue(quantity, price))}
        </output>
        <p className="mt-3 text-xs text-muted-foreground">
          {quantity} faróis × {formatBRL(price)} × 4,33 semanas
        </p>
        <div className="mt-7 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
          Uma simulação, não uma promessa de ganhos. O resultado depende da sua prática, da demanda
          e da capacidade de atendimento.
        </div>
      </div>
    </div>
  );
}
function Index() {
  const [selectedShowcase, setSelectedShowcase] = useState<null | { image: string; title: string; description: string }>(null);
  const dragState = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  return (
    <main id="inicio">
      <header className="site-header">
        <div className="site-container flex h-full items-center justify-between gap-5">
          <Wordmark />
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-8 text-xs font-medium md:flex"
          >
            <a className="hover:text-primary" href="#conteudo">
              O treinamento
            </a>
            <a className="hover:text-primary" href="#simulador">
              Simulador
            </a>
            <a className="hover:text-primary" href="#duvidas">
              Dúvidas
            </a>
            <Button asChild variant="outline" size="sm">
              <a href="#versoes">
                Conhecer o treinamento <ArrowUpRight />
              </a>
            </Button>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="site-container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow">Uma nova habilidade. Novas possibilidades.</div>
            <h1>
              FAROL TURBO <span className="text-primary">PRO</span>
            </h1>
            <h2>
              Domine a restauração de faróis e transforme uma nova habilidade em oportunidade de{" "}
              <span className="text-primary">renda extra.</span>
            </h2>
            <p className="hero-description">
              Aprenda o processo passo a passo, conheça os materiais utilizados e descubra como
              calcular o preço dos serviços para começar a oferecer restauração de faróis.
            </p>
            <CTA className="mt-7" />
            <div className="hero-assurances" aria-label="Garantias e segurança da compra">
              <div className="hero-assurance">
                <Award aria-hidden="true" />
                <span>Satisfação garantida</span>
              </div>
              <div className="hero-assurance">
                <ShieldCheck aria-hidden="true" />
                <span>Compra segura</span>
              </div>
              <div className="hero-assurance">
                <Zap aria-hidden="true" />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <img
              className="hero-photo"
              src="/images/Mockup%203D%20Farol%20Turbo%20Pro.png"
              alt="Mockup 3D do treinamento Farol Turbo Pro e seus materiais digitais"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>
      <section className="section showcase-section" aria-label="Materiais incluídos no Farol Turbo Pro">
        <div className="site-container">
          <div className="eyebrow">Por dentro do treinamento</div>
          <h2 className="section-title">
            Veja por dentro tudo o que <span className="text-primary">você vai receber!</span>
          </h2>
          <p className="section-copy mt-5 max-w-2xl">
            Conheça os materiais, ferramentas e conteúdos que fazem parte do Farol Turbo Pro.
          </p>
          <div
            className="showcase-marquee mt-10"
            aria-label="Carrossel contínuo dos materiais digitais. Arraste para os lados ou selecione uma imagem para ampliar."
            onPointerDown={(event) => {
              dragState.current = { active: true, startX: event.clientX, startScroll: event.currentTarget.scrollLeft, moved: false };
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              if (!dragState.current.active) return;
              const delta = event.clientX - dragState.current.startX;
              if (Math.abs(delta) > 5) dragState.current.moved = true;
              event.currentTarget.scrollLeft = dragState.current.startScroll - delta;
            }}
            onPointerUp={() => { dragState.current.active = false; }}
            onPointerCancel={() => { dragState.current.active = false; }}
            onClickCapture={(event) => {
              if (dragState.current.moved) {
                event.preventDefault();
                event.stopPropagation();
                dragState.current.moved = false;
              }
            }}
          >
            <div className="showcase-track">
              {[...showcaseMaterials, ...showcaseMaterials].map(([image, title, description], index) => (
                <article
                  className="showcase-card"
                  key={`${title}-${index}`}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ampliar imagem: ${title}`}
                  onClick={() => setSelectedShowcase({ image, title, description })}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedShowcase({ image, title, description });
                    }
                  }}
                >
                  <div className="showcase-image-wrap">
                    <div className="showcase-image-fallback" aria-hidden="true">
                      <FileText className="size-10 text-primary" />
                      <span>PRÉVIA DO MATERIAL</span>
                    </div>
                    <img src={`/images/${image}`} alt={`Prévia ilustrativa: ${title}`} className="showcase-image" loading="lazy" draggable={false} />
                    <span className="showcase-zoom-hint">Clique para ampliar</span>
                  </div>
                  <div className="showcase-card-copy">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          {selectedShowcase && (
            <div
              className="showcase-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={`Imagem ampliada: ${selectedShowcase.title}`}
              onClick={() => setSelectedShowcase(null)}
              onKeyDown={(event) => { if (event.key === "Escape") setSelectedShowcase(null); }}
            >
              <button className="showcase-lightbox-close" type="button" aria-label="Fechar imagem ampliada" onClick={() => setSelectedShowcase(null)}>×</button>
              <div className="showcase-lightbox-content" onClick={(event) => event.stopPropagation()}>
                <img src={`/images/${selectedShowcase.image}`} alt={selectedShowcase.title} />
                <h3>{selectedShowcase.title}</h3>
                <p>{selectedShowcase.description}</p>
              </div>
            </div>
          )}
          <p className="mt-5 text-xs text-muted-foreground">
            Os seis materiais digitais estão incluídos nas versões Digital e Completo.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <div className="eyebrow">O primeiro passo</div>
            <h2 className="section-title">
              Uma renda extra começa com <span className="text-primary">uma nova habilidade.</span>
            </h2>
            <p className="section-copy mt-6">
              Você quer complementar sua renda, trabalhar por conta própria ou aprender um serviço,
              mas ainda não sabe por onde começar?
            </p>
            <p className="section-copy mt-4">
              Começar pode parecer complicado. Aprender uma técnica com aplicação prática é o
              primeiro passo para sair da dúvida.
            </p>
          </div>
          <div className="question-panel space-y-5 md:mt-10">
            <p className="mb-7 text-sm font-semibold">Talvez você ainda se pergunte:</p>
            {[
              "Qual serviço aprender primeiro?",
              "Quais materiais preciso comprar?",
              "Como executar o procedimento corretamente?",
              "Como calcular quanto cobrar?",
              "Como apresentar meu serviço para conseguir clientes?",
            ].map((text) => (
              <CheckRow key={text}>{text}</CheckRow>
            ))}
          </div>
          <div className="trust-strip">
            <div className="trust-item">
              <CirclePlay />
              <div>
                Aprendizado passo a passo<small>Do diagnóstico ao acabamento</small>
              </div>
            </div>
            <div className="trust-item">
              <Wrench />
              <div>
                Uma habilidade prática<small>Para o mercado automotivo</small>
              </div>
            </div>
            <div className="trust-item">
              <Laptop />
              <div>
                Conteúdo digital<small>Conheça as versões disponíveis</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="site-container grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <img
              src={`/images/antes-depois-restauracao.png`}
              alt="Comparação de antes e depois da restauração de um farol, com as duas condições visíveis por completo"
              className="block h-auto max-h-[520px] w-full rounded-md object-contain"
              loading="lazy"
            />
            <span className="mt-3 block text-xs text-muted-foreground">
              Imagem ilustrativa. Os resultados variam conforme a peça e a execução.
            </span>
          </div>
          <div>
            <div className="eyebrow">A oportunidade</div>
            <h2 className="section-title">
              Dê uma nova perspectiva{" "}
              <span className="text-primary">aos faróis. E ao seu trabalho.</span>
            </h2>
            <p className="section-copy mt-6">
              Com o tempo, os faróis podem apresentar desgaste, perda de transparência e aparência
              opaca. A restauração busca recuperar a aparência da peça com procedimentos
              específicos.
            </p>
            <p className="section-copy mt-4">
              O Farol Turbo Pro apresenta esse processo de forma organizada: avaliação, lixamento,
              aplicação de polímero e acabamento.
            </p>
            <div className="mt-6 flex items-start gap-3 border-l-2 border-primary pl-5 text-sm font-semibold leading-relaxed">
              Você não precisa começar sabendo tudo.
              <br />
              Precisa começar aprendendo o procedimento.
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="conteudo">
        <div className="site-container">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="eyebrow">O treinamento</div>
              <h2 className="section-title">
                Cada etapa importa.
                <br />
                <span className="text-primary">Aprenda o processo completo.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Conheça as etapas da restauração de faróis, da avaliação inicial aos cuidados finais.
            </p>
          </div>
          <div className="training-grid mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map(([n, title, copy]) => (
              <article className="module" key={n}>
                <div className="flex items-start justify-between">
                  <span className="module-number">{n}</span>
                  <ArrowUpRight className="size-5 text-muted-foreground" />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
          <div className="mt-12 grid items-center gap-8 rounded-xl border border-border bg-card p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
            <div>
              <div className="eyebrow">Sua preparação</div>
              <h3 className="text-2xl font-semibold leading-tight">
                Antes de oferecer, <span className="text-primary">aprenda e pratique.</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Conheça os materiais envolvidos na restauração e organize sua prática com a orientação inicial do Farol Turbo Pro.
              </p>
              <div className="preparation-note mt-5 flex items-center gap-3 text-sm">
                <Wrench className="size-5 shrink-0 text-primary" />
                Orientação digital sobre os materiais, não um kit físico.
              </div>
            </div>
            <img src="/images/preparacao-restauracao-farois.jpg.jpeg" alt="Preparação prática para restauração de faróis em oficina" className="block h-auto max-h-[340px] w-full rounded-lg object-contain" loading="lazy" />
          </div>
      </section>
      <section className="section" id="simulador">
        <div className="site-container">
          <div className="eyebrow">Faça as contas</div>
          <h2 className="section-title">
            Quanto esse serviço poderia
            <br />
            <span className="text-primary">representar no seu mês?</span>
          </h2>
          <p className="section-copy mt-5 max-w-2xl">
            Simule quantos faróis pretende atender por semana e o valor que cobraria por farol.
          </p>
          <Simulator />
          <p className="mt-5 max-w-4xl text-xs leading-relaxed text-muted-foreground">
            Simulação ilustrativa calculada com base em 4,33 semanas por mês. Não representa lucro
            líquido, não desconta materiais, deslocamento, taxas ou outros custos e não garante
            demanda ou resultados financeiros.
          </p>
        </div>
      </section>
      <section className="section section-alt">
        <div className="site-container grid gap-12 md:grid-cols-2">
          <div>
            <div className="eyebrow">Para quem é</div>
            <h2 className="section-title">
              Seu próximo passo
              <br />
              <span className="text-primary">pode começar aqui.</span>
            </h2>
            <p className="section-copy mt-5">
              Para quem deseja aprender uma nova habilidade prática e conhecer um serviço do
              segmento automotivo.
            </p>
          </div>
          <div className="audience-panel space-y-4">
            {[
              "Quem procura uma possibilidade de renda extra.",
              "Quem está começando e quer entender as etapas da restauração.",
              "Quem já trabalha com estética automotiva e deseja conhecer essa técnica.",
              "Quem quer aprender a organizar custos e apresentar seus serviços.",
            ].map((text) => (
              <CheckRow key={text}>{text}</CheckRow>
            ))}
            <p className="pt-4 text-xs leading-relaxed text-muted-foreground">
              O treinamento é educacional. Aprendizado, prática, qualidade da execução e conquista
              de clientes dependem da dedicação e das condições de cada pessoa.
            </p>
          </div>
        </div>
      </section>
      <section className="section" id="versoes">
        <div className="site-container">
          <div className="text-center">
            <div className="eyebrow justify-center">Conheça o treinamento</div>
            <h2 className="section-title">
              Uma formação completa.
              <br />
              <span className="text-primary">Tudo em um só lugar.</span>
            </h2>
            <p className="section-copy mt-5">
              Aprenda com os materiais digitais e as aulas em vídeo do Farol Turbo Pro.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <article className="offer offer-featured flex flex-col text-center">
              <span className="offer-label mx-auto">22 VIDEO AULAS + 5 BÔNUS + ACESSO VITALÍCIO</span>
              <img src="/images/Mockup%203D%20Farol%20Turbo%20Pro.png" alt="Mockup do iPad com a área de membros e as videoaulas do Farol Turbo Pro" className="mx-auto mb-5 mt-2 block h-auto max-h-[280px] w-full max-w-[420px] rounded-xl object-contain" loading="lazy" />
              <span className="text-xs font-semibold text-muted-foreground">FAROL TURBO PRO</span>
              <h3 className="mt-2 text-4xl font-bold">COMPLETO</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Com seu primeiro serviço, você já pode faturar até 5x o valor investido neste treinamento!
              </p>
              <div className="my-7 space-y-3 text-left">
                {offers.complete.materials.map((material) => (
                  <OfferCheckRow key={material}>{material}</OfferCheckRow>
                ))}
              </div>
              <div className="mt-auto border-t border-border pt-6 text-center">
                <p className="text-sm font-medium text-muted-foreground">De R$ 59,90 por apenas</p>
                <p className="mt-1 text-5xl font-extrabold tracking-tight text-primary">R$ 19,90</p>
                <p className="mt-2 text-sm text-muted-foreground">À vista, ou em até 4x de R$ 5,63</p>
                <Button asChild variant="hero" className="cta mt-6 w-full">
                  <a href="https://pay.cakto.com.br/3br6uum_1309312" target="_blank" rel="noopener noreferrer">
                    QUERO A OFERTA COMPLETA <ArrowRight />
                  </a>
                </Button>
                <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
                  Compra protegida <span className="px-1">|</span> Acesso vitalício <span className="px-1">|</span> Acesso imediato
                </p>
              </div>
            </article>
          </div>
          <p className="mt-7 text-center text-xs text-muted-foreground">
            100% digital. Nenhum produto físico é enviado.
          </p>
        </div>
      </section>
      <section className="section" id="duvidas">
        <div className="site-container grid gap-10 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="eyebrow">Dúvidas frequentes</div>
            <h2 className="section-title">
              Antes de começar,
              <br />
              <span className="text-primary">tire suas dúvidas.</span>
            </h2>
          </div>
          <div>
            {faqs.map(([question, answer]) => (
              <details className="faq-row" key={question}>
                <summary>
                  {question}
                  <Plus className="size-5 shrink-0 text-primary transition-transform" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="site-container text-center">
          <CarFront className="mx-auto mb-6 size-10 text-primary" />
          <h2 className="section-title mx-auto max-w-2xl">
            Uma nova habilidade.
            <br />
            <span className="text-primary">Uma nova possibilidade para você.</span>
          </h2>
          <p className="section-copy mx-auto mt-5 max-w-xl">
            Aprenda as etapas, conheça os materiais e descubra como estruturar sua prestação de
            serviço.
          </p>
          <CTA className="mt-8">Quero conhecer o Farol Turbo Pro</CTA>
          <p className="mx-auto mt-5 max-w-lg text-xs leading-relaxed text-muted-foreground">
            Escolha a versão que corresponde ao que você deseja receber e confira as condições antes
            da compra.
          </p>
        </div>
      </section>
      <footer className="site-container flex flex-wrap items-center justify-between gap-6 py-8">
        <Wordmark />
        <div className="text-xs leading-relaxed text-muted-foreground">
          <p>© 2026 Farol Turbo Pro. Todos os direitos reservados.</p>
          <p className="mt-1">Conteúdo educacional. Não há garantia de resultados financeiros.</p>
        </div>
        <a href="#inicio" aria-label="Voltar ao início" className="text-primary">
          <ChevronDown className="size-5 rotate-180" />
        </a>
      </footer>
    </main>
  );
}
