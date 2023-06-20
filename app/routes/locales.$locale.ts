import type { LoaderArgs } from "@remix-run/node";

export function loader({ request, params, context }: LoaderArgs) {
  // let translations = loadTranslationsFromDiskForLocale(params.locale);
  let translations = { slug: "translation" };
  let strJson = JSON.stringify(
    JSON.stringify({
      locale: params.locale?.replace(/\.js$/, ""),
      translations,
    })
  );
  return new Response(`window._i18n = JSON.parse(${strJson})`, {
    headers: { "Content-Type": "application/javascript" },
  });
}
