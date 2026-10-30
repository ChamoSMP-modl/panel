export interface SupportedLanguage {
  code: string;
  nativeName: string;
}

export const SUPPORTED_LANGUAGES = [
  { code: 'en', nativeName: 'English' },
] as const satisfies readonly SupportedLanguage[];

export type SupportedLanguageCode = (typeof SUPPORTED_LANGUAGES)[number]['code'];

export const DEFAULT_LANGUAGE_CODE: SupportedLanguageCode = 'en';

export function isSupportedLanguage(code: string | null | undefined): code is SupportedLanguageCode {
  return SUPPORTED_LANGUAGES.some((language) => language.code === code);
}
