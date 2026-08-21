import type { Screenshot } from '@/lib/cases';

export function CaseGalleryCarousel({ screenshots }: { screenshots: Screenshot[] }) {
  return (
    <div
      className="case-gallery-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
      aria-label="Imagens do projeto"
    >
      {screenshots.map((s) => (
        <figure key={s.src} className="w-fit shrink-0 snap-start">
          <img
            src={s.src}
            alt={s.alt}
            width={s.width}
            height={s.height}
            className="block h-72 w-auto max-w-none rounded-xl border border-zinc-200 bg-white object-contain shadow-md md:h-96 dark:border-zinc-800 dark:bg-zinc-900"
          />
        </figure>
      ))}
    </div>
  );
}
