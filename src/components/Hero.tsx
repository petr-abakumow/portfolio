import type { Lang } from '@/lib/data';
import { HERO, PERSON } from '@/lib/data';

export default function Hero({ lang }: { lang: Lang }) {
  return (
    <section
      id="home"
      className="min-h-[640px] md:min-h-[720px] flex items-center justify-center px-6 md:px-20 pt-32 md:pt-44 pb-24"
    >
      <div className="flex flex-col items-center gap-6 max-w-3xl text-center">
        <span className="h-eyebrow">{HERO.tag[lang]}</span>

        <h1 className="font-heading font-normal text-hero leading-[1.1]">
          {HERO.greeting[lang]}{' '}
          <span className="font-bold text-accent-coral">{HERO.name[lang]}</span>.
        </h1>

        <p className="font-heading text-xl md:text-2xl lg:text-3xl text-text-muted leading-snug">
          {HERO.sub[lang]}
        </p>

        <p className="font-body text-base md:text-lg text-text-muted/90 leading-[1.65] max-w-2xl">
          {HERO.desc[lang]}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
          <a href="#projects" className="btn-primary justify-center">
            {HERO.ctaPrimary[lang]}
            <span aria-hidden>→</span>
          </a>
          <a
            href={PERSON.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary justify-center"
          >
            {HERO.ctaSecondary[lang]}
          </a>
        </div>
      </div>
    </section>
  );
}
