import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { estimateMonthlyRevenue, formatBRL } from "@/lib/revenue";
import { offers } from "@/lib/offers";
import heroAsset from "@/assets/farol-hero.png.asset.json";

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
    "🧭 Diagnóstico certo",
    "Aprenda a avaliar as condições do farol e identificar o procedimento adequado para cada situação.",
  ],
  [
    "02",
    "🛠️ Técnica de lixamento",
    "Conheça o processo de lixamento e sua importância na preparação da superfície para a restauração.",
  ],
  [
    "03",
    "💨 Vaporização com polímero",
    "Aprenda sobre a aplicação do polímero e como ela participa da recuperação da transparência.",
  ],
  [
    "04",
    "✨ Acabamento profissional",
    "Conheça os cuidados finais para buscar um resultado visual bem executado.",
  ],
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
        🚀 {children}
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
        <img
          className="hero-photo"
          src={heroAsset.url}
          alt="Foto ilustrativa de um farol transparente em um veículo em oficina de estética automotiva"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="site-container">
          <div className="hero-copy">
            <div className="eyebrow">🚗 Uma nova habilidade. Novas possibilidades.</div>
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
            <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="size-4" />
              💻 Treinamento e materiais 100% digitais
            </div>
            <p className="mt-2 text-[10px] text-muted-foreground">
              Consulte as condições de acesso de cada versão.
            </p>
          </div>
        </div>
      </section>
      <div className="site-container">
        <div className="trust-strip">
          <div className="trust-item">
            <CirclePlay />
            <div>
              🎓 Aprendizado passo a passo<small>Do diagnóstico ao acabamento</small>
            </div>
          </div>
          <div className="trust-item">
            <Wrench />
            <div>
              🔧 Uma habilidade prática<small>Para o mercado automotivo</small>
            </div>
          </div>
          <div className="trust-item">
            <Laptop />
            <div>
              💻 Conteúdo digital<small>Conheça as versões disponíveis</small>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="site-container grid items-start gap-12 md:grid-cols-2">
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
        </div>
      </section>
      <section className="section section-alt">
        <div className="site-container grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <img
              src={heroAsset.url}
              alt="Detalhes da transparência e das lentes de um farol — imagem ilustrativa"
              className="aspect-[4/3] w-full rounded-md object-cover object-right"
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
        <div className="site-container">
          <div className="eyebrow">Sua preparação</div>
          <div className="preparation-grid grid gap-10 md:grid-cols-2">
            <h2 className="section-title">
              Antes de oferecer,
              <br />
              <span className="text-primary">aprenda e pratique.</span>
            </h2>
            <div>
              <p className="section-copy">
                Conhecer os materiais é parte da preparação. O Farol Turbo Pro apresenta uma
                orientação inicial para entender os itens envolvidos na restauração e organizar sua
                prática.
              </p>
              <div className="preparation-note mt-5 flex items-center gap-3 text-sm">
                <Wrench className="size-5 text-primary" />
                Orientação digital sobre os materiais, não um kit físico.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          <div className="eyebrow">Materiais complementares</div>
          <h2 className="section-title">
            Conhecimento que acompanha
            <br />
            <span className="text-primary">sua prática e seu atendimento.</span>
          </h2>
          <div className="materials-layout mt-10 grid gap-8 md:grid-cols-[180px_1fr]">
            <div className="flex justify-center py-5">
              <div className="digital-art" aria-hidden="true">
                <CarFront className="size-6 text-primary" />
                <strong>
                  FAROL
                  <br />
                  TURBO <span className="text-primary">PRO</span>
                </strong>
                <span className="text-xs text-muted-foreground">GUIA DIGITAL</span>
              </div>
            </div>
            <div className="material-grid grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {[
                [
                  FileText,
                  "📘 Guia Farol Turbo Pro",
                  "Material digital de apoio para acompanhar os conteúdos e consultar as orientações.",
                ],
                [
                  ListChecks,
                  "✅ Checklist de restauração",
                  "12 etapas para ajudar a organizar o procedimento.",
                ],
                [
                  Gauge,
                  "📊 Planilha de custo por serviço",
                  "Uma ferramenta para organizar custos e auxiliar no cálculo do preço.",
                ],
                [
                  MessageCircle,
                  "💬 WhatsApp que Vende",
                  "33 mensagens prontas para apoiar a comunicação com possíveis clientes.",
                ],
              ].map(([Icon, title, text]) => {
                const MaterialIcon = Icon as typeof FileText;
                return (
                  <div key={String(title)} className="material-card">
                    <MaterialIcon className="mb-4 size-6 text-primary" />
                    <h3 className="text-xl font-semibold">{String(title)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {String(text)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            Os quatro materiais digitais estão incluídos nas versões Digital e Completo.
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
              "💡 Quem procura uma possibilidade de renda extra.",
              "🚀 Quem está começando e quer entender as etapas da restauração.",
              "🚘 Quem já trabalha com estética automotiva e deseja conhecer essa técnica.",
              "📋 Quem quer aprender a organizar custos e apresentar seus serviços.",
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
            <div className="eyebrow justify-center">Escolha sua versão</div>
            <h2 className="section-title">
              Duas formas de começar.
              <br />
              <span className="text-primary">Uma nova habilidade para aprender.</span>
            </h2>
            <p className="section-copy mt-5">
              Escolha como deseja conhecer a restauração de faróis.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-7 md:grid-cols-2">
            <article className="offer flex flex-col">
              <FileText className="mb-6 size-8 text-primary" />
              <span className="text-xs font-semibold text-muted-foreground">FAROL TURBO PRO</span>
              <h3 className="mt-2 text-4xl font-bold">DIGITAL</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Para quem deseja acessar os materiais digitais.
              </p>
              <div className="my-7 space-y-3">
                {offers.digital.materials.map((material) => (
                  <CheckRow key={material}>{material}</CheckRow>
                ))}
                <CheckRow>📩 Entrega por link do Google Drive</CheckRow>
              </div>
              <div className="mt-auto border-t border-border pt-6">
                <p className="text-lg font-semibold">Oferta em breve</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  O preço será informado na abertura das inscrições.
                </p>
                <Button disabled variant="outline" className="cta mt-6 w-full">
                  Versão digital em breve <ArrowRight />
                </Button>
              </div>
            </article>
            <article className="offer offer-featured flex flex-col">
              <span className="offer-label">🎥 INCLUI AULAS EM VÍDEO</span>
              <CirclePlay className="mb-6 size-8 text-primary" />
              <span className="text-xs font-semibold text-muted-foreground">FAROL TURBO PRO</span>
              <h3 className="mt-2 text-4xl font-bold">COMPLETO</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                🎬 Para quem deseja aprender também com as aulas em vídeo.
              </p>
              <div className="my-7 space-y-3">
                {offers.complete.materials.map((material) => (
                  <CheckRow key={material}>{material}</CheckRow>
                ))}
              </div>
              <div className="mt-auto border-t border-border pt-6">
                <p className="text-lg font-semibold">Oferta em breve</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Preço e condições de acesso serão informados na abertura das inscrições.
                </p>
                <Button disabled variant="hero" className="cta mt-6 w-full">
                  Treinamento completo em breve <ArrowRight />
                </Button>
              </div>
            </article>
          </div>
          <p className="mt-7 text-center text-xs text-muted-foreground">
            💻 100% digital. Nenhum produto físico é enviado.
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
