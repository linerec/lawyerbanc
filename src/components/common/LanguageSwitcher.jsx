import React from "react";
import { useTranslation } from "next-i18next";

function LanguageSwitcher() {
  const { t } = useTranslation("common");
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select onChange={handleChange} defaultValue={i18n.language}>
      {i18n.options.allLanguages.map((lng) => (
        <option key={lng} value={lng}>
          {t(`language.${lng}`)}
        </option>
      ))}
    </select>
  );
}

export default LanguageSwitcher;
