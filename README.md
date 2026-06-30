# Портфолио — Абакумов Пётр

Персональное портфолио веб-разработчика. Тёмная тема, тон benscott.dev, стек Next.js 15 + TypeScript + Tailwind CSS. Версии RU и EN, Entity-First SEO, Telegram-форма для заявок.

**Live:** https://petr-abakumow.github.io/portfolio/

## Стек

| Слой         | Технологии                                                       |
|--------------|------------------------------------------------------------------|
| Фронтенд     | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS      |
| Стили        | Tailwind + CSS Variables, токены из Figma `Brand Tokens`         |
| Шрифты       | Montserrat (headings), Raleway (body), JetBrains Mono (code)     |
| Дизайн       | Figma `portfolio` + figma-console MCP (Desktop Bridge)           |
| SEO          | Schema.org (Person / WebSite / CreativeWork), Entity-First, GEO  |
| Контакты     | API route → Telegram Bot API (`sendMessage`)                     |
| Деплой       | GitHub Pages + GitHub Actions (определяется при первом деплое)   |
| Языки        | i18n: RU (основной) + EN                                         |

## Структура

```
portfolio/
├── CLAUDE.md           ← полная спецификация проекта для AI-агента
├── README.md           ← вы здесь
├── .mcp.json           ← конфиг figma-console MCP (в .gitignore — токен)
├── .gitignore
└── _research/          ← локальные референсы (в .gitignore)
```

## Кейсы, которые попадут на сайт

- **fasov.ru** — фасовка и упаковка для пищевой промышленности, HoReCa, маркетплейсов
- **profdela.ru** — комплексное снабжение бизнеса, 11+ городов
- **markettd.ru** — печать этикеток и наклеек, работает с 2014
- **b2b-nn.ru** — оптовая упаковка / спецодежда / медрасходка (Bitrix + Aspro Max, доработка темы)
- **fordela.ru** — оптовый магазин расходных материалов, 10 000+ наименований (MODX + miniShop2)
- **technikin.ru** — B2B-каталог промышленной фурнитуры по ГОСТ и DIN (WordPress + WooCommerce, кастомные mu-plugins)
- **svetoch152.ru** — сайт православного вокального ансамбля, своя CMS на PHP

## Прогресс

- [x] Анализ референса (benscott.dev) → токены
- [x] Дизайн-система в Figma (45 переменных, тёмная тема)
- [x] Wireframe Desktop / Mobile
- [x] Финальные тексты RU + EN
- [x] Next.js проект + i18n
- [x] Schema.org разметка (Person / WebSite / CreativeWork)
- [x] Контактная форма → Telegram (deep-link с предзаполнением)
- [x] Деплой на GitHub Pages (GitHub Actions)
- [x] Реальные скриншоты 7 кейсов, favicon, OG-карточка
- [x] Мобильное меню (гамбургер)

## Контакты

- Telegram: [@PetrAbakumov](https://t.me/PetrAbakumov)
- Email: abakumow.p.a@gmail.com
- GitHub: [petr-abakumow](https://github.com/petr-abakumow)
