import type { Metadata } from 'next';

const SITE_URL = 'https://petr-abakumow.github.io/portfolio';

export const metadata: Metadata = {
  title: 'Petr Abakumov — Web Developer · B2B Catalogs · Entity-First SEO',
  description:
    'Web developer with 15 years of experience. Online stores on MODX and WordPress, corporate sites on 1C-Bitrix, frontend on Next.js. Entity-First SEO for Google AI Overviews and Yandex Neuro.',
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: { ru: '/', en: '/en' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/en`,
    siteName: 'Petr Abakumov — portfolio',
    title: 'Petr Abakumov — Web Developer',
    description:
      'Fifteen years in web development. Case studies: fasov.ru, fordela.ru, technikin.ru, profdela.ru, markettd.ru, b2b-nn.ru, svetoch152.ru.',
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
