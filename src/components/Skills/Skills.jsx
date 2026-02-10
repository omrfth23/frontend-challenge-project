import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Skills = () => {
  const { data } = useLanguage();

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">{data.skills.title}</h2>
      <div className="flex gap-8 flex-wrap md:flex-nowrap">
        {data.skills.list.map((skill, index) => (
          <div key={index} className="flex-1 min-w-[250px]">
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">{skill.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;