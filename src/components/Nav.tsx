'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Lang } from '@/lib/data';
import { I18N } from '@/lib/data';

export default function Nav({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const other: Lang = lang === 'ru' ? 'en' : 'ru';
  const otherHref = lang === 'ru' ? '/en' : '/';
  const links = ['home', 'about', 'stack', 'projects', 'contact'] as const;

  return (
    <nav className="sticky top-0 z-50 bg-bg-surface/95 backdrop-blur-md border-b border-line-subtle">
      <div className="container-narrow h-[72px] flex items-center justify-between">
        <Link
          href={lang === 'ru' ? '/' : '/en'}
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="block w-2.5 h-2.5 rounded-full bg-accent-coral" />
          <span className="font-heading font-bold text-base tracking-[1.5px]">PETR.DEV</span>
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
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

          {/* Гамбургер — только на мобильном */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? (lang === 'ru' ? 'Закрыть меню' : 'Close menu') : lang === 'ru' ? 'Открыть меню' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden flex flex-col items-center justify-center gap-[5px] w-9 h-9 -mr-1"
          >
            <span
              className={`block h-[2px] w-5 bg-text-primary transition-transform duration-200 ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-text-primary transition-opacity duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-[2px] w-5 bg-text-primary transition-transform duration-200 ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Мобильное выпадающее меню */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-line-subtle transition-[max-height] duration-300 ease-out ${
          open ? 'max-h-80' : 'max-h-0 border-t-0'
        }`}
      >
        <ul className="container-narrow flex flex-col py-2">
          {links.map((k) => (
            <li key={k}>
              <a
                href={`#${k}`}
                onClick={() => setOpen(false)}
                className="block py-3 font-heading font-medium text-base text-text-muted hover:text-text-primary border-b border-line-subtle/50 last:border-b-0"
              >
                {I18N.nav[k][lang]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
