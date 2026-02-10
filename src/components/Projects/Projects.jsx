import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { sendDataToAPI } from '../../services/api';

const Projects = () => {
  const { data } = useLanguage();
  const [loading, setLoading] = useState(false);

  const handleProjectClick = async (project) => {
    setLoading(true);
    try {
      await sendDataToAPI({
        projectName: project.name,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">{data.projects.title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {data.projects.list.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
            onClick={() => handleProjectClick(project)}
          >
            <img 
              src={`https://images.unsplash.com/photo-${index === 0 ? '1460925895917-afdab827c52f' : index === 1 ? '1517694712202-14dd9538aa97' : '1498050108023-c5249f4df085'}?w=400&h=300&fit=crop`}
              alt={project.name} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex gap-2 mb-4 flex-wrap">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-50 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs rounded border border-purple-200 dark:border-purple-700">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a href="#" className="text-purple-600 dark:text-purple-400 underline text-sm hover:text-purple-700 dark:hover:text-purple-300">
                  {project.github}
                </a>
                <a href="#" className="text-purple-600 dark:text-purple-400 underline text-sm hover:text-purple-700 dark:hover:text-purple-300">
                  {project.viewSite}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <div className="text-center mt-4 text-purple-600 dark:text-purple-400">
          Sending data to API...
        </div>
      )}
    </section>
  );
};

export default Projects;