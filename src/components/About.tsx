import type { Lang } from '@/lib/data';
import { ABOUT } from '@/lib/data';
import SectionHeading from './SectionHeading';

export default function About({ lang }: { lang: Lang }) {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg-base">
      <div className="container-narrow flex flex-col items-center gap-12">
        <SectionHeading num={ABOUT.num} title={ABOUT.heading} />

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 w-full">
          <div className="shrink-0 w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full bg-bg-surface border-2 border-accent-coral relative overflow-hidden">
            <svg
              viewBox="0 0 280 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              aria-hidden
            >
              <circle cx="140" cy="105" r="55" stroke="#fafafa" strokeWidth="9" />
              <ellipse cx="140" cy="270" rx="125" ry="95" stroke="#fafafa" strokeWidth="9" />
            </svg>
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
