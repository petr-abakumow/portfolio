import type { Lang } from '@/lib/data';
import { I18N, STACK } from '@/lib/data';
import SectionHeading from './SectionHeading';

export default function Stack({ lang }: { lang: Lang }) {
  return (
    <section id="stack" className="py-24 md:py-32 bg-bg-elevated">
      <div className="container-narrow flex flex-col items-center gap-16">
        <SectionHeading num={I18N.stack.num} title={I18N.stack.heading} desc={I18N.stack.desc[lang]} />

        <div className="flex flex-col gap-12 w-full">
          {STACK.map((group) => (
            <div key={group.title.ru} className="flex flex-col gap-5">
              <h3 className="h-eyebrow">{group.title[lang]}</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {group.items.map((it) => (
                  <li
                    key={it.n}
                    className="flex flex-col gap-1 px-4 py-3.5 rounded-10 bg-bg-surface border border-line-subtle hover:border-accent-coral/40 transition-colors"
                  >
                    <span className="font-heading font-semibold text-sm text-text-primary">{it.n}</span>
                    <span className="font-body text-xs text-text-dim">{it.t[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
