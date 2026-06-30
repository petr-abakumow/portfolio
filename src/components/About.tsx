import type { Lang } from '@/lib/data';
import { ABOUT } from '@/lib/data';
import { asset } from '@/lib/asset';
import SectionHeading from './SectionHeading';

export default function About({ lang }: { lang: Lang }) {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg-base">
      <div className="container-narrow flex flex-col items-center gap-12">
        <SectionHeading num={ABOUT.num} title={ABOUT.heading} />

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
          <div className="shrink-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full bg-bg-surface border-2 border-accent-coral relative overflow-hidden">
            <img
              src={asset('/petr.webp')}
              alt={lang === 'ru' ? 'Пётр Абакумов — веб-разработчик' : 'Petr Abakumov — web developer'}
              width={280}
              height={280}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 max-w-2xl">
            <h3 className="font-heading font-semibold text-2xl md:text-3xl leading-[1.3]">
              {ABOUT.title[lang]}
            </h3>
            <p className="font-body text-base md:text-lg text-text-muted/95 leading-[1.7]">
              {ABOUT.bio1[lang]}
            </p>
            <p className="font-body text-base md:text-lg text-text-muted/95 leading-[1.7]">
              {ABOUT.bio2[lang]}
            </p>

            <div className="flex gap-10 mt-4">
              {ABOUT.facts.map((f) => (
                <div key={f.num} className="flex flex-col gap-1">
                  <span className="font-heading font-bold text-3xl md:text-4xl text-accent-coral">
                    {f.num}
                  </span>
                  <span className="font-body font-medium text-[13px] text-text-dim tracking-wide">
                    {f.label[lang]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
