import React from "react";
import { I18nContext } from "~/contexts";

export default function Index() {
  let i18nContext = React.useContext(I18nContext);
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <p>{i18nContext.translations.slug}</p>
    </div>
  );
}
