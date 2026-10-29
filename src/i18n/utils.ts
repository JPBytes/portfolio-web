import { labels } from "./ui";

export const defaultLang = "en";

export function useTranslations(lang?: string | keyof typeof labels) {
	// 1. Validamos si el idioma pasado existe en `labels`, si no, usamos `defaultLang` ("en")
	const currentLang = (
		lang && lang in labels ? lang : defaultLang
	) as keyof typeof labels;

	return function t(key: keyof (typeof labels)[typeof defaultLang]): string {
		// 2. Buscamos primero en el idioma actual, si no existe probamos en el defaultLang, si no devolvemos la key
		return labels[currentLang]?.[key] ?? labels[defaultLang]?.[key] ?? key;
	};
}
