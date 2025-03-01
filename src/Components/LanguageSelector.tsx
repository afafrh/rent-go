// src/components/LanguageSelector.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-selector">
      <select onChange={(e) => handleLanguageChange(e.target.value)} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="it">Italiano</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
