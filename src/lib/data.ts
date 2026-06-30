// Source of truth для контента портфолио.
// Один файл — две локали (ru/en) — чтобы не дублировать структуру.

export type Lang = 'ru' | 'en';

export interface StackItem {
  n: string;
  t: { ru: string; en: string };
}

export interface StackGroup {
  title: { ru: string; en: string };
  items: StackItem[];
}

export interface Project {
  slug: string;
  url: string;
  liveUrl: string;
  cat: { ru: string; en: string };
  role: { ru: string; en: string };
  title: { ru: string; en: string };
  desc: { ru: string; en: string };
  stack: string[];
  badge?: { ru: string; en: string };
  /** Год запуска кейса в моём портфолио */
  since?: number;
}

export const PERSON = {
  fullName: 'Абакумов Пётр',
  fullNameEn: 'Petr Abakumov',
  shortName: 'Пётр',
  shortNameEn: 'Petr',
  jobTitle: { ru: 'Веб-разработчик', en: 'Web Developer' },
  city: { ru: 'Нижний Новгород', en: 'Nizhny Novgorod' },
  yearsInWeb: 15,
  startedYear: 2011,
  email: 'abakumow.p.a@gmail.com',
  phone: '+79063560044',
  phoneDisplay: '+7 906 356 00 44',
  telegram: '@PetrAbakumov',
  telegramUrl: 'https://t.me/PetrAbakumov',
  github: 'petr-abakumow',
  githubUrl: 'https://github.com/petr-abakumow',
};

export const STACK: StackGroup[] = [
  {
    title: { ru: 'CMS и платформы', en: 'CMS & Platforms' },
    items: [
      { n: 'OpenCart', t: { ru: '3 магазина', en: '3 stores' } },
      { n: 'MODX Revolution', t: { ru: 'CMS · c 2016', en: 'CMS · since 2016' } },
      { n: 'WordPress + Woo', t: { ru: 'CMS · c 2014', en: 'CMS · since 2014' } },
      { n: '1C-Bitrix', t: { ru: '4 года', en: '4 years' } },
      { n: 'miniShop2', t: { ru: 'Каталог + корзина', en: 'Catalog + cart' } },
      { n: 'Elementor Pro', t: { ru: 'WP-билдер', en: 'WP builder' } },
      { n: 'Aspro Max', t: { ru: 'Bitrix-тема', en: 'Bitrix theme' } },
    ],
  },
  {
    title: { ru: 'Бэкенд и базы', en: 'Backend & Databases' },
    items: [
      { n: 'PHP 7 / 8', t: { ru: '15 лет', en: '15 years' } },
      { n: 'MySQL · MariaDB', t: { ru: 'Базы данных', en: 'Databases' } },
      { n: 'Node.js', t: { ru: 'Серверный JS', en: 'Server-side JS' } },
      { n: 'Python', t: { ru: 'Скрипты · парсеры', en: 'Scripts · parsers' } },
      { n: 'REST API', t: { ru: 'Архитектура', en: 'Architecture' } },
      { n: 'SSR / SSG', t: { ru: 'Next.js рендеринг', en: 'Next.js rendering' } },
    ],
  },
  {
    title: { ru: 'Фронтенд', en: 'Frontend' },
    items: [
      { n: 'HTML5 · CSS3', t: { ru: 'Семантика', en: 'Semantic' } },
      { n: 'JavaScript ES6+', t: { ru: 'Vanilla · ESM', en: 'Vanilla · ESM' } },
      { n: 'TypeScript', t: { ru: 'Типы и DX', en: 'Types & DX' } },
      { n: 'React 19 · Next.js', t: { ru: 'App Router', en: 'App Router' } },
      { n: 'Tailwind CSS', t: { ru: 'Утилитарный CSS', en: 'Utility-first CSS' } },
      { n: 'SCSS · БЭМ', t: { ru: 'Архитектура CSS', en: 'CSS architecture' } },
    ],
  },
  {
    title: { ru: 'SEO · GEO · AI', en: 'SEO · GEO · AI' },
    items: [
      { n: 'Entity-First SEO', t: { ru: 'с 2024', en: 'since 2024' } },
      { n: 'Schema.org', t: { ru: 'JSON-LD разметка', en: 'JSON-LD markup' } },
      { n: 'GEO под AI', t: { ru: 'Overviews · Neuro', en: 'Overviews · Neuro' } },
      { n: 'Yoast · Метрика', t: { ru: 'GSC · Webmaster', en: 'GSC · Yandex Webmaster' } },
      { n: 'Claude Code · MCP', t: { ru: 'AI-агенты', en: 'AI agents' } },
      { n: 'Cosine analysis', t: { ru: 'Embeddings', en: 'Embeddings' } },
    ],
  },
  {
    title: { ru: 'Инструменты', en: 'Tools' },
    items: [
      { n: 'Git · GitHub', t: { ru: 'Версии · CI', en: 'Versions · CI' } },
      { n: 'Figma + Plugin API', t: { ru: 'Дизайн-токены', en: 'Design tokens' } },
      { n: 'Laragon', t: { ru: 'Локальный стек', en: 'Local stack' } },
      { n: 'FTP · SFTP', t: { ru: 'Beget · reg.ru', en: 'Beget · reg.ru' } },
      { n: 'VS Code', t: { ru: 'IDE', en: 'IDE' } },
      { n: 'Playwright', t: { ru: 'Авто-проверки', en: 'Auto-checks' } },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: 'fasov',
    url: 'fasov.ru',
    liveUrl: 'https://fasov.ru',
    cat: { ru: 'OpenCart', en: 'OpenCart' },
    role: { ru: 'Веб-разработчик', en: 'Web developer' },
    title: {
      ru: 'Упаковка для пищевой промышленности и HoReCa',
      en: 'Packaging for food industry and HoReCa',
    },
    desc: {
      ru: 'B2B-сайт компании по фасовке и упаковке. Магазин на OpenCart с кастомными модулями: каталог услуг (стики, саше, дой-пак, флоу-пак), оборудование, готовая продукция. Структура каталога подогнана под бизнес-логику, шаблон переписан под фирменный стиль.',
      en: 'B2B site for a packaging company. OpenCart store with custom modules: service catalog (sticks, sachets, doy-pack, flow-pack), equipment, ready products. Catalog structure adapted to business logic, theme rewritten for brand style.',
    },
    stack: ['OpenCart', 'PHP 8', 'MySQL', 'HTML5 · CSS3 · БЭМ', 'JavaScript'],
  },
  {
    slug: 'fordela',
    url: 'fordela.ru',
    liveUrl: 'https://fordela.ru',
    cat: { ru: 'MODX + miniShop2', en: 'MODX + miniShop2' },
    role: { ru: 'Веб-разработчик · автор', en: 'Web developer · author' },
    title: {
      ru: 'Оптовый магазин расходных материалов · 10 000+ позиций',
      en: 'Wholesale store of consumables · 10 000+ items',
    },
    desc: {
      ru: 'Оптовый каталог на MODX Revolution + miniShop2, сейчас в активной разработке: 1304 товара опубликовано, в каталоге свыше 10 000 позиций, 86 категорий, фильтрация по отраслям и типам помещений. HoReCa, медицина, розница, логистика. Цены по запросу, корзина, B2B-сценарии.',
      en: 'Wholesale catalog on MODX Revolution + miniShop2, currently in active development: 1304 items published, 10 000+ in the catalog, 86 categories, filtering by industries. HoReCa, medical, retail, logistics. Price-on-request, cart, B2B flows.',
    },
    stack: ['MODX Revolution', 'miniShop2', 'PHP 8', 'MySQL', 'Beget'],
    badge: { ru: 'в разработке', en: 'in progress' },
  },
  {
    slug: 'technikin',
    url: 'technikin.ru',
    liveUrl: 'https://technikin.ru',
    cat: { ru: 'WordPress + WooCommerce', en: 'WordPress + WooCommerce' },
    role: { ru: 'Веб-разработчик', en: 'Web developer' },
    title: {
      ru: 'B2B-каталог промышленной фурнитуры по ГОСТ и DIN',
      en: 'B2B catalog of industrial hardware (GOST & DIN)',
    },
    desc: {
      ru: 'WooCommerce-магазин зажимных приспособлений и станочной фурнитуры. 16 карточек ГОСТ-товаров с 12 атрибутами каждая, 11 DIN-позиций. Форма «Запросить цену» вместо обычной корзины, кастомные mu-плагины, защита от уязвимостей через Wordfence, чистый стек без правки темы.',
      en: 'WooCommerce store of clamping devices and machine hardware. 16 GOST products with 12 attributes each, 11 DIN positions. "Request a price" form instead of cart, custom mu-plugins, Wordfence security, clean stack without theme edits.',
    },
    stack: ['WordPress 6', 'WooCommerce', 'Elementor Pro', 'PHP 8', 'mu-plugins'],
  },
  {
    slug: 'profdela',
    url: 'profdela.ru',
    liveUrl: 'https://profdela.ru',
    cat: { ru: 'OpenCart', en: 'OpenCart' },
    role: { ru: 'Веб-разработчик', en: 'Web developer' },
    title: {
      ru: 'Комплексное снабжение бизнеса — 11 городов России',
      en: 'Business supply platform — 11 cities of Russia',
    },
    desc: {
      ru: 'B2B-платформа на OpenCart, поставляющая оборудование и расходники для розницы, медучреждений, ресторанов, отелей и производств. Каталог по отраслям с десятками категорий, региональная сеть филиалов в 11 городах, форма обратного звонка, страница «о компании», поддержка по всей стране.',
      en: 'B2B platform on OpenCart, supplying equipment and consumables for retail, medical, restaurants, hotels and production. Industry catalog with dozens of categories, regional network in 11 cities, callback form, "about" page, nationwide support.',
    },
    stack: ['OpenCart', 'PHP', 'MySQL', 'JavaScript', 'HTML · CSS · БЭМ'],
  },
  {
    slug: 'markettd',
    url: 'markettd.ru',
    liveUrl: 'https://markettd.ru',
    cat: { ru: 'OpenCart', en: 'OpenCart' },
    role: { ru: 'Веб-разработчик', en: 'Web developer' },
    title: {
      ru: 'Печать этикеток и наклеек от производителя · с 2014',
      en: 'Label and sticker printing from manufacturer · since 2014',
    },
    desc: {
      ru: 'Сайт типографии на OpenCart с переписанным шаблоном. Семьдесят с лишним категорий продукции, корзина, галерея примеров работ, два офиса (Москва и Санкт-Петербург). Иерархическая навигация по каталогу, форма заказа звонка, информационные разделы о доставке и оплате.',
      en: 'Print shop site on OpenCart with rewritten theme. 70+ product categories, cart, work samples gallery, two offices (Moscow and St. Petersburg). Hierarchical catalog, callback form, info pages about delivery and payment.',
    },
    stack: ['OpenCart', 'PHP', 'MySQL', 'JavaScript', 'SVG'],
  },
  {
    slug: 'b2b-nn',
    url: 'b2b-nn.ru',
    liveUrl: 'https://b2b-nn.ru',
    cat: { ru: 'Bitrix + Aspro Max', en: 'Bitrix + Aspro Max' },
    role: { ru: 'Интеграция · кастомизация', en: 'Integration · customization' },
    title: {
      ru: 'Опт упаковки, спецодежды и медрасходки · Поволжье',
      en: 'Wholesale packaging, workwear and medical supplies · Volga region',
    },
    desc: {
      ru: 'Самый крупный из живых проектов. Доработка и кастомизация коробочного решения 1С-Bitrix на теме Aspro Max: каталог по отраслям, фильтры, личный кабинет клиента, отзывы, бренды-партнёры, отдельные сервисные услуги (печать, маркировка), интеграция с 1С.',
      en: 'The largest live project. Customization of a boxed 1C-Bitrix solution on Aspro Max theme: industry catalog, filters, customer cabinet, reviews, partner brands, service offerings (printing, labeling), 1C integration.',
    },
    stack: ['1C-Bitrix', 'Aspro Max', 'PHP', 'jQuery', '1С интеграция'],
    badge: { ru: 'тема Aspro Max', en: 'Aspro Max theme' },
  },
  {
    slug: 'svetoch',
    url: 'svetoch152.ru',
    liveUrl: 'https://svetoch152.ru',
    cat: { ru: 'PHP без фреймворков', en: 'PHP without frameworks' },
    role: { ru: 'Веб-разработчик · автор', en: 'Web developer · author' },
    title: {
      ru: 'Сайт православного вокального ансамбля «СВЕТОЧ»',
      en: 'Website of the Orthodox vocal ensemble "Svetoch"',
    },
    desc: {
      ru: 'Чистый PHP 8, MySQL и vanilla JS — без jQuery, Bootstrap и React. Своя CMS-админка с мультиаккаунтом, библиотека PDF (notes + textes), медиатека с YouTube-эмбедами и VK-видео, страница услуг. PWA-манифест, защищённая отдача файлов через PHP.',
      en: 'Pure PHP 8, MySQL and vanilla JS — no jQuery, no Bootstrap, no React. Custom CMS admin with multi-account, PDF library, media gallery with YouTube and VK videos, services page. PWA manifest, protected file delivery via PHP.',
    },
    stack: ['PHP 8', 'MySQL', 'Vanilla JS', 'Своя CMS', 'PWA'],
  },
];

export const HERO = {
  tag: {
    ru: 'Веб-разработчик · Нижний Новгород · удалёнка',
    en: 'Web Developer · Nizhny Novgorod · remote',
  },
  greeting: { ru: 'Привет, я', en: "Hi, I'm" },
  name: { ru: 'Пётр', en: 'Petr' },
  sub: {
    ru: '15 лет с PHP, CMS и B2B-каталогами',
    en: '15 years with PHP, CMS and B2B catalogs',
  },
  desc: {
    ru: 'Делаю интернет-магазины на MODX и WordPress, корпоративные сайты на 1С-Bitrix, фронтенд на Next.js. Внутри — Entity-First SEO под Google AI Overviews, Yandex Neuro и ChatGPT Search.',
    en: 'I build online stores on MODX and WordPress, corporate sites on 1C-Bitrix, frontend on Next.js. Inside — Entity-First SEO for Google AI Overviews, Yandex Neuro and ChatGPT Search.',
  },
  ctaPrimary: { ru: 'Смотреть проекты', en: 'View projects' },
  ctaSecondary: { ru: 'Написать в Telegram', en: 'Message on Telegram' },
};

export const ABOUT = {
  num: '01',
  heading: 'About',
  title: {
    ru: 'Делаю интернет-магазины, корпоративные сайты и SEO.',
    en: 'I build online stores, corporate sites and SEO.',
  },
  bio1: {
    ru: 'Веб-разработкой занимаюсь с 2011 года — это уже пятнадцатый год. За это время через мои руки прошли пять оптовых каталогов на MODX, WordPress и Bitrix, один сайт православного ансамбля на чистом PHP без фреймворков и десятки лендингов. Самый крупный из живых проектов — b2b-nn.ru, оптовая платформа упаковки и спецодежды на 1С-Bitrix. Ещё один большой каталог, fordela.ru на MODX, сейчас в активной разработке.',
    en: "I've been doing web development since 2011 — this is my fifteenth year. Five wholesale catalogs on MODX, WordPress and Bitrix have passed through my hands, plus a site for an Orthodox ensemble in pure PHP and dozens of landing pages. The largest live project is b2b-nn.ru, a wholesale platform for packaging and workwear on 1C-Bitrix. Another large catalog, fordela.ru on MODX, is currently in active development.",
  },
  bio2: {
    ru: 'С 2024-го перешёл на новую методологию — Entity-First SEO под AI-поисковики: Google AI Overviews, Yandex Neuro, ChatGPT Search, Perplexity. Это уже не про набивание ключевиков, а про сущности, триплеты и knowledge-graph. Если коротко — пишу сайты, которые AI цитирует, а не игнорирует.',
    en: 'Since 2024 I switched to a new methodology — Entity-First SEO for AI search engines: Google AI Overviews, Yandex Neuro, ChatGPT Search, Perplexity. This is no longer about stuffing keywords, but about entities, triples and the knowledge graph. In short — I write sites that AI cites rather than ignores.',
  },
  facts: [
    { num: '15', label: { ru: 'лет в вебе', en: 'years in web' } },
    { num: '7+', label: { ru: 'B2B-проектов', en: 'B2B projects' } },
    { num: '10k+', label: { ru: 'товаров в одном каталоге', en: 'products in one catalog' } },
  ],
};

export const I18N = {
  nav: {
    home: { ru: 'Главная', en: 'Home' },
    about: { ru: 'Обо мне', en: 'About' },
    stack: { ru: 'Стек', en: 'Stack' },
    projects: { ru: 'Проекты', en: 'Projects' },
    contact: { ru: 'Контакты', en: 'Contact' },
  },
  stack: {
    heading: 'Stack',
    num: '02',
    desc: {
      ru: 'Чем работаю каждый день — стек, а не маркетинговый список из пятидесяти баззвордов.',
      en: 'What I use every day — actual stack, not a marketing list of fifty buzzwords.',
    },
  },
  projects: {
    heading: 'Projects',
    num: '03',
    desc: {
      ru: 'Боевые проекты в продакшене. Без рендеров на дизайн-биржах — только то, к чему можно подвести курсор и нажать.',
      en: 'Real projects in production. No mockups from dribbble — only things you can hover and click.',
    },
    live: { ru: 'LIVE', en: 'LIVE' },
    details: { ru: 'Подробности кейса', en: 'Case details' },
  },
  contact: {
    heading: 'Contact',
    num: '04',
    desc: {
      ru: 'Опишите задачу — отвечу в Telegram в течение рабочего дня. Бюджет, сроки, ссылки — всё пригодится.',
      en: 'Describe your task — I will reply in Telegram within a business day. Budget, deadlines, references — anything helps.',
    },
    placeholderName: { ru: 'Как к вам обращаться', en: 'How should I call you' },
    placeholderContact: { ru: 'Email · Telegram · телефон', en: 'Email · Telegram · phone' },
    placeholderTask: {
      ru: 'Расскажите о задаче — что нужно сделать, какие есть ограничения, какой бюджет',
      en: 'Describe the task — what needs doing, any constraints, the budget',
    },
    submit: { ru: 'Отправить в Telegram', en: 'Send to Telegram' },
    direct: { ru: 'Или напрямую', en: 'Or directly' },
    geo: {
      ru: 'Нижний Новгород · Мск+0 · удалёнка по всей России и за рубежом',
      en: 'Nizhny Novgorod · MSK+0 · remote across Russia and abroad',
    },
    eta: {
      ru: 'Ответ обычно в течение 2–4 часов в будни',
      en: 'Usually reply within 2–4 hours on workdays',
    },
  },
};
