import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { toast } from 'react-toastify';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { data } = useLanguage();

  const handleHireMe = () => {
    toast.success('Butona tıklandı');
  };

  return (
    <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-purple-600 dark:bg-purple-400"></div>
            <p className="text-purple-600 dark:text-purple-400 font-semibold">
              {data.hero.name}
            </p>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {data.hero.title1}<br />
            {data.hero.title2}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {data.hero.description}
          </p>
          <div className="flex gap-4 flex-wrap">
            <button 
              onClick={handleHireMe}
              className="px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors">
              {data.hero.hireMe}
            </button>
            <a 
              href="https://github.com/omrfth23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border border-purple-600 dark:border-purple-500 rounded-lg flex items-center gap-2 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition-colors text-gray-900 dark:text-white"
            >
              <Github size={20} />
              {data.hero.github}
            </a>
            <button className="px-6 py-3 border border-purple-600 dark:border-purple-500 rounded-lg flex items-center gap-2 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white transition-colors text-gray-900 dark:text-white">
              <Linkedin size={20} />
              {data.hero.linkedin}
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden transition-colors">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop" 
              alt="Developer" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;