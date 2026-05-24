import type { Lang } from '@/lib/data';
import { I18N, PROJECTS } from '@/lib/data';
import SectionHeading from './SectionHeading';

function PreviewWindow({ url, name }: { url: string; name: string }) {
  return (
    <div className="w-full aspect-[16/9] rounded-10 bg-bg-surface border border-line-subtle overflow-hidden">
      <div className="h-7 bg-bg-elevated flex items-center gap-1.5 px-3">
        <span className="w-2 h-2 rounded-full bg-accent-coral" />
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="w-2 h-2 rounded-full bg-green-500" />
        <span className="ml-3 font-heading font-medium text-[11px] text-text-dim">{url}</span>
      </div>
      <div className="p-6 flex flex-col gap-2">
        <span className="font-heading font-semibold text-sm text-text-dim tracking-[1.5px]">
          preview · {name}
        </span>
        <span className="font-body text-xs text-text-dim/60">
          [placeholder · реальный скриншот будет добавлен после релиза]
        </span>
      </div>
    </div>
  );
}

export default function Projects({ lang }: { lang: Lang }) {
  return (
    <section id="projects" className="py-24 md:py-32 bg-bg-base">
      <div className="container-narrow flex flex-col items-center gap-16">
        <SectionHeading
          num={I18N.projects.num}
          title={I18N.projects.heading}
          desc={I18N.projects.desc[lang]}
        />

        <div className="flex flex-col gap-20 w-full">
          {PROJECTS.map((p, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <article
                key={p.slug}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  reversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2 w-full">
                  <PreviewWindow url={p.url} name={p.url} />
                </div>

                <div className="lg:w-1/2 w-full flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="h-eyebrow">{p.cat[lang]}</span>
                    <span className="w-1 h-1 rounded-full bg-text-dim" />
                    <span className="font-heading font-medium text-[11px] tracking-wider uppercase text-text-dim">
                      {p.role[lang]}
                    </span>
                    {p.badge && (
                      <span className="px-2 py-0.5 rounded-[3px] bg-accent-coral-soft font-heading font-medium text-[10px] tracking-wide text-accent-coral">
                        {p.badge[lang]}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-2xl md:text-3xl text-text-primary">
                    {p.url}
                  </h3>

                  <p className="font-heading font-medium text-base md:text-lg text-text-muted leading-[1.4]">
                    {p.title[lang]}
                  </p>

                  <p className="font-body text-sm md:text-base text-text-muted/85 leading-[1.7]">
                    {p.desc[lang]}
                  </p>

                  <ul className="flex flex-wrap gap-2 mt-2">
                    {p.stack.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 mt-3">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2 border-2 border-accent-coral text-accent-coral font-heading font-semibold text-xs tracking-widest2 hover:bg-accent-coral hover:text-bg-base transition-colors"
                    >
                      {I18N.projects.live[lang]}
                      <span aria-hidden>↗</span>
                    </a>
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2 border border-line-strong text-text-primary font-heading font-medium text-xs tracking-widest2 hover:border-text-primary transition-colors"
                    >
                      {I18N.projects.details[lang]}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
