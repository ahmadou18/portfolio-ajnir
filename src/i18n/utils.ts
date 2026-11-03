import { getRelativeLocaleUrl } from "astro:i18n";
import { ui, defaultLang, languages, type Lang, type TranslationKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, firstSegment] = url.pathname.split("/");
  if (firstSegment in languages) return firstSegment as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function translate(key: TranslationKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Internal link in the given language: `/projects/` (fr) or `/en/projects/` (en). */
export function getLocalizedPath(lang: Lang, path: string): string {
  return getRelativeLocaleUrl(lang, path.replace(/^\//, ""));
}

/** The current page in another language: `/en/projects/accor/` → `/projects/accor/` (fr). */
export function getTranslatedPath(url: URL, lang: Lang): string {
  const currentLang = getLangFromUrl(url);
  const pathWithoutLang =
    currentLang === defaultLang
      ? url.pathname
      : url.pathname.slice(`/${currentLang}`.length);

  return getLocalizedPath(lang, pathWithoutLang);
}
