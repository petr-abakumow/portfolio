import { PERSON, PROJECTS, STACK } from '@/lib/data';
import type { Lang } from '@/lib/data';

const SITE_URL = 'https://petr-abakumow.github.io/portfolio';

function flatSkills(): string[] {
  const set = new Set<string>();
  for (const g of STACK) for (const it of g.items) set.add(it.n);
  return Array.from(set);
}

export default function JsonLd({ lang }: { lang: Lang }) {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: lang === 'ru' ? PERSON.fullName : PERSON.fullNameEn,
    alternateName: lang === 'ru' ? PERSON.fullNameEn : PERSON.fullName,
    jobTitle: PERSON.jobTitle[lang],
    description:
      lang === 'ru'
        ? 'Веб-разработчик с пятнадцатилетним опытом. Делает интернет-магазины на MODX, WordPress, Bitrix и Next.js. Специализируется на B2B-каталогах и Entity-First SEO под AI-поисковики (Google AI Overviews, Yandex Neuro, ChatGPT Search).'
        : 'Web developer with 15 years of experience. Builds online stores on MODX, WordPress, Bitrix and Next.js. Specializes in B2B catalogs and Entity-First SEO for AI search engines.',
    url: SITE_URL,
    email: `mailto:${PERSON.email}`,
    telephone: PERSON.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: PERSON.city[lang],
      addressCountry: 'RU',
    },
    knowsAbout: flatSkills(),
    knowsLanguage: ['Russian', 'English'],
    sameAs: [PERSON.githubUrl, PERSON.telegramUrl],
    worksFor: { '@type': 'Organization', name: 'Self-employed / Freelance' },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Абакумов Пётр — портфолио',
    alternateName: 'Petr Abakumov — portfolio',
    url: SITE_URL,
    inLanguage: lang === 'ru' ? 'ru-RU' : 'en-US',
    author: { '@id': `${SITE_URL}/#person` },
    publisher: { '@id': `${SITE_URL}/#person` },
  };

  const works = PROJECTS.map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${SITE_URL}/#work-${p.slug}`,
    name: p.url,
    headline: p.title[lang],
    description: p.desc[lang],
    url: p.liveUrl,
    inLanguage: lang === 'ru' ? 'ru-RU' : 'en-US',
    creator: { '@id': `${SITE_URL}/#person` },
    keywords: p.stack.join(', '),
  }));

  const graph = [person, website, ...works];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
