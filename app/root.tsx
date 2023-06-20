import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import React from "react";
import { I18nContext } from "./contexts";

// Only used for the inline <script> approach below
// let isServer = typeof window === "undefined" || typeof document === "undefined";

export default function App() {
  // Not used currently but you'd probably get the locale freom here
  let i18nContext = React.useContext(I18nContext);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        {/* Potential optimization */}
        <link
          rel="preload"
          href={`/locales/${i18nContext.locale}.js`}
          as="script"
        />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <script src={`/locales/${i18nContext.locale}.js`} />
        {/* Alternate approach to inline the translations */}
        {/* <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: isServer ? `window._i18n = JSON.parse(${isServer ? JSON.stringify(JSON.stringify(i18nContext)) : ""})` : "",
          }}
        /> */}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
