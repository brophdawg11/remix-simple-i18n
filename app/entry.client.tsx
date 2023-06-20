import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { I18nContext } from "./contexts";

// On the client we get our i18n info from the window value populated by our script
let i18n = window._i18n;

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <I18nContext.Provider value={i18n}>
        <RemixBrowser />
      </I18nContext.Provider>
    </StrictMode>
  );
});
