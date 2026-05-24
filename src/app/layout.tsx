import type { Metadata } from 'next';
import { Montserrat, Raleway, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-raleway',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const SITE_URL = 'https://petr-abakumow.github.io/portfolio';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Абакумов Пётр — веб-разработчик · B2B-каталоги · Entity-First SEO',
    template: '%s — Абакумов Пётр',
  },
  description:
    'Веб-разработчик с пятнадцатилетним стажем. Интернет-магазины на MODX и WordPress, корпоративные сайты на 1С-Bitrix, фронтенд на Next.js. Делаю SEO по методологии Entity-First под Google AI Overviews и Yandex Neuro.',
  keywords: [
    'веб-разработчик',
    'Пётр Абакумов',
    'MODX',
    'WordPress',
    '1С-Bitrix',
    'Next.js',
    'B2B-каталог',
    'интернет-магазин',
    'Entity-First SEO',
    'GEO',
    'AI Overviews',
    'Нижний Новгород',
  ],
  authors: [{ name: 'Абакумов Пётр', url: SITE_URL }],
  creator: 'Абакумов Пётр',
  alternates: {
    canonical: SITE_URL,
    languages: { ru: '/', en: '/en' },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Абакумов Пётр — портфолио',
    title: 'Абакумов Пётр — веб-разработчик · B2B-каталоги · Entity-First SEO',
    description:
      'Пятнадцать лет в веб-разработке. Кейсы на fasov.ru, fordela.ru, technikin.ru, profdela.ru, markettd.ru, b2b-nn.ru, svetoch152.ru.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Абакумов Пётр — веб-разработчик',
    description: 'B2B-каталоги · MODX · WordPress · Next.js · Entity-First SEO',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${raleway.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
