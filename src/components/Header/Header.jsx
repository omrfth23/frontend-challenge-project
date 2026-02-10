import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const { language, toggleLanguage, data } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center transition-colors">
          <span className="text-purple-600 dark:text-purple-300 font-bold">A</span>
        </div>
        <div className="flex items-center gap-8">
          <a 
            href="#skills" 
            onClick={(e) => handleNavClick(e, 'skills')}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            {data.header.skills}
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleNavClick(e, 'projects')}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            {data.header.projects}
          </a>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
          </button>

          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-lg bg-purple-50 dark:bg-purple-900 text-purple-600 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors font-semibold"
          >
            {language === 'tr' ? 'EN' : 'TR'}
          </button>

          <button className="px-6 py-2 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900 transition-colors">
            {data.header.hireMe}
          </button>
        </div>
      </nav>
    </header>
    
  );
};

export default Header;