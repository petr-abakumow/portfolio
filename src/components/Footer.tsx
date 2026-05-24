import type { Lang } from '@/lib/data';
import { I18N, PERSON } from '@/lib/data';

export default function Footer({ lang }: { lang: Lang }) {
  const navItems = ['home', 'stack', 'projects', 'contact'] as const;
  return (
    <footer className="bg-bg-surface">
      <div className="container-narrow py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="block w-2 h-2 rounded-full bg-accent-coral" />
          <span className="font-heading font-medium text-[11px] tracking-widest2 text-text-muted uppercase">
            {PERSON.fullName} · 2026
          </span>
        </div>

        <ul className="flex items-center gap-6 md:gap-8">
          {navItems.map((k) => (
            <li key={k}>
              <a
                href={`#${k}`}
                className="font-heading text-[12px] tracking-wider uppercase text-text-muted hover:text-text-primary"
              >
                {I18N.nav[k][lang]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {[
            { l: 'TG', href: PERSON.telegramUrl },
            { l: 'GH', href: PERSON.githubUrl },
            { l: 'EM', href: `mailto:${PERSON.email}` },
          ].map((s) => (
            <a
              key={s.l}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="w-9 h-9 rounded-full border border-line-strong flex items-center justify-center font-heading font-bold text-[10px] tracking-wider text-text-primary hover:border-text-primary transition-colors"
              aria-label={s.l}
            >
              {s.l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
