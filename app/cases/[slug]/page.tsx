import { getCaseBySlug, getCaseSlugs } from '@/lib/cases';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/header';
import { CaseGalleryCarousel } from '@/components/case-gallery-carousel';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  try {
    const c = getCaseBySlug(slug);
    return { title: c.title, description: c.excerpt };
  } catch {
    return {};
  }
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let c;
  try { c = getCaseBySlug(slug); } catch { notFound(); }

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-[#050505] text-zinc-900 dark:text-white font-sans relative overflow-x-hidden transition-colors duration-300">
      <div className="absolute top-0 inset-x-0 h-[400px] bg-gradient-to-b from-zinc-200/40 dark:from-zinc-800/20 to-transparent pointer-events-none" />
      <Header />

      <main className="flex-1 pt-28">

        {/* ── Hero ── */}
        <div className="max-w-4xl mx-auto px-6 pt-8 pb-12">
          <Link href="/#cases" className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors mb-12">
            <ArrowLeft size={14} /> Voltar
          </Link>
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">{c.type}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight mb-5">{c.title}</h1>
          <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">{c.excerpt}</p>
        </div>

        {/* ── Cover ── */}
        {c.coverImage && (
          <div className="max-w-4xl mx-auto px-6 pb-16">
            <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl">
              <img src={c.coverImage} alt={c.title} className="w-full object-cover block" />
            </div>
          </div>
        )}

        {/* ── Body: Desafio + Solução ── */}
        <div className="max-w-4xl mx-auto px-6">

          {/* Desafio */}
          <section className="pb-10">
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">O Desafio</p>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">{c.challenge}</p>
          </section>

          <div className="border-t border-zinc-200 dark:border-zinc-800 mb-10" />

          {/* Solução */}
          <section className="pb-10">
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-8">A Solução</p>
            <ol className="flex flex-col gap-8">
              {c.features.map((f, i) => (
                <li key={i} className="flex gap-5">
                  <span className="text-xs font-mono text-zinc-300 dark:text-zinc-700 mt-1 w-5 shrink-0 select-none">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-1.5">{f.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{f.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <div className="border-t border-zinc-200 dark:border-zinc-800 mb-10" />
        </div>

        {/* ── Galeria (largura maior) ── */}
        {c.screenshots.length > 0 && (
          <div className="max-w-4xl mx-auto px-6 pb-10">
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Galeria</p>

            <CaseGalleryCarousel screenshots={c.screenshots} />
          </div>
        )}

        {/* ── Stack ── */}
        <div className="max-w-4xl mx-auto px-6 pb-32">
          <div className="border-t border-zinc-200 dark:border-zinc-800 mb-10" />

          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Arquitetura & Stack</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-5">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-5">Backend</p>
              <ul className="flex flex-col gap-4">
                {c.stack.backend.map((item, i) => (
                  <li key={i}>
                    <p className="text-xs text-zinc-400 mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{item.value}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-5">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-5">Frontend</p>
              <ul className="flex flex-col gap-4">
                {c.stack.frontend.map((item, i) => (
                  <li key={i}>
                    <p className="text-xs text-zinc-400 mb-0.5">{item.label}</p>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{item.value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {c.technologies.map((tech) => (
              <span key={tech} className="text-xs font-medium px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-between">
          <p className="text-xs text-zinc-400 font-mono">© {new Date().getFullYear()} Ícaro Teodoro</p>
          <Link href="/#cases" className="text-xs text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
            <ArrowLeft size={12} /> Portfólio
          </Link>
        </div>
      </footer>
    </div>
  );
}
