'use client';

import { useState } from 'react';
import type { Lang } from '@/lib/data';
import { I18N, PERSON } from '@/lib/data';
import SectionHeading from './SectionHeading';

const TELEGRAM_USER = 'PetrAbakumov';

function buildTelegramLink(payload: { name: string; contact: string; task: string; lang: Lang }) {
  const header =
    payload.lang === 'ru'
      ? `Здравствуйте, Пётр.\nМеня зовут: ${payload.name}\nКонтакт: ${payload.contact}\n\nЗадача:\n${payload.task}`
      : `Hello, Petr.\nMy name: ${payload.name}\nContact: ${payload.contact}\n\nTask:\n${payload.task}`;
  return `https://t.me/${TELEGRAM_USER}?text=${encodeURIComponent(header)}`;
}

export default function Contact({ lang }: { lang: Lang }) {
  const [status, setStatus] = useState<'idle' | 'ok'>('idle');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get('website')) {
      setStatus('ok');
      return;
    }
    const link = buildTelegramLink({
      name: String(fd.get('name') ?? '').trim(),
      contact: String(fd.get('contact') ?? '').trim(),
      task: String(fd.get('task') ?? '').trim(),
      lang,
    });
    window.open(link, '_blank', 'noopener,noreferrer');
    setStatus('ok');
  }

  const channels = [
    { name: 'Telegram', value: PERSON.telegram, href: PERSON.telegramUrl, accent: true },
    { name: 'Email', value: PERSON.email, href: `mailto:${PERSON.email}` },
    { name: 'Phone · WhatsApp', value: PERSON.phoneDisplay, href: `tel:${PERSON.phone}` },
    { name: 'GitHub', value: PERSON.github, href: PERSON.githubUrl },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-elevated">
      <div className="container-narrow flex flex-col items-center gap-12">
        <SectionHeading num={I18N.contact.num} title={I18N.contact.heading} desc={I18N.contact.desc[lang]} />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 w-full">
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
            <input
              name="name"
              type="text"
              required
              maxLength={120}
              placeholder={I18N.contact.placeholderName[lang]}
              className="w-full px-4 py-3.5 rounded-2 bg-bg-surface border border-line-subtle text-text-primary placeholder:text-text-muted/60 font-body text-base focus:outline-none focus:border-accent-coral transition-colors"
            />
            <input
              name="contact"
              type="text"
              required
              maxLength={200}
              placeholder={I18N.contact.placeholderContact[lang]}
              className="w-full px-4 py-3.5 rounded-2 bg-bg-surface border border-line-subtle text-text-primary placeholder:text-text-muted/60 font-body text-base focus:outline-none focus:border-accent-coral transition-colors"
            />
            <textarea
              name="task"
              required
              maxLength={3000}
              rows={5}
              placeholder={I18N.contact.placeholderTask[lang]}
              className="w-full px-4 py-3.5 rounded-2 bg-bg-surface border border-line-subtle text-text-primary placeholder:text-text-muted/60 font-body text-base focus:outline-none focus:border-accent-coral transition-colors resize-y"
            />
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="absolute -left-[9999px] opacity-0 pointer-events-none"
            />

            <button type="submit" className="self-start btn-solid">
              {I18N.contact.submit[lang].toUpperCase()}
              <span aria-hidden>→</span>
            </button>

            <p className="font-body text-xs text-text-dim/80">
              {lang === 'ru'
                ? 'Форма открывает Telegram с заполненным сообщением. Никаких писем "в никуда" — ответ приходит мне сразу.'
                : 'The form opens Telegram with a pre-filled message. No "blackhole" emails — I get your message instantly.'}
            </p>

            {status === 'ok' && (
              <p className="font-body text-sm text-green-500">
                {lang === 'ru'
                  ? 'Открыл вкладку Telegram. Нажмите «Отправить» — и я получу сообщение.'
                  : 'Opened Telegram tab. Press “Send” and I will receive the message.'}
              </p>
            )}
          </form>

          <div className="lg:w-[400px] flex flex-col gap-6">
            <span className="h-eyebrow">{I18N.contact.direct[lang]}</span>

            <ul className="flex flex-col gap-4">
              {channels.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex flex-col gap-0.5 group"
                  >
                    <span className="font-heading font-medium text-[11px] tracking-wider uppercase text-text-dim">
                      {c.name}
                    </span>
                    <span
                      className={`font-heading font-semibold text-lg group-hover:opacity-90 ${
                        c.accent ? 'text-accent-coral' : 'text-text-primary'
                      }`}
                    >
                      {c.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-1 pt-4 border-t border-line-subtle">
              <span className="h-eyebrow">
                {lang === 'ru' ? 'График · География' : 'Schedule · Geo'}
              </span>
              <p className="font-body text-sm text-text-muted">{I18N.contact.geo[lang]}</p>
              <p className="font-body text-sm text-text-muted">{I18N.contact.eta[lang]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
