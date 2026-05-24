import Link from 'next/link';
import type { Lang } from '@/lib/data';
import { I18N } from '@/lib/data';

export default function Nav({ lang }: { lang: Lang }) {
  const other: Lang = lang === 'ru' ? 'en' : 'ru';
  const otherHref = lang === 'ru' ? '/en' : '/';
  const links = ['home', 'about', 'stack', 'projects', 'contact'] as const;

  return (
    <nav className="sticky top-0 z-50 h-[72px] bg-bg-surface/95 backdrop-blur-md border-b border-line-subtle">
      <div className="container-narrow h-full flex items-center justify-between">
        <Link href={lang === 'ru' ? '/' : '/en'} className="flex items-center gap-2.5">
          <span className="block w-2.5 h-2.5 rounded-full bg-accent-coral" />
          <span className="font-heading font-bold text-base tracking-[1.5px]">PETR.DEV</span>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-10">
            {links.map((k, i) => (
              <li key={k}>
                <a
                  href={`#${k}`}
                  className={`font-heading font-medium text-sm tracking-[0.5px] transition-colors hover:text-text-primary ${
                    i === 0 ? 'text-text-primary' : 'text-text-muted'
                  }`}
                >
                  {I18N.nav[k][lang]}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <span className="font-heading font-bold text-[13px] text-accent-coral">
              {lang.toUpperCase()}
            </span>
            <span className="text-text-muted">/</span>
            <Link
              href={otherHref}
              className="font-heading font-medium text-[13px] text-text-muted hover:text-text-primary"
            >
              {other.toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
