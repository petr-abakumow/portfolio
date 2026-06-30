// Префикс для статики на GitHub Pages (basePath = /portfolio в проде).
// Тот же критерий, что и в next.config.mjs — держим синхронно.
const BASE = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

/** Путь к файлу из public/ с учётом basePath. asset('/shots/x.webp') → '/portfolio/shots/x.webp' в проде. */
export function asset(path: string): string {
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
}
