import React from 'react';

const LanguageToggle = ({ isDark, toggleTheme, language, toggleLanguage }) => {
  return (
    <div className="flex items-center gap-6 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-md transition-colors">
      {/* Dark Mode Toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
            isDark ? 'bg-purple-600' : 'bg-gray-300'
          }`}
          aria-label="Toggle dark mode"
        >
          <span
            className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
              isDark ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium tracking-wide">
          DARK MODE
        </span>
      </div>

      {/* Divider */}
      <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />

      {/* Language Toggle */}
      <button 
        onClick={toggleLanguage}
        className="flex items-center gap-2 text-sm font-bold"
      >
        <span className={`${
          language === 'tr' 
            ? 'text-purple-600 dark:text-purple-400' 
            : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'
        } transition-colors`}>
          TÜRKÇE
        </span>
        <span className="text-gray-400 text-xs">'YE GEÇ</span>
      </button>
    </div>
  );
};

export default LanguageToggle;