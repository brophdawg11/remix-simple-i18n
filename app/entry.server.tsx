import type { EntryContext } from "@remix-run/node";
import { Response } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { I18nContext } from "./contexts";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  loadContext: {
    i18n: {
      locale: string;
      translations: Record<string, string>;
    };
  }
) {
  // On the server we get our i18n info from `getLoadContext`
  let html = renderToString(
    <I18nContext.Provider value={loadContext.i18n}>
      <RemixServer context={remixContext} url={request.url} />
    </I18nContext.Provider>
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response(html, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
