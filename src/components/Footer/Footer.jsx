import React from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { data } = useLanguage();

  return (
    <footer className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        {data.footer.title1}<br />
        {data.footer.title2}
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t dark:border-gray-700 pt-8">
        <a href={`mailto:${data.footer.email}`} className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
          <Mail size={20} />
          {data.footer.email}
        </a>
        <div className="flex gap-6 flex-wrap">
          <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            {data.footer.personalBlog}
          </a>
          <a href="#" className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors">
            {data.footer.github}
          </a>
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
            {data.footer.linkedin}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;