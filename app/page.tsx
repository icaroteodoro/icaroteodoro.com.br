import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MapPin, ArrowUpRight, Zap, Code2, Server, Database, Smartphone, Mail, Phone } from "lucide-react";
import { Header } from "@/components/header";
import { getAllCases } from "@/lib/cases";

const GithubIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.4 5 1.8 5 1.8a5.4 5.4 0 0 0-.1 3.8A5.4 5.4 0 0 0 3.4 9.4c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black font-sans relative overflow-x-hidden transition-colors duration-300">

      {/* JSON-LD Structured Data — Schema.org Person */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Ícaro Teodoro",
            url: "https://icaroteodoro.com.br",
            image: "https://icaroteodoro.com.br/sobre.jpeg",
            jobTitle: "Engenheiro de Software Java",
            description:
              "Engenheiro de Software Java especializado em Spring Boot, APIs REST, autenticação JWT/RBAC, microsserviços, Docker, CI/CD e desenvolvimento mobile com React Native.",
            knowsAbout: [
              "Java",
              "Spring Boot",
              "Spring Security",
              "APIs REST",
              "Microsserviços",
              "JWT",
              "RBAC",
              "Docker",
              "Kubernetes",
              "CI/CD",
              "React Native",
              "Next.js",
              "PostgreSQL",
              "MySQL",
              "MongoDB",
              "Apache Kafka",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Maceió",
              addressRegion: "Alagoas",
              addressCountry: "BR",
            },
            sameAs: [
              "https://github.com/icaroteodoro",
              "https://linkedin.com/in/icaro-teodoro",
            ],
          }),
        }}
      />

      {/* Background Glow */}
      <div className="absolute top-0 inset-x-0 h-[500px] w-full bg-gradient-to-b from-zinc-200/50 dark:from-zinc-800/20 to-transparent pointer-events-none transition-colors duration-300" />

      {/* Interactive Header with Themes */}
      <Header />

      <main className="flex-1 flex flex-col relative z-10">

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center text-left px-6 pt-32 pb-20 max-w-6xl mx-auto w-full gap-12">

          <div className="flex-1 flex flex-col items-start relative z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
              Engenheiro de <br /> Software Java<span className="text-zinc-400 dark:text-zinc-600 animate-blink">_</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light max-w-xl mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              3 anos desenvolvendo sistemas completos com Java, Spring Boot, React Native e Next.js. Do backend à interface e integração com IA.
            </p>
            <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
              <a href="#experience" className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center gap-2">
                Minha Experiência <ArrowUpRight size={18} />
              </a>
              <div className="flex gap-2">
                <a href="https://github.com/icaroteodoro" target="_blank" rel="noreferrer" aria-label="Perfil do GitHub de Ícaro Teodoro" className="h-12 w-12 flex items-center justify-center border border-zinc-300 dark:border-zinc-800 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                  <GithubIcon size={20} />
                </a>
                <a href="https://www.linkedin.com/in/icaro-teodoro/" target="_blank" rel="noreferrer" aria-label="Perfil do LinkedIn de Ícaro Teodoro" className="h-12 w-12 flex items-center justify-center border border-zinc-300 dark:border-zinc-800 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center md:justify-end animate-in fade-in zoom-in duration-700">
            <div className="relative flex justify-center items-center">
              {/* SVG Animated Trace behind image */}
              <svg className="absolute -z-10 w-[160%] h-[160%] max-w-none opacity-20 dark:opacity-30 text-zinc-400 dark:text-zinc-600 pointer-events-none" viewBox="0 0 400 400" fill="none">
                <path d="M50 350 C 50 200, 300 200, 300 50" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="animate-draw" strokeLinecap="round" />
                <circle cx="50" cy="350" r="4" fill="currentColor" className="animate-pulse" />
                <circle cx="300" cy="50" r="4" fill="currentColor" className="animate-pulse" />
              </svg>

              <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] z-10">
                <Image
                  src="/sobre.jpeg"
                  alt="Ícaro Teodoro"
                  fill
                  className="object-cover rounded-3xl shadow-2xl border-2 border-zinc-200 dark:border-zinc-800/50"
                  priority
                  sizes="(max-width: 768px) 288px, 450px"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute top-10 -left-6 md:-left-12 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-3 rounded-2xl shadow-xl flex items-center gap-2 animate-float z-20">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" width="20" height="20" loading="lazy" decoding="async" className="w-5 h-5 shrink-0" />
                <span className="font-mono text-sm font-bold text-zinc-900 dark:text-white">Java</span>
              </div>

              <div className="absolute bottom-16 -right-4 md:-right-8 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-3 rounded-2xl shadow-xl flex items-center gap-2 animate-float-delayed z-20">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" width="20" height="20" loading="lazy" decoding="async" className="w-5 h-5 shrink-0 rounded-sm" />
                <span className="font-mono text-sm font-bold text-zinc-900 dark:text-white">TypeScript</span>
              </div>

              <div className="absolute -top-4 right-6 md:right-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-3 rounded-2xl shadow-xl flex items-center gap-2 animate-float z-20" style={{ animationDelay: '1.5s' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring" width="20" height="20" loading="lazy" decoding="async" className="w-5 h-5 shrink-0" />
                <span className="font-mono text-sm font-bold text-zinc-900 dark:text-white">Spring</span>
              </div>

              <div className="absolute bottom-6 -left-4 md:-left-8 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 p-3 rounded-2xl shadow-xl flex items-center gap-2 animate-float z-20" style={{ animationDelay: '2.5s' }}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React Native" width="20" height="20" loading="lazy" decoding="async" className="w-5 h-5 shrink-0" />
                <span className="font-mono text-sm font-bold text-zinc-900 dark:text-white">React Native</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Box Section (Sobre & Habilidades) */}
        <section id="about" className="px-6 py-24 max-w-6xl mx-auto w-full">
          <div className="flex flex-col gap-6">

            {/* About Card — full width */}
            <Card className="bg-white dark:bg-[#0a0a0a] border-zinc-200 dark:border-zinc-800 p-2 md:p-4 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group overflow-hidden relative shadow-sm dark:shadow-none">
              <div className="absolute top-0 right-0 p-32 bg-zinc-100 dark:bg-white/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-zinc-200 dark:group-hover:bg-white/10 transition-all duration-700"></div>
              <CardContent className="flex flex-col sm:flex-row gap-8 items-start relative z-10 pt-6">
                <div className="w-32 h-32 md:w-40 md:h-56 relative rounded-xl overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-800 shadow-xl">
                  <Image src="/sobre.jpeg" alt="Ícaro Teodoro" fill className="object-cover" />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Sobre</h2>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    Engenheiro de Software Java com foco em Spring Boot, com experiência em APIs REST, autenticação e autorização (JWT e RBAC), integração de sistemas e bancos de dados relacionais. Atualmente desenvolvo a API em Java/Spring Boot de uma plataforma de gestão de serviços públicos para a Prefeitura de Maribondo - AL, atuando em funcionalidades como autenticação, notificações push, geolocalização e integração entre sistemas. Também tenho experiência com Docker, CI/CD e desenvolvimento de aplicações web e mobile com React Native.
                  </p>
                  <div className="flex items-center gap-2 text-zinc-500 text-sm font-mono mt-2">
                    <MapPin size={16} /> Maceió, Alagoas — Brasil
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skill Cards — 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Backend */}
              <Card className="bg-white dark:bg-[#0a0a0a] border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm dark:shadow-none">
                <CardHeader>
                  <Server className="w-8 h-8 mb-2 text-zinc-700 dark:text-zinc-300" />
                  <CardTitle className="text-lg text-zinc-900 dark:text-white">Backend & Arquitetura</CardTitle>
                  <CardDescription className="text-zinc-500">APIs, segurança e integrações.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Node.js", "REST APIs", "Microsserviços", "JWT", "RBAC"].map(s => (
                    <Badge key={s} variant="secondary" className="bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black">{s}</Badge>
                  ))}
                </CardContent>
              </Card>

              {/* Frontend & Mobile */}
              <Card className="bg-white dark:bg-[#0a0a0a] border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm dark:shadow-none">
                <CardHeader>
                  <Smartphone className="w-8 h-8 mb-2 text-zinc-700 dark:text-zinc-300" />
                  <CardTitle className="text-lg text-zinc-900 dark:text-white">Frontend & Mobile</CardTitle>
                  <CardDescription className="text-zinc-500">Web, interfaces e apps nativos.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {["TypeScript", "JavaScript", "React", "Next.js", "Angular", "React Native", "Expo"].map(s => (
                    <Badge key={s} variant="secondary" className="bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black">{s}</Badge>
                  ))}
                </CardContent>
              </Card>

              {/* Banco de Dados */}
              <Card className="bg-white dark:bg-[#0a0a0a] border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm dark:shadow-none">
                <CardHeader>
                  <Database className="w-8 h-8 mb-2 text-zinc-700 dark:text-zinc-300" />
                  <CardTitle className="text-lg text-zinc-900 dark:text-white">Banco de Dados</CardTitle>
                  <CardDescription className="text-zinc-500">Modelagem e persistência.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {["MySQL", "PostgreSQL", "MongoDB", "Redis"].map(s => (
                    <Badge key={s} variant="secondary" className="bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black">{s}</Badge>
                  ))}
                </CardContent>
              </Card>

              {/* DevOps & Mensageria */}
              <Card className="bg-white dark:bg-[#0a0a0a] border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-sm dark:shadow-none">
                <CardHeader>
                  <Zap className="w-8 h-8 mb-2 text-zinc-700 dark:text-zinc-300" />
                  <CardTitle className="text-lg text-zinc-900 dark:text-white">DevOps & Infra</CardTitle>
                  <CardDescription className="text-zinc-500">Entrega, escala e observabilidade.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {["Docker", "Kubernetes", "GitHub Actions", "GitLab CI/CD", "Apache Kafka", "RabbitMQ", "Prometheus", "Grafana", "OpenTelemetry"].map(s => (
                    <Badge key={s} variant="secondary" className="bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black">{s}</Badge>
                  ))}
                </CardContent>
              </Card>

            </div>

          </div>
        </section>

        {/* Experiência Section (Timeline Alternada) */}
        <section id="experience" className="px-6 py-24 max-w-6xl mx-auto w-full relative">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Experiência Profissional</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              Minha trajetória construindo sistemas de ponta a ponta.
            </p>
          </div>

          <div className="relative wrap overflow-hidden p-0 md:p-10 h-full">
            {/* The vertical line */}
            <div className="absolute border-l border-zinc-300 dark:border-zinc-800 h-full left-[23px] md:left-1/2 transform md:-translate-x-1/2 top-0"></div>

            {/* Item 1 (Left on Desktop, Right on Mobile) */}
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center w-full relative">
              {/* Marker */}
              <div className="absolute left-[23px] md:left-1/2 w-4 h-4 bg-zinc-900 dark:bg-white rounded-full transform -translate-x-1/2 mt-2 md:mt-0 shadow-md z-10"></div>

              {/* Content Box */}
              <div className="w-full md:w-[45%] pl-14 md:pl-0 md:pr-12">
                <div className="py-2 md:text-right">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">Engenheiro de Software Java | Autônomo</h3>
                  <p className="text-zinc-500 font-mono text-sm mb-6">Outubro de 2025 — Março de 2026</p>

                  <div className="flex flex-col gap-3 text-zinc-600 dark:text-zinc-400 mb-6 text-base leading-relaxed [&_strong]:text-zinc-900 [&_strong]:dark:text-white [&_strong]:font-semibold">
                    <p>Participei do desenvolvimento de um sistema completo para gestão de serviços públicos para a Prefeitura de Maribondo, AL, centralizando solicitações e otimizando o tempo de resposta em aproximadamente <strong>25%</strong> através da implementação de um fluxo digital de ponta a ponta.</p>
                    <p>Criei um aplicativo mobile usando <strong>React Native</strong> (<strong>Expo</strong>) que permite aos cidadãos registrar ocorrências com geolocalização e fotos, além de implementar autenticação segura e notificações push. Participei na estruturação do backend com <strong>Java</strong> (<strong>Spring Boot</strong>) e um painel administrativo em <strong>Angular</strong>.</p>
                    <p>Desenvolvi um sistema web para gerenciamento de clientes e processos para um escritório de advocacia, incluindo módulo financeiro, controle de prazos e Kanban, implementando RBAC com <strong>Java</strong>, <strong>Next.js</strong> no frontend e <strong>MySQL</strong>.</p>
                  </div>
                </div>
              </div>

              {/* Empty Space for Desktop Right Side */}
              <div className="hidden md:block w-[45%]"></div>
            </div>

            {/* Item 2 (Right on Desktop, Right on Mobile) */}
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center w-full relative">
              {/* Marker */}
              <div className="absolute left-[23px] md:left-1/2 w-4 h-4 bg-zinc-200 dark:bg-zinc-800 border border-zinc-400 dark:border-zinc-600 rounded-full transform -translate-x-1/2 mt-2 md:mt-0 shadow-md z-10"></div>

              {/* Empty Space for Desktop Left Side */}
              <div className="hidden md:block w-[45%]"></div>

              {/* Content Box */}
              <div className="w-full md:w-[45%] pl-14 md:pl-12">
                <div className="py-2">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">Desenvolvedor Fullstack | ClickEvolue</h3>
                  <p className="text-zinc-500 font-mono text-sm mb-6">Agosto de 2023 — Outubro de 2025</p>

                  <div className="flex flex-col gap-3 text-zinc-600 dark:text-zinc-400 mb-6 text-base leading-relaxed [&_strong]:text-zinc-900 [&_strong]:dark:text-white [&_strong]:font-semibold">
                    <p>Desenvolvi um sistema de gerenciamento de clientes para substituir planilhas usando <strong>Next.js</strong>, centralizando dados em uma aplicação web e reduzindo inconsistências.</p>
                    <p>Criei um sistema automatizado para geração de posts de blog usando Inteligência Artificial e <strong>Next.js</strong>, reduzindo o tempo de entrega de conteúdo em <strong>80%</strong>.</p>
                    <p>Integrei IA ao CMS da empresa para geração de conteúdo, diminuindo o tempo de produção em até <strong>70%</strong> com microsserviços em <strong>Node.js</strong> (<strong>Express.js</strong>).</p>
                    <p>Implementei e otimizei pipelines de CI/CD no <strong>GitLab CI</strong>, automatizando os processos de build e deploy, reduzindo a taxa de erros em produção em cerca de <strong>15%</strong>.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 3 (Left on Desktop, Right on Mobile) */}
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center w-full relative">
              {/* Marker */}
              <div className="absolute left-[23px] md:left-1/2 w-4 h-4 bg-zinc-200 dark:bg-zinc-800 border border-zinc-400 dark:border-zinc-600 rounded-full transform -translate-x-1/2 mt-2 md:mt-0 shadow-md z-10"></div>

              {/* Content Box */}
              <div className="w-full md:w-[45%] pl-14 md:pl-0 md:pr-12">
                <div className="py-2 md:text-right">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">Desenvolvedor Fullstack (Estágio) | ClickEvolue</h3>
                  <p className="text-zinc-500 font-mono text-sm mb-6">Fevereiro de 2023 — Agosto de 2023</p>

                  <div className="flex flex-col gap-3 text-zinc-600 dark:text-zinc-400 mb-6 text-base leading-relaxed [&_strong]:text-zinc-900 [&_strong]:dark:text-white [&_strong]:font-semibold">
                    <p>Atuei na manutenção de sites já criados pela empresa e participei da criação de novos projetos. Na maioria dos casos, utilizamos <strong>PHP</strong> para a construção do back-end.</p>
                  </div>
                </div>
              </div>

              {/* Empty Space for Desktop Right Side */}
              <div className="hidden md:block w-[45%]"></div>
            </div>

          </div>
        </section>
        {/* Cases Section */}
        <section id="cases" className="px-6 py-24 max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Cases & Portfólio</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-xl">
              Projetos em destaque — o problema que resolvem, as decisões técnicas e a arquitetura utilizada.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {getAllCases().map((caseItem, index) => (
              <Link href={`/cases/${caseItem.slug}`} key={caseItem.slug} className="group block">
                <div className="bg-white dark:bg-[#0a0a0a] border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-400 dark:hover:border-zinc-600 transition-all shadow-sm hover:shadow-lg">
                  <div className="flex flex-col md:flex-row gap-0">
                    <div className="md:w-2/5 h-60 md:h-auto bg-zinc-100 dark:bg-zinc-900 overflow-hidden shrink-0">
                      {caseItem.coverImage ? (
                        <img
                          src={caseItem.coverImage}
                          alt={caseItem.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-400">
                          Sem Imagem
                        </div>
                      )}
                    </div>
                    <div className="flex-1 p-8 flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">{caseItem.type}</div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">{caseItem.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed line-clamp-3">{caseItem.excerpt}</p>
                      </div>
                      <div className="mt-8 flex items-center gap-2 text-zinc-900 dark:text-white font-semibold text-sm">
                        <span>Ver Case Completo</span>
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t border-zinc-200 dark:border-zinc-900 mt-12 bg-zinc-50 dark:bg-[#050505] transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Pronto para inovar?</h2>
              <p className="text-zinc-500">Vamos conversar sobre seu próximo projeto.</p>
              <a href="https://wa.me/5582998389953?text=Olá%20Ícaro,%20gostaria%20de%20falar%20sobre%20um%20projeto!" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors inline-block mt-2">
                Falar no WhatsApp
              </a>
            </div>

            <div className="flex flex-col gap-4 text-zinc-500 text-sm">
              <a href="mailto:icaro.teodoro84@gmail.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-3"><Mail size={16} /> icaro.teodoro84@gmail.com</a>
              <a href="https://wa.me/5582998389953" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-3"><Phone size={16} /> (82) 99838-9953</a>
              <a href="https://linkedin.com/in/icaro-teodoro" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-3"><LinkedinIcon size={16} /> LinkedIn</a>
              <a href="https://github.com/icaroteodoro" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-3"><GithubIcon size={16} /> GitHub</a>
            </div>
          </div>

          <div className="border-t border-zinc-200 dark:border-zinc-900 py-6 text-center text-zinc-500 dark:text-zinc-600 text-xs font-mono">
            <p>© {new Date().getFullYear()} Ícaro Teodoro. Todos os direitos reservados.</p>
          </div>
        </footer>

      </main>
    </div>
  );
}

